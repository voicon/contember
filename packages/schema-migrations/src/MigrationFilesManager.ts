import { MigrationVersionHelper } from './MigrationVersionHelper'
import * as fs from 'fs'
import { promisify } from 'util'
import * as path from 'path'

const readFile = promisify(fs.readFile)
const fsWrite = promisify(fs.writeFile)
const fsRealpath = promisify(fs.realpath)
const mkdir = promisify(fs.mkdir)
const lstatFile = promisify(fs.lstat)
const readDir = promisify(fs.readdir)

class MigrationFilesManager {
	constructor(public readonly directory: string) {}

	public async createFile(content: string, version: string, extension: string): Promise<string> {
		const filename = `${version}.${extension}`
		const path = `${this.directory}/${filename}`
		await fsWrite(path, content, { encoding: 'utf8' })
		return await fsRealpath(path)
	}

	public async createDirIfNotExist(): Promise<void> {
		try {
			await mkdir(this.directory)
		} catch (error) {
			if (error.code !== 'EEXIST') {
				throw error
			}
		}
	}

	public async listFiles(extension: string): Promise<string[]> {
		const files: string[] = await this.tryReadDir()

		const filteredFiles: string[] = await Promise.all(
			files
				.filter(file => file.endsWith(`.${extension}`))
				.filter(async file => {
					return (await lstatFile(`${this.directory}/${file}`)).isFile()
				}),
		)
		return filteredFiles.sort()
	}

	private async tryReadDir(): Promise<string[]> {
		try {
			return await readDir(this.directory)
		} catch (e) {
			if (e.code === 'ENOENT') {
				return []
			}
			throw e
		}
	}

	public async readFiles(
		extension: string,
		predicate?: (version: string) => boolean,
	): Promise<MigrationFilesManager.MigrationFile[]> {
		let files = await this.listFiles(extension)
		if (predicate) {
			files = files.filter(filename => predicate(MigrationVersionHelper.extractVersion(filename)))
		}
		const filesWithContent = files.map(async filename => ({
			filename: filename,
			path: `${this.directory}/${filename}`,
			content: await readFile(`${this.directory}/${filename}`, { encoding: 'utf8' }),
		}))

		return await Promise.all(filesWithContent)
	}

	public static createForProject(projectsDirectory: string, projectSlug: string): MigrationFilesManager {
		const migrationsDir = path.join(projectsDirectory, projectSlug, 'migrations')
		return new MigrationFilesManager(migrationsDir)
	}
}

namespace MigrationFilesManager {
	export type MigrationFile = {
		filename: string
		path: string
		content: string
	}
}

export { MigrationFilesManager }

export default function escapeSqlString(src: string) {
	return src.replace(/\\/g, '\\\\').replace(/\'/g, "\\'")
}

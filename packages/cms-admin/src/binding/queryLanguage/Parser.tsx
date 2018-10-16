import * as React from 'react'
import { Lexer, Parser as ChevrotainParser } from 'chevrotain'
import { GraphQlBuilder } from 'cms-client'
import { Input } from 'cms-common'
import { FieldName } from '../bindingTypes'
import ToOne, { ToOneProps } from '../coreComponents/ToOne'
import QueryLanguageError from './QueryLanguageError'
import tokenList, { tokens } from './tokenList'

export default class Parser extends ChevrotainParser {
	private static lexer = new Lexer(tokenList)
	private static parser = new Parser()

	private relationExpression = this.RULE<Parser.QueryLanguageExpression>('relationExpression', () => {
		const toOneProps: ToOneProps[] = []

		this.MANY(() => {
			toOneProps.push(this.SUBRULE(this.toOneProps))
			this.CONSUME(tokens.Dot)
		})

		const fieldName = this.SUBRULE(this.fieldName)

		return {
			toOneProps: toOneProps,
			fieldName: fieldName
		}
	})

	private toOneProps = this.RULE('toOneProps', () => {
		const fieldName = this.SUBRULE(this.fieldName)
		const reducedBy = this.OPTION(() => this.SUBRULE(this.uniqueWhere))
		// TODO add nonUnique where
		const props: ToOneProps = {
			field: fieldName
		}

		if (reducedBy !== undefined) {
			props['reducedBy'] = reducedBy
		}

		return props
	})

	private nonUniqueWhere = this.RULE('reductionWhere', () => {}) // TODO

	private uniqueWhere = this.RULE('uniqueWhere', () => {
		const where: Input.UniqueWhere<GraphQlBuilder.Literal> = {}

		this.SUBRULE(this.optionalWhitespace)
		this.CONSUME(tokens.LeftParenthesis)
		this.AT_LEAST_ONE_SEP({
			SEP: tokens.Comma,
			DEF: () => {
				const fieldName = this.SUBRULE(this.identifier)
				this.CONSUME(tokens.Equals)
				const primaryValue = this.SUBRULE(this.primaryValue)

				if (fieldName in where) {
					throw new QueryLanguageError(`Duplicate '${fieldName}' field`)
				}

				where[fieldName] = primaryValue
			}
		})
		this.CONSUME(tokens.RightParenthesis)
		this.SUBRULE1(this.optionalWhitespace)

		return where
	})

	private fieldName = this.RULE<FieldName>('fieldName', () => {
		return this.SUBRULE(this.identifier)
	})

	private primaryValue = this.RULE('primaryValue', () => {
		return this.OR<Input.PrimaryValue<GraphQlBuilder.Literal>>([
			{
				ALT: () => this.SUBRULE(this.string)
			},
			{
				ALT: () => this.SUBRULE(this.number)
			},
			{
				ALT: () => {
					const identifier = this.SUBRULE(this.identifier)
					return new GraphQlBuilder.Literal(identifier)
				}
			}
		])
	})

	private identifier = this.RULE('identifier', () => {
		this.SUBRULE(this.optionalWhitespace)
		const identifier = this.CONSUME(tokens.Identifier).image
		this.SUBRULE1(this.optionalWhitespace)

		return identifier
	})

	private string = this.RULE('string', () => {
		this.SUBRULE(this.optionalWhitespace)
		const image = this.CONSUME(tokens.StringLiteral).image
		this.SUBRULE1(this.optionalWhitespace)
		return image
			.substring(1, image.length - 1)
			.replace("\\'", "'")
			.replace('\\b', '\b')
			.replace('\\f', '\f')
			.replace('\\n', '\n')
			.replace('\\r', '\r')
			.replace('\\t', '\t')
			.replace('\\v', '\v')
	})

	private number = this.RULE('number', () => {
		this.SUBRULE(this.optionalWhitespace)
		const number = parseFloat(this.CONSUME(tokens.NumberLiteral).image)
		this.SUBRULE1(this.optionalWhitespace)

		return number
	})

	private optionalWhitespace = this.RULE('optionalWhitespace', () => {
		this.OPTION(() => this.CONSUME(tokens.WhiteSpace))
	})

	private constructor() {
		super(tokenList, { outputCst: false })
		this.performSelfAnalysis()
	}

	public static parseQueryLanguageExpression(input: string) {
		const lexingResult = Parser.lexer.tokenize(input)

		if (lexingResult.errors.length !== 0) {
			throw new QueryLanguageError(lexingResult.errors[0].message)
		}

		Parser.parser.input = lexingResult.tokens
		const expression = Parser.parser.relationExpression()

		if (Parser.parser.errors.length !== 0) {
			throw new QueryLanguageError(Parser.parser.errors[0].message)
		}

		return expression
	}

	public static generateWrappedField(
		input: string,
		generateField: (fieldName: FieldName) => React.ReactNode
	): React.ReactNode {
		const expression = Parser.parseQueryLanguageExpression(input)
		let currentNode = generateField(expression.fieldName)

		for (let i = expression.toOneProps.length - 1; i >= 0; i--) {
			const currentProps = expression.toOneProps[i]
			currentNode = <ToOne {...currentProps}>{currentNode}</ToOne>
		}

		return currentNode
	}
}

namespace Parser {
	export interface QueryLanguageExpression {
		toOneProps: ToOneProps[]
		fieldName: FieldName
	}
}
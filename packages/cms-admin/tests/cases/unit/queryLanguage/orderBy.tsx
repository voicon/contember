import { expect } from 'chai'
import { GraphQlBuilder } from '@contember/client'
import 'mocha'
import * as React from 'react'
import { Environment } from '../../../../src/binding/dao'
import { Parser } from '../../../../src/binding/queryLanguage'

const parse = (input: string) => {
	return Parser.parseQueryLanguageExpression(input, Parser.EntryPoint.OrderBy, new Environment())
}

describe('orderBy QueryLanguage parser', () => {
	it('should parse single field names', () => {
		expect(parse('fooName')).eql([{ fooName: new GraphQlBuilder.Literal('asc') }])
	})

	it('should parse nested field names', () => {
		expect(parse('fooName.barName.bazName')).eql([
			{ fooName: { barName: { bazName: new GraphQlBuilder.Literal('asc') } } },
		])
	})

	it('should parse multiple field names', () => {
		expect(parse('foo.bar, baz, x.y.z')).eql([
			{ foo: { bar: new GraphQlBuilder.Literal('asc') } },
			{ baz: new GraphQlBuilder.Literal('asc') },
			{ x: { y: { z: new GraphQlBuilder.Literal('asc') } } },
		])
	})

	it('should parse order directions', () => {
		expect(parse('foo asc, bar desc')).eql([
			{ foo: new GraphQlBuilder.Literal('asc') },
			{ bar: new GraphQlBuilder.Literal('desc') },
		])

		expect(parse('foo.bar asc, a.b.c desc')).eql([
			{ foo: { bar: new GraphQlBuilder.Literal('asc') } },
			{ a: { b: { c: new GraphQlBuilder.Literal('desc') } } },
		])
	})

	it('should parse order with odd whitespace use', () => {
		expect(parse('  \t foo.bar ,baz desc, \t x.y.z\t  \t  desc   ')).eql([
			{ foo: { bar: new GraphQlBuilder.Literal('asc') } },
			{ baz: new GraphQlBuilder.Literal('desc') },
			{ x: { y: { z: new GraphQlBuilder.Literal('desc') } } },
		])
	})
})
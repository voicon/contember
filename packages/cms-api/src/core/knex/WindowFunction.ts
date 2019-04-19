import QueryBuilder from './QueryBuilder'
import KnexWrapper from './KnexWrapper'
import Literal from './Literal'

class WindowFunction<HasFunction extends boolean> implements QueryBuilder.Orderable<WindowFunction<HasFunction>> {
	private constructor(
		private readonly wrapper: KnexWrapper,
		private readonly windowFunction: Literal | undefined,
		private readonly partitionByExpr: Literal | undefined,
		private readonly orderByColumns: Literal[]
	) {}

	public static createEmpty(wrapper: KnexWrapper): WindowFunction<false> {
		return new WindowFunction<false>(wrapper, undefined, undefined, [])
	}

	public rowNumber(): WindowFunction<true> {
		return new WindowFunction(this.wrapper, new Literal('row_number()'), this.partitionByExpr, this.orderByColumns)
	}

	public partitionBy(columnName: QueryBuilder.ColumnIdentifier): WindowFunction<HasFunction>
	public partitionBy(callback: QueryBuilder.ColumnExpression): WindowFunction<HasFunction>
	public partitionBy(expr: QueryBuilder.ColumnIdentifier | QueryBuilder.ColumnExpression): WindowFunction<HasFunction> {
		const raw = QueryBuilder.columnExpressionToLiteral(this.wrapper, expr)
		if (raw === undefined) {
			return this
		}
		return new WindowFunction(this.wrapper, this.windowFunction, raw, this.orderByColumns)
	}

	orderBy(columnName: QueryBuilder.ColumnIdentifier, direction: 'asc' | 'desc' = 'asc'): WindowFunction<HasFunction> {
		const raw = new Literal(QueryBuilder.toFqnWrap(columnName) + (direction === 'asc' ? ' asc' : ' desc'))
		return new WindowFunction(this.wrapper, this.windowFunction, this.partitionByExpr, [...this.orderByColumns, raw])
	}

	compile(): Literal {
		if (this.windowFunction === undefined) {
			throw new Error()
		}
		let windowDefinition = new Literal('')
		if (this.partitionByExpr !== undefined) {
			windowDefinition = windowDefinition.appendString('partition by ').append(this.partitionByExpr)
		}
		if (this.orderByColumns.length > 0) {
			windowDefinition = windowDefinition.appendString(' order by ').appendAll(this.orderByColumns, ', ')
		}
		return new Literal(this.windowFunction.sql + ' over(' + windowDefinition.sql + ')', [
			...this.windowFunction.parameters,
			...windowDefinition.parameters,
		])
	}
}

export default WindowFunction

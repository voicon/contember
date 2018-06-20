import { getUserId } from '../utils'
import { Context } from "../Context";
import { GraphQLResolveInfo } from 'graphql';
import { IResolverObject } from 'graphql-tools';

export const Query: IResolverObject = {
  feed(parent, args, ctx: Context, info: GraphQLResolveInfo) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx: Context, info: GraphQLResolveInfo) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info)
  },

  post(parent, { id }, ctx: Context, info: GraphQLResolveInfo) {
    return ctx.db.query.post({ where: { id } }, info)
  },

  me(parent, args, ctx: Context, info: GraphQLResolveInfo) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

import { getUserId } from '../../utils'
import { Context } from "../../Context";
import { GraphQLResolveInfo } from '../../../node_modules/@types/graphql';

interface CreateDraftArgs {
  title: string
  text: string
}

interface PublishArgs {
  id: string
}

interface DeletePostArgs {
  id: string
}


export const post = {
  async createDraft(parent: any, { title, text }: CreateDraftArgs, ctx: Context, info: GraphQLResolveInfo) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createPost(
      {
        data: {
          title,
          text,
          isPublished: false,
          author: {
            connect: { id: userId },
          },
        },
      },
      info
    )
  },

  async publish(parent: any, { id }: PublishArgs, ctx: Context, info: GraphQLResolveInfo) {
    const userId = getUserId(ctx)
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true },
      },
      info,
    )
  },

  async deletePost(parent: any, { id }: DeletePostArgs, ctx: Context, info: GraphQLResolveInfo) {
    const userId = getUserId(ctx)
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return ctx.db.mutation.deletePost({ where: { id } })
  },
}

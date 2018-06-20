import { Context } from "../Context";
import { GraphQLResolveInfo } from "../../node_modules/@types/graphql";

interface AuthPayloadSource {
  user: {
    id: string
  }
}

export const AuthPayload = {
  user: async ({ user: { id } }: AuthPayloadSource, args: {}, ctx: Context, info: GraphQLResolveInfo) => {
    return ctx.db.query.user({ where: { id } }, info)
  },
}

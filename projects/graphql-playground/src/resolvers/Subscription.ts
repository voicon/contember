import { Context } from "../Context";
import { GraphQLResolveInfo } from "../../node_modules/@types/graphql";

export const Subscription = {
  subscribe: (parent: any, args: {}, ctx: Context, info: GraphQLResolveInfo) => {
    return ctx.db.subscription.post(
      {
        where: {
          node: {
            isPublished: true,
          },
        },
      },
      info,
    )
  },
}

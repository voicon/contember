import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { GraphQLResolveInfo } from '../../../node_modules/@types/graphql';
import { Context } from "../../Context";
import { APP_SECRET } from '../../env';

interface SignUpArgs {
  email: string
  password: string
  name: string
}

interface LoginArgs {
  email: string
  password: string
}

export const auth = {
  async signup(parent: any, args: SignUpArgs, ctx: Context, info: GraphQLResolveInfo) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })

    return {
      token: jwt.sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },

  async login(parent: any, args: LoginArgs, ctx: Context, info: GraphQLResolveInfo) {
    const user = await ctx.db.query.user({ where: { email: args.email } })
    if (!user) {
      throw new Error(`No such user found for email: ${args.email}`)
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },
}

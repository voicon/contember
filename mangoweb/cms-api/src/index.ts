import * as dotenv from "dotenv"
import * as fs from "fs"
import { printSchema } from "graphql"
import { GraphQLServer } from "graphql-yoga"
import * as knex from "knex"
import GraphQlSchemaBuilder from "cms-api/dist/graphQLSchema/GraphQlSchemaBuilder"
import getSql from "cms-api/dist/sqlSchema/sqlSchemaBuilderHelper"
import model from "./projects/blog/src/model"
// import { MigrationBuilder } from "node-pg-migrate"
// import DefaultMigrationBuilder from "node-pg-migrate/lib/migration-builder"

dotenv.config()

const builder = new GraphQlSchemaBuilder(model)
const graphQLSchema = builder.build()

const sql = getSql(model)
fs.writeFile(__dirname + "/schema.sql", sql, error => console.error(error))

const fileData = printSchema(graphQLSchema as any, {commentDescriptions: true})

fs.writeFile(__dirname + "/schema.graphql", fileData, error => console.error(error))

const connection = knex({
  debug: true,
  client: "pg",
  connection: {
    host: process.env.DB_HOST as string,
    port: process.env.DB_PORT as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
  }
})

// const result = generate
const server = new GraphQLServer({
  schema: graphQLSchema as any,
  context: {
    db: connection,
  },

})
server.start({port: process.env.SERVER_PORT}, options => console.log(`Server is running on localhost:${options.port}`))

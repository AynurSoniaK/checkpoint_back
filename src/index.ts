import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import datasources from "./lib/datasource";
import CountryResolver from './resolvers/country.resolver';

async function main() {

  const schema = await buildSchema({
    resolvers: [CountryResolver],
    validate: false,
  });

  const server = new ApolloServer({ schema });
  await datasources.initialize()
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4006 },
  });

  console.log(`🚀 Server ready at: ${url}`);
}

main();

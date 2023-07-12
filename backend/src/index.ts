import "reflect-metadata";
import {buildSchema} from "type-graphql";
import {RecipeResolver} from "../resolvers/RecipeResolver";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";


const PORT = Number(process.env.PORT) || 4000;

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [RecipeResolver],

    });

    const server = new ApolloServer({
        schema,
    });

    const {url} = await startStandaloneServer(server, {
        listen: {
            port: PORT
        }
    })
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
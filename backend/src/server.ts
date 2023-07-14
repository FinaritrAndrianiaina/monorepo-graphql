import "reflect-metadata";
import {buildSchema} from "type-graphql";
import {RecipeResolver} from "../resolvers/RecipeResolver";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {PrismaClient} from "@ficommerce/generated/db"
import {CreateOneRecipeResolver} from "@ficommerce/generated/gql";
import createServices, {Services} from "$services/index";

export interface ServerContext {
    prisma: PrismaClient;
    services: Services
}
const PORT = Number(process.env.PORT) || 4000;

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [RecipeResolver, CreateOneRecipeResolver],
        emitSchemaFile: true
    });
    const client = new PrismaClient();
    const services = createServices(client);

    const server = new ApolloServer<ServerContext>({
        schema,
    });

    const {url} = await startStandaloneServer<any>(server, {
        listen: {
            port: PORT
        },
        context: async ({req, res}) => {
            return {
                prisma: client,
                services
            }
        }
    })
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
import "reflect-metadata";
import {buildSchema} from "type-graphql";
import {RecipeResolver} from "../resolvers/RecipeResolver";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {prisma, ServerContext} from "@ficommerce/generated"
import {CreateOneRecipeResolver} from "@ficommerce/generated/graphql";


const PORT = Number(process.env.PORT) || 4000;

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [RecipeResolver, CreateOneRecipeResolver],
        emitSchemaFile: true
    });
    const client = new prisma.PrismaClient();

    const server = new ApolloServer<ServerContext>({
        schema,
    });

    const {url} = await startStandaloneServer<any>(server, {
        listen: {
            port: PORT
        },
        context: async ({req, res}) => {
            return {
                prisma: client
            }
        }
    })
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
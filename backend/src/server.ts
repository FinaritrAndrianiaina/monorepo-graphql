import "reflect-metadata";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {PrismaClient} from "@ficommerce/generated/db"
import  {createServices} from "@ficommerce/services";
import {ServerContext} from "@ficommerce/graphql";
import {generateGQLSchema} from "./schema";
import * as console from "console";

const PORT = Number(process.env.PORT) || 4000;



async function bootstrap() {

    const schema = await generateGQLSchema();
    const client = new PrismaClient();
    const services = createServices(client);

    const server = new ApolloServer<ServerContext>({
        schema
    });


    const {url} = await startStandaloneServer<any>(server, {
        listen: {
            port: PORT
        },
        context: async ({req, res}) => {
            return {
                prisma: client,
                services,
                token: req.headers.authorization
            }
        }
    })
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
import {ApolloClient, InMemoryCache} from "@apollo/client/core";
import {env} from "$env/dynamic/public"

export const client = new ApolloClient({
    uri: env.PUBLIC_API_URL,
    cache: new InMemoryCache(),
});
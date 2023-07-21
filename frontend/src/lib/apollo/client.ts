import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client/core";
import { setContext } from '@apollo/client/link/context';
import { env } from "$env/dynamic/public"

const httpLink = createHttpLink({
    uri: env.PUBLIC_API_URL,
  });

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});


export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
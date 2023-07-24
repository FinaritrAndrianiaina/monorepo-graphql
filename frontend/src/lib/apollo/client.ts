import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client/core";
import {setContext} from '@apollo/client/link/context';
import {env} from "$env/dynamic/public"

const httpLink = createHttpLink({
    uri: env.PUBLIC_API_URL,
});

const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    let token = localStorage.getItem('supabase.auth.token');
    let payload: any;
    try {
        if (token != null) {
            payload = JSON.parse(token);
        }
    } catch (e) {
        console.error(e);
    }
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: payload?.access_token ?? "",
        }
    }
});


export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
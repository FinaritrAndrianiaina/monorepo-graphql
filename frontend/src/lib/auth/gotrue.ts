import {env} from "$env/dynamic/public";
import type {GoTrueClient} from "@supabase/gotrue-js";
import {getContext, setContext} from "svelte";


export const AUTH_SYMBOL = typeof Symbol !== "undefined" ? Symbol("auth") : "@@auth";

export function setAuth(auth: GoTrueClient) {
    return setContext(AUTH_SYMBOL, auth);
}

export function getAuth() {
    const authClient = getContext<GoTrueClient>(AUTH_SYMBOL);
    if (!authClient) {
        throw new Error("ApolloClient has not been set yet, use setAuth(...) to define it");
    }
    return authClient;
}

export function login() {
    const auth = getAuth();
    return (email: string, password: string) => auth.signInWithPassword({
        email,
        password
    })
}
import { env } from "$env/dynamic/public";
import type { GoTrueClient } from "@supabase/gotrue-js";
import { getContext, setContext } from "svelte";




export const AUTH_SYMBOL = "auth"
export function setAuth(auth: GoTrueClient) {
    console.log(AUTH_SYMBOL)
    return setContext(AUTH_SYMBOL,auth);
}

export function getAuth() {
    return getContext<GoTrueClient>(AUTH_SYMBOL);
}

export function login(email: string, password: string) {
    return getAuth().signInWithPassword({
        email,
        password
    })
}
<script lang="ts">
    import {login} from "$lib/auth/gotrue";

    const loginFunc = login();

    let email = '';
    let password = '';

    function onLogin() {
        const res = loginFunc(email, password);
    }
</script>

<form>
    <input type="text" bind:value={email}/>
    <input type="text" bind:value={password}/>
</form>
<button on:click={onLogin}>Login</button>
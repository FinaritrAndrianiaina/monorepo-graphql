<script lang="ts">

    import {logout} from "$lib/auth/gotrue";
    import {getClient} from "svelte-apollo"

    const client = getClient();
    const onLogout = logout(() => {
        client.clearStore();
        client.cache.reset();
    })
</script>

<a href="#logout" on:click={onLogout}>logout</a>
<script>

    import ApolloContext from "$lib/apollo/ApolloContext.svelte";
    import AuthContext from "$lib/auth/AuthContext.svelte";
</script>
<AuthContext>
    <ApolloContext>
        <slot/>
    </ApolloContext>
</AuthContext>

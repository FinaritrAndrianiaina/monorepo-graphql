<script>

    import ApolloContext from "$lib/apollo/ApolloContext.svelte";
	import AuthContext from "$lib/auth/AuthContext.svelte";
</script>
<ApolloContext>
    <AuthContext>
        <slot/>
    </AuthContext>
</ApolloContext>

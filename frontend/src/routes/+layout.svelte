<script>
    import ApolloContext from "$lib/apollo/ApolloContext.svelte";
    import AuthContext from "$lib/auth/AuthContext.svelte";
    import BaseLayoutWrapper from "$components/BaseLayoutWrapper.svelte";
</script>
<AuthContext>
    <ApolloContext>
        <BaseLayoutWrapper>
            <slot/>
        </BaseLayoutWrapper>
    </ApolloContext>
</AuthContext>


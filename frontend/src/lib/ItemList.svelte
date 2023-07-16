<script lang="ts">
    import {
        FindAllRecipeDocument,
    } from "@ficommerce/client-query/graphql";
    import type {FindAllRecipeQuery, FindAllRecipeQueryVariables} from "@ficommerce/client-query/graphql";
    import {query} from "svelte-apollo";

    const recipe = query<FindAllRecipeQuery, FindAllRecipeQueryVariables>(FindAllRecipeDocument);
</script>

{#if $recipe.loading}
    Loading...
{:else if $recipe.error}
    Error: {$recipe.error.message}
{:else}
    {#each $recipe.data.findAll as item}
        {item.title}
    {/each}
{/if}
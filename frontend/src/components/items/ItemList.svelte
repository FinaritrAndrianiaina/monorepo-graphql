<script lang="ts">
    import {
        GetManyProductsDocument
    } from '@ficommerce/client-query';
    import type {
        GetManyProductsQuery,
        GetManyProductsQueryVariables
    } from "@ficommerce/client-query"
    import {query} from 'svelte-apollo';

    const products = query<GetManyProductsQuery, GetManyProductsQueryVariables>(GetManyProductsDocument);

    $: data = $products.data?.getManyProducts
</script>
{#if $products.loading}
    Loading...
{:else if $products.error}
    Error: {$products.error.message}
{:else}
    <table>
        <thead>
        <tr>
            <th>
                id
            </th>
            <th>
                name
            </th>
        </tr>
        </thead>
        <tbody>
        {#each data as product}
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
            </tr>
        {/each}
        </tbody>
    </table>
{/if}

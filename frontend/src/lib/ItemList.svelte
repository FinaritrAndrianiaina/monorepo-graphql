<script lang="ts">
	import { FindAllDocument, SortOrder } from '@ficommerce/client-query';
	import type {
		FindAllQuery,
		FindAllQueryVariables
	} from '@ficommerce/client-query';
	import { query } from 'svelte-apollo';
	import Item from './Item.svelte';

	const recipe = query<FindAllQuery, FindAllQueryVariables>(FindAllDocument, {
		variables: {
			orderBy: {
				creationDate: SortOrder.Asc
			}
		}
	});
	$: data = $recipe.data?.findAll ?? []
</script>

{#if $recipe.loading}
	Loading...
{:else if $recipe.error}
	Error: {$recipe.error.message}
{:else}
	<ul>
		<li>
			{#each data as item}
				{item.id}
			{/each}
		</li>
	</ul>
{/if}

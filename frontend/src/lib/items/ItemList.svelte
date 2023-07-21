<script lang="ts">
	import { FindAllDocument } from '@ficommerce/client-query';
	import type {
		FindAllQuery,
		FindAllQueryVariables
	} from '@ficommerce/client-query';
	import { query } from 'svelte-apollo';
	import { login } from '$lib/auth/gotrue';

	const recipe = query<FindAllQuery, FindAllQueryVariables>(FindAllDocument);
	
	let email = '';
	let password = '';

	function onLogin() {
		const res = login(email,password);
		console.log(res);
	}

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

<form>
	<input type="text" bind:value={email}/>
	<input type="text" bind:value={password}/>
</form>
<button on:click={onLogin}>Login</button>
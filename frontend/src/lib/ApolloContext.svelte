<script>
	import { setClient } from 'svelte-apollo';
	import { client } from './client';
	import { PUBLIC_API_URL } from '$env/static/public';
    console.log(PUBLIC_API_URL)
	setClient(client);
</script>

<slot />

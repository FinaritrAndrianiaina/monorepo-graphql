<script>
	import { setClient } from 'svelte-apollo';
	import { client } from './client';
	setClient(client);
</script>

<slot />

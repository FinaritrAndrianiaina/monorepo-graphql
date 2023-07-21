<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { setAuth } from './gotrue';
    import {GoTrueClient} from "@supabase/gotrue-js"

	export const auth = new GoTrueClient({
		debug: true,
		url: env.PUBLIC_AUTH_URL
	});
	setAuth(auth);
</script>

<slot />

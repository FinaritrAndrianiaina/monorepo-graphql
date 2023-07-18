import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    optimizeDeps: {
        include: [
            "@apollo/client/core",
            "@apollo/client/cache",
            "@apollo/client/link/ws",
            "@apollo/client/link/context",
            "@apollo/client/link/error",
            "@apollo/client/utilities",
        ],
        exclude: ["@apollo/client", "svelte-apollo","@ficommerce/client-query"],
    },
    ssr: {
        noExternal: ['@apollo/client', 'svelte-apollo'],
    },
});

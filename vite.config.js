// import tailwindcss from '@tailwindcss/vite';
// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [tailwindcss(), sveltekit()]
// });

// export default {
// 	server: {
// 		host: true,          // 👈 Important! Allows external access
// 		port: 5173,          // Optional: you can set a specific port
// 		strictPort: true,    // Optional: fail if port is taken
// 	}
// }

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// You don't need to import Tailwind as a plugin in Vite. Tailwind works via PostCSS config.
export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,
		port: 5173,
		strictPort: true,
		allowedHosts: ['ayrm5d-ip-103-169-64-93.tunnelmole.net'],
	}
});

import { defineConfig } from "vite";
import browserslistToEsbuild from "browserslist-to-esbuild";

export default defineConfig({
	build: {
		cssMinify: "lightningcss",
		target: browserslistToEsbuild(["last 1 version and > 0.1%", "> 0.2%", "not dead"]),
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			drafts: {
				nesting: true,
				customMedia: true,
			},
			sourceMap: true,
		},
	},
	publicDir: "static",
});

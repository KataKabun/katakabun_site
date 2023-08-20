const pluginWebc = require("@11ty/eleventy-plugin-webc");
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");

module.exports = function (eleventyConfig) {
	eleventyConfig.ignores.add("./README.md");

	eleventyConfig.addPlugin(pluginWebc, {
		components: [
			"src/_components/**/*.webc",
			"npm:@11ty/is-land/*.webc"
		]
	});

	eleventyConfig.addPlugin(lightningCSS, {
		minify: false
	});

	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("src/fonts");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");

	function getPosts(collectionApi) {
		return collectionApi.getFilteredByGlob("./src/blog/*").reverse().filter(function (item) {
			return !!item.data.permalink;
		})
	}

	eleventyConfig.addCollection("blog", function (collection) {
		return getPosts(collection);
	})

	return {
		pathPrefix: "",
		markdownTemplateEngine: false,
		dir: {
			input: "src",
			output: "dist",
			layouts: "_includes"
		}
	}
};
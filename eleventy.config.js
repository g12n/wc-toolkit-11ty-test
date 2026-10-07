import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./**/*.css");
	eleventyConfig.addWatchTarget("./**/*.js");
		
	eleventyConfig.addFilter("stringify", (value, spaces = 0) =>
		JSON.stringify(value, null, " "),
	);

	eleventyConfig.addPassthroughCopy("src/custom-elements");
	eleventyConfig.addPassthroughCopy("src/client_modules");
	eleventyConfig.addPassthroughCopy("src/importmap.js");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	eleventyConfig.setServerOptions({
		port: 8080,
		showAllHosts: true,
	});

	// Base Config
	return {
		pathPrefix: "/wc-toolkit-11ty-test/",
		dir: {
			input: "src",
			output: "_site",
			layouts: "_layouts",
		},
		markdownTemplateEngine: "njk",
	};
}

export default function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./**/*.css");
	eleventyConfig.addWatchTarget("./**/*.js");
		
	eleventyConfig.addFilter("stringify", (value, spaces = 0) =>
		JSON.stringify(value, null, " "),
	);

	eleventyConfig.addPassthroughCopy("src/custom-elements");

	eleventyConfig.setServerOptions({
		port: 8080,
		showAllHosts: true,
	});

	// Base Config
	return {
		dir: {
			input: "src",
			output: "_site",
			layouts: "_layouts",
		},
		markdownTemplateEngine: "njk",
	};
}

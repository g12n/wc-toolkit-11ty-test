import { getComponentDetailsTemplate } from "@wc-toolkit/cem-utilities";

export const data = {
	pagination: {
		data: "components",
		size: 1,
		addAllPagesToCollections: true,
		alias: "customElement",
	},
	layout: "main.njk",
	tags: ["components"],
	permalink: (data) => `components/${data.customElement.name}/index.html`,
	eleventyComputed: {
		title: (data) => data.customElement.name,
		description: (data) => data.customElement.description,
	},
};

export async function render(data) {
	const renderedItems = await Promise.all(
		data.pagination.items.map(async (component) => {
			const markdownContent = getComponentDetailsTemplate(component);
			const renderedHtml = await this.renderTemplate(markdownContent, "md");

			let usage = "";
			if (component.definitionPath.endsWith(".css")) {
				usage = `&lt;link rel="stylesheet" src="/${component.definitionPath}"&gt;&lt;link/&gt`;
			} else {
				usage = `&lt;script type="module" src="/${component.definitionPath}"&gt;&lt;script/&gt`;
			}
			return `
        <h1>${component.name}</h1>
        <p><code>&lt;${component.tagName}&gt;</code></p>
        ${renderedHtml}
        <h2>Usage</h2>
        <pre>${usage}</pre>
      `;
		}),
	);

	return renderedItems.join("");
}

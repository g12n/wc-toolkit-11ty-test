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
			let markdownContent = getComponentDetailsTemplate(component);
			
			const examples = data.collections['examples'];
			
			let examplesCode = examples.map(example=>{
				if(example.page.fileSlug === component.tagName){
				markdownContent += "\n\n" + example.page.rawInput 
				}
			})

			let usage = "";
			if (component.definitionPath.endsWith(".css")) {
				usage = `<link rel="stylesheet" href="/${component.definitionPath}"></link>`;
			} else {
				usage = `<script type="module" src="/${component.definitionPath}"></script>`;
			}

			markdownContent +=`
## Usage
\`\`\`html 
${usage}"
\`\`\`
`
			const renderedHtml = await this.renderTemplate("\n\n"+markdownContent, "md");


			return `

        <h1>${component.name}</h1>
        <p><code>&lt;${component.tagName}&gt;</code></p>
        ${renderedHtml}
        ${usage}
      `;
		}),
	);

	return renderedItems.join("");
}

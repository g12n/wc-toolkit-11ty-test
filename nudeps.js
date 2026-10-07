export default {
	dir: "./src/client_modules",
	prune: true,
    map:"./src/importmap.js",
	overrides: {
		microlighter: { include: "force" }
	}
};
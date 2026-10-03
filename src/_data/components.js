
import { generateCem } from "@wc-toolkit/cem-generator";
import { resolveModulePaths } from "@wc-toolkit/module-path-resolver";
import { getAllComponents } from '@wc-toolkit/cem-utilities';


let config = {
  include: ["src/custom-elements/**/*.js", "src/custom-elements/**/*.css"],
  exclude: ["**/*.test.*","**/*.spec.*","**/*.stories.*","**/dist/**","**/node_modules/**"],
  
 customJsDocTags: {
    a11y: { mappedName: "a11y", isArray: false },
  },
}


export default function () {

	const manifest = generateCem(config);
	resolveModulePaths(manifest, {
      modulePathTemplate: (modulePath) => modulePath.replace("src/custom-elements", "custom-elements")
    });
	return getAllComponents(manifest);
};
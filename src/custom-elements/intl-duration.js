/**
 * Display an ISO 8601 duration into any language
 * @attr {string} duration - ISO 8601 duration string (e.g. "PT1H30M", "P2Y3M10DT2H30M15S")
 * @attr {string} lang - Language locale code (e.g. "en-US", "fr-FR", "de-DE", "ja-JP")
 * @attr {"long"|"short"|"narrow"|"digital"} style - Formatting style (default: "long")
 */
export class IntDurationElement extends HTMLElement {
	static get observedAttributes() {
		return ["duration", "lang", "style"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.textContent = "hallo";
	}
}

customElements.define("intl-duration", IntDurationElement);

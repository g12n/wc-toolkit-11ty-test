/**
 * Display an ISO 8601 duration into any language
 * @attr {string} duration - ISO 8601 duration string (e.g. "PT1H30M", "P2Y3M10DT2H30M15S")
 * @attr {string} lang - Language locale code (e.g. "en-US", "fr-FR", "de-DE", "ja-JP")
 * @attr {"long"|"short"|"narrow"|"digital"} date-style - Formatting style (default: "long")
 * @webFeature intl-duration-format
 * @webFeature temporal 
 */
export class IntDurationElement extends HTMLElement {
	static get observedAttributes() {
		return ["duration", "lang", "date-style"];
	}
	attributeChangedCallback(name, oldValue, newValue) {
		console.log(name,oldValue, newValue)
		if(name ==="duration"){
			let duration = Temporal.Duration.from(newValue);
			let lang = this.getAttribute("lang") || navigator.language;
			let style = this.getAttribute("date-style") || "long";
			this.textContent =  new Intl.DurationFormat(lang, { style:style }).format(duration);
		}
	}
}

customElements.define("intl-duration", IntDurationElement);
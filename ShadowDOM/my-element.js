


class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2>
                <div>
                    <p>Ahora estoy trabajando con shadow DOM</p>
                </div>
            </h2>
        </section>
        ${this.getStyles()}
        `
        return template;
    }

    getStyles() {
        return `
        <style>
            h2 {
                color: red;
            }
        </style>
        `
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-element", myElement);
 


class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        console.log("hola desde el constructor - memoria")
        /* this.attachShadow({mode: "open"}); */
    }

    /* static get observedAttributes() {
        return ["title", "text", "img"];
    }

    attributeChangedCallback(attr, oldVal, newVal) {

        if (oldVal !== newVal) {
            this[attr] = newVal
        }
        
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2>${this.title}</h2>
            <div>
                <p>${this.text}</p>
                <img src="${this.img}" alt="" />
            </div>
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
            p {
                color: green;
                size: 12px
            }
            img {
            width: 300 px;
            }

        </style>
        `
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    } */

    connectedCallback() {
        console.log("Hola desde el DOM")
        this.render();
    }

    disconnectedCallback() {
        console.log("Adios del DOM")
    }
}

customElements.define("my-custom-element", MyCustomElement);

document.querySelector("my-custom-element").remove();
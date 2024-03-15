customElements.define(
    "my-h1",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.innerHTML = `
              <h1>
                ${this.getAttribute("content") ?? ""}
                <slot></slot>
              </h1>
            `;
        }
    }
);

customElements.define(
    "my-h2",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.innerHTML = `
              <h2>
                <slot></slot>
              </h2>
            `;
        }
    }
);

customElements.define(
    "my-p",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.innerHTML = `
              <p>
                <slot></slot>
              </p>
            `;
        }
    }
);

customElements.define(
    "my-nav",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.innerHTML = `
              <nav>
                <slot></slot>
              </nav>
            `;
        }
    }
);

customElements.define(
    "my-ul",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.innerHTML = `
              <ul>
                <slot></slot>
              </ul>
            `;
        }
    }
);


customElements.define(
    "my-li",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.innerHTML = `
              <li>
                <slot></slot>
              </li>
            `;
        }
    }
);

customElements.define(
    "my-img",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.innerHTML = `
              <img src="${this.getAttribute("src")}" alt="${this.getAttribute("alt")}">
                <slot></slot>
              </img>
            `;
        }
    }
);

customElements.define(
    "my-a",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.innerHTML = `
              <a href="${this.getAttribute("href")}">
                ${this.getAttribute("content") ?? ""}
                <slot></slot>
              </a>
            `;
        }
    }
);
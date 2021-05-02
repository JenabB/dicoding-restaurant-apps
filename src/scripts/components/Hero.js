class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
          <h1 class="hero__title">
            Ziva Restaurant
          </h1>
          <p class="hero__tagline">
            yare-yare
          </p>
          <a href="#main-content" class="btn">Yuk Cek!</a>
        </div>
      `;
  }
}

customElements.define('hero-custom', Hero);
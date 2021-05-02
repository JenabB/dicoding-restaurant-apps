class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();

    }

    render() {
        this.innerHTML = `
        <nav id="drawer" class="nav">
        <ul class="nav__list">
            <li class="nav__item"><a href="#">Home</a></li>
            <li class="nav__item"><a href="#">Trending</a></li>
            <li class="nav__item"><a href="#">Menu</a></li>
            <li class="nav__item"><a href="#">About Us</a></li>
        </ul>
    </nav>
      `;
    }
}

customElements.define('app-bar', AppBar);
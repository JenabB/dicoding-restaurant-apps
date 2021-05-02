import restaurant from "../../DATA.json";
const restaurantMenu = restaurant.restaurants

restaurantMenu.forEach((restaurant) => {
    console.log(restaurant)
})

class MainContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div>
       <h1>Main Content</h1>
       </div>
      `;
    }
}



customElements.define('main-content', MainContent);
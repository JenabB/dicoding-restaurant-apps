import restaurant from "../../DATA.json";
const restaurantMenu = restaurant.restaurants

const mainContent = document.createElement("main-content");
mainContent.restaurants = restaurantMenu;


console.log(restaurantMenu[0].description.slice(0, 200))
const body = document.getElementById("main-content")
body.appendChild(mainContent);

class MainContent extends HTMLElement {
    set restaurants(restaurant) {
        this.restaurants = restaurant
    }

    connectedCallback() {
        this.render();
    }

    render() {

        this.restaurants.forEach(restaurant => {
            this.innerHTML += `
            <div class="card">
            <img src=${restaurant.pictureId} alt=${restaurant.name} />
            <div class="card-meta">
            <div>
            <h1>${restaurant.name}</h1>
            <h2>${restaurant.city}</h2>
            </div>
               
                <div class="rating">
                <img src="/images/star.png" alt="star" />
                <h3>${restaurant.rating}</h3>
                </div>
               
                <p class="truncate">${restaurant.description.slice(0, 100)}...</p>
            </div>   
            </div>
            `;
        });

    }
}



customElements.define('main-content', MainContent);
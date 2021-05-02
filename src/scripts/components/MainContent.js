import restaurant from "../../DATA.json";
const restaurantMenu = restaurant.restaurants

const mainContent = document.createElement("main-content");
mainContent.restaurants = restaurantMenu;

function truncateString(str, num) {
    return str;
}

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
                <h1>${restaurant.name}</h1>
                <h2>${restaurant.city}</h2>
                <h3>${restaurant.rating}</h3>
                <p class="truncate">${restaurant.description}</p>
            </div>   
            </div>
            `;
        });

    }
}



customElements.define('main-content', MainContent);
import { createHeader } from "./home";

import misoSoup from "./assets/Miso Soup.png";
import riceBall from "./assets/Rice Ball.png";
import grilledLamprey from "./assets/Grilled Lamprey.png";
import freshTofu from "./assets/Fresh Tofu.png";
import beefBowl from "./assets/Beef Bowl.png";
import udumbaraCake from "./assets/Udumbara Cake.png";
import greenTea from "./assets/Green Tea.png";
import mio from "./assets/Mio.png";
import sangetsusei from "./assets/Sangetsusei.png";
import sparrowSake from "./assets/Sparrow Sake.png";
import dassai from "./assets/Dassai.png";
import fireRat from "./assets/Fire Rat's Robe.png";

const cuisinesArray = [
    { img: misoSoup, name: "Miso Soup", price: 8, tags: ["Economical", "Homecooking", "Soup", "Vegetarian"], },
    { img: riceBall, name: "Rice Ball", price: 6, tags: ["Economical", "Filling", "Homecooking", "Japanese", "Vegetarian"], },
    { img: grilledLamprey, name: "Grilled Lamprey", price: 22, tags: ["Aquatic", "Grilled", "Signature"], },
    { img: freshTofu, name: "Fresh Tofu", price: 21, tags: ["Good w/ Alcohol", "Homecooking", "Mild", "Small Portion", "Vegetarian"], },
    { img: beefBowl, name: "Beef Bowl", price: 20, tags: ["Filling", "Homecooking", "Meat"], },
    { img: udumbaraCake, name: "Udumbara Cake", price: 78, tags: ["Dreamy", "Expensive", "Legendary", "Photogenic", "Premium", "Sweet"], },
];

const beveragesArray = [
    { img: greenTea, name: "Green Tea", price: 1, tags: ["No Alcohol"], },
    { img: mio, name: "Mio", price: 18, tags: ["Low Alcohol", "Bitter", "Chillable", "Cocktail", "Dry", "Sake", "Sweet", "Soda"], },
    { img: sangetsusei, name: "Sangetsusei", price: 34, tags: ["Mid Alcohol", "Chillable", "Heatable", "Neat", "Sake"], },
    { img: sparrowSake, name: "Sparrow Sake", price: 50, tags: ["Mid Alcohol", "Chillable", "Dry", "Heatable", "Sake"], },
    { img: dassai, name: "Dassai", price: 130, tags: ["Mid Alcohol", "Chillabe", "Heatable", "Neat", "Shochu"], },
    { img: fireRat, name: "Fire Rat's Robe", price: 420, tags: ["High Alcohol", "Dry", "Heatable", "Shochu"], },
];

export default function createMenu() {
    const content = document.querySelector("#content");

    content.append(createHeader("Cuisines"));

    const cuisines = document.createElement("div");
    cuisines.classList.add("cuisines");
    cuisinesArray.forEach((item) => 
        cuisines.append(createMenuItem(item))
    );
    content.append(cuisines);
    
    content.append(createHeader("Beverages"));

    const beverages = document.createElement("div");
    beverages.classList.add("beverages");
    beveragesArray.forEach((item) => 
        beverages.append(createMenuItem(item))
    );
    content.append(beverages);
}

function createMenuItem(item) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.append(createMenuImg(item.img, item.name));
    menuItem.append(createMenuName(item.name, item.price));
    menuItem.append(createMenuTags(item.tags));
    return menuItem;
}

function createMenuImg(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.width = 100;
    img.height = 100;
    img.classList.add("menu-img");
    return img;
}

function createMenuName(name, price) {
    const container = document.createElement("div");
    container.classList.add("menu-name");

    const menuName = document.createElement("h2");
    menuName.classList.add("item-name");
    menuName.textContent = name;
    container.append(menuName);

    const menuPrice = document.createElement("h3");
    menuPrice.classList.add("price");
    menuPrice.textContent = price;
    container.append(menuPrice);
    return container;
}

function createMenuTags(tags) {
    const container = document.createElement("div");
    container.classList.add("tags");

    tags.forEach((tag) => {
        const text = document.createElement("p");
        text.textContent = tag;
        container.append(text);
    });
    return container;
}
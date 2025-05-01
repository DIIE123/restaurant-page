import { createTextbox, createImg } from "./home";

import contactImg from "./assets/Contact.png";

export default function createContact() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("contact");

    const img = createImg(contactImg, "Picture of Mystia's House", 650);
    container.append(img);

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    contactInfo.append(createTextbox("Contact Info", "<p>🏠︎ 320 Sparrow Lane, Youkai Trail</p><p>☎ 1-800-LORELEI</p><p>✉ birdbrain143@gmail.com</p>"));

    const link = document.createElement("a");
    link.classList.add("button");
    link.href = "https://store.steampowered.com/app/1584090/Touhou_Mystias_Izakaya/";
    link.textContent = "Order Now!";
    contactInfo.append(link);
    container.append(contactInfo);

    content.append(container);
}
import mystiaPortrait from "./assets/Mystia Portrait.png";

export default function createHome() {
  const content = document.querySelector("#content");

  const mainPortrait = createImg(mystiaPortrait, "Mystia Portrait", "260");
  mainPortrait.classList.add("portrait");
  content.append(mainPortrait);

  const mainTextbox = createTextbox(
    "Mystia",
    "Welcome to the best izakaya in Gensokyo! At Mystia's Izakaya, we provide a completely personalized experience to suit your own unique preferences. Just tell us your liked tags and we'll surprise you with the most delicious dishes you'll ever taste.",
  );
  mainTextbox.classList.add("intro");
  content.append(mainTextbox);

  const reviewHeader = createHeader(
    "Read what our beloved customers have to say!",
  );
  content.append(reviewHeader);

  const reviews = document.createElement("div");
  reviews.classList.add("reviews");
  reviews.append(
    createTextbox(
      "Chen",
      "I had my doubts, but I was pleasantly surprised by the quality of the dishes. Please come so I can extort more money - I mean, help expand the izakaya further.",
    ),
  );
  reviews.append(
    createTextbox(
      "Yuyuko",
      "Absolute 10/10 experience! My boundless stomach was filled with delight after coming here! I wonder if the izakaya owner is edible, she looks delicious...",
    ),
  );
  reviews.append(
    createTextbox(
      "Reimu",
      "The food is not bad for a youkai, I guess. I'll let it pass this time, as long as no disturbances happen.",
    ),
  );
  reviews.append(
    createTextbox("Wriggle", "She force fed me dark matter please help"),
  );
  content.append(reviews);
}

export function createImg(src, alt, width) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.width = width;
  return img;
}

export function createHeader(text) {
  const header = document.createElement("h1");
  header.classList.add("header");
  header.textContent = text;
  return header;
}

export function createTextbox(title, text) {
  const textbox = document.createElement("div");
  textbox.classList.add("textbox");

  const name = document.createElement("h1");
  name.classList.add("title");
  name.textContent = title;
  textbox.append(name);

  const textcontent = document.createElement("p");
  textcontent.classList.add("text");
  textcontent.innerHTML = text;
  textbox.append(textcontent);

  return textbox;
}

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardData = document.querySelector("cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    //Reference: {"topics":["javascript","bootstrap","technology","jquery","node.js"]}
    const javascript = Object.entries(data.article.javascript);
    const bootstrap = Object.entries(data.article.bootstrap);
    const technology = Object.entries(data.article.technology);
    const jquery = Object.entries(data.article.jquery);
    const nodeJS = Object.entries(data.article.node);

    const topics = [javascript, bootstrap, technology, jquery, nodeJS];

    topics.forEach((article) => {
      article.forEach((newArticle) => {
        cardData.append(Cards(newArticle));
      });
    });
  })

  .catch((error) => {
    console.log(`Error: `, error);
  });



function Cards(object) {
  // create elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const imgAuth = document.createElement("img");
  const nameAuth = document.createElement("span");

  // add class to elements
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");
  imgAuth.classList.add("img");

  // create HTML structure
card.appendChild('headline')
card.appendChild('author')
author.appendChild('imgCont')
imgCont.appendChild('imgAuth')
authror.appendChild('imgAuth')
}

// add content to elements



// add to DOM
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


// -------------------------------Example For forEach withing forEach --------------------------//
// var dataModels = [];

// dataModels[0] = {
//     childNodes: []
// };

// dataModels[0].childNodes[0] = {
//     appId: "foo"
// };

// dataModels.forEach(function(entry){ 
//     entry.childNodes.forEach(function(childrenEntry) { // was missing a )
//       console.log(childrenEntry.appId);
//     });
// -------------------------------Example For forEach withing forEach --------------------------//



axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(response)
    const newCards = document.querySelector(".cards-container")
    const arrayValues = Object.values(response.data.articles)
    arrayValues.forEach((element) => {
      element.forEach((article) => {
        newCards.appendChild(Cards(article))
      })
    })
  })
  .catch((error) => {
    console.log(`Error: `, error)
  });

function Cards(object) {
  // create elements
  const card = document.createElement("div")
  const headline = document.createElement("div")
  const author = document.createElement("div")
  const imgCont = document.createElement("div")
  const imgAuth = document.createElement("img")
  const nameAuth = document.createElement("span")

  // add class to elements
  card.classList.add("card")
  headline.classList.add("headline")
  author.classList.add("author")
  imgCont.classList.add("img-container")

  // create HTML structure
  card.appendChild(author)
  author.appendChild(imgCont)
  imgCont.appendChild(imgAuth)
  card.appendChild(headline)
  author.appendChild(nameAuth)

  // add content to elements
  headline.textContent = object.headline
  imgAuth.src = object.authorPhoto
  nameAuth.textContent = "By " + object.authorName

  return card
}

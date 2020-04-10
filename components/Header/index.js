// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

//create elements
const header = document.createElement('div')
const dateItem = document.createElement('span')
const lambdaTimes = document.createElement('h1')
const temp = document.createElement('span')

//add classlist
header.classList.add('.header')
dateItem.classList.add('.date')
temp.classList.add('.tep')

//add content to elements
dateItem.textContent = 'March 28, 2019'
lambdaTimes.textContent = 'Lambda Times'
temp.textContent= '98°'

//structure elements
header.appendChild(dateItem)
header.appendChild(lambdaTimes)
header.appendChild(temp)

//add return (note: the main div will be returned)
return header

}

//add to DOM (note: use class on HTML)
const HeaderComp = document.querySelector('.header-container')

HeaderComp.appendChild(Header())
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// select div.topics
const topicData = document.querySelector('.topics')

// get request
axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then((response) => {
    // "(topics:) references the stringify like-array information on the get request"
    const topicContent = response.data.topics
    topicContent.forEach((topic) =>{
        topicData.append(Tabs(topic))
    })
})

.catch(error => {
    console.log("Error: ", error)
})

function Tabs(topic){

    const tabs = document.createElement('div')
    
    tabs.classList.add('tab')
    tabs.textContent = topic

    return tabs
}
   


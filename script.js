let savedSongs = document.getElementById('savedSongs')
let buttonOne = document.getElementById('buttonOne')
let randomSearchDiv = document.getElementById('randomSearchDiv')
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//either there will be things saved to local storage other wise default to emptyarray
let divJokes = document.getElementById("best-jokes")
let jokeBtn = document.getElementById("jokeBtn")
let url = 'https://www.boredapi.com/api/activity'


// First API call for the activities
function getAPI() {
    fetch(url)
        .then(function (r) {
            return r.json();
        })
        .then(function (data) {
            addActivity(data)
            //plug in helper function to get data
        })
}


function addActivity(activity) {
    console.log(activity.activity, 'hello')
    //console logged activity to see data. Then saw activity.activity is the actual activity
    let activityDiv = document.createElement('div')
    let activitySaveButton = document.createElement('button')
    let activityPara = document.createElement('p')
    //created a div, a button and a paragraph tag
    activityDiv.append(activityPara, activitySaveButton)
    //appended the paragraph and button to the div
    activityPara.textContent = activity.activity
    //gave para text content with the activity
    activitySaveButton.textContent = 'Save Activity'
    //gave text to button 
    activitySaveButton.addEventListener('click', function () {
        //added eventlistener to button
        console.log('button work')
        //console logged to see if button was working
        savedSongs.textContent = activity.activity
        //gave text content to saved songs div 
        favorites.push(activity.activity)
        //pushed activity to empty array 
        localStorage.setItem('favorites', JSON.stringify(favorites))
        //set local storage
        console.log(favorites)
        renderFavs()
        //called renderFavs function 
    })
    randomSearchDiv.innerHTML = ''
    //clears out div
    randomSearchDiv.appendChild(activityDiv)
    //appended div to div
}

console.log(favorites)

function renderFavs() {
    savedSongs.textContent = '';
    //clears out div
    for (let i = 0; i < favorites.length; i++) {
        //looping favorites array
        let p = document.createElement('p');
        p.textContent = favorites[i]
        //created a p tag and gave it the text content 
        savedSongs.appendChild(p)
        //appended p to saved Songs div
        let xButton = document.createElement('button')
        xButton.textContent = 'x'
        p.appendChild(xButton)
        //created button with a text content of x and then appended the button to the paragraph tag
        xButton.addEventListener('click', function () {
            //created event listener for x button
            console.log(i)
            //logged to see if I could see i
            favorites.splice(i, 1)
            console.log(favorites)
            localStorage.setItem('favorites', JSON.stringify(favorites))
            renderFavs()
            //called renderFavs inside renderFavs
        })
    }
}
renderFavs()
buttonOne.addEventListener('click', getAPI)
//added event listener and added the helper function to it

// Second API call for the Jokes

var jokesURL = "https://official-joke-api.appspot.com/random_joke"

function getJokes() {
    fetch(jokesURL)
        .then(function (response) {
            return response.json()

        })
        .then(function (data) {
            console.log(data)
            addJoke(data)
        })

}

function addJoke(joke) {
    divJokes.innerHTML = ''
    let setupP = document.createElement("p")
    let punchlineP = document.createElement("p")
    setupP.textContent = joke.setup
    punchlineP.textContent = joke.punchline
    divJokes.appendChild(setupP)
    divJokes.appendChild(punchlineP)
}
jokeBtn.addEventListener("click", getJokes)


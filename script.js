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
        })
}


function addActivity(activity) {
    console.log(activity.activity, 'hello')
    let activityDiv = document.createElement('div')
    let activitySaveButton = document.createElement('button')
    let activityPara = document.createElement('p')
    activityDiv.append(activityPara, activitySaveButton)
    activityPara.textContent = activity.activity
    activitySaveButton.textContent = 'Save Activity'
    activitySaveButton.addEventListener('click', function () {
        console.log('button work')
        savedSongs.textContent = activity.activity
        favorites.push(activity.activity)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        console.log(favorites)
        renderFavs()

    })
    activitySaveButton.id = 'saveBtn'
    randomSearchDiv.innerHTML = ''
    randomSearchDiv.appendChild(activityDiv)
}

console.log(favorites)

function renderFavs() {
    savedSongs.textContent = '';
    for (let i = 0; i < favorites.length; i++) {
        let p = document.createElement('p');
        p.textContent = favorites[i]
        savedSongs.appendChild(p)
        let xButton = document.createElement('button')
        xButton.textContent = 'x'
        p.appendChild(xButton)
        xButton.addEventListener('click', function () {
            console.log(i)
            favorites.splice(i, 1)
            console.log(favorites)
            localStorage.setItem('favorites', JSON.stringify(favorites))
            renderFavs()

        
        })
        xButton.id = 'jsButton';
    }
    
}
renderFavs()
buttonOne.addEventListener('click', getAPI)

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


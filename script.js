let savedSongs = document.getElementById('savedSongs')
let buttonOne = document.getElementById('buttonOne')
let randomSearchDiv = document.getElementById('randomSearchDiv')
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//either there will be things saved to local storage other wise default to emptyarray

let url = 'https://www.boredapi.com/api/activity'

function getAPI () {
    fetch(url)
        .then(function (r) {
            return r.json();
        })
        .then(function (data) {
        addActivity(data)    
        })
}

function addActivity (activity) {
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
        //only saves one activity!!!!!!!!!!!!
    })
    randomSearchDiv.innerHTML = ''
    randomSearchDiv.appendChild(activityDiv)
}

console.log(favorites)

function renderFavs () {
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
    }
}
renderFavs()
buttonOne.addEventListener('click', getAPI)

// function init() {
//     let favTemp = localStorage.getItem('favorites')
//     if (favTemp) { //if exists
//         favorites.JSON.parse(favTemp)
//     }
//     favorites.push()//not it
//     localStorage.setItem('favorites', JSON.stringify(favorites))
//     addActivity(activity)
// }



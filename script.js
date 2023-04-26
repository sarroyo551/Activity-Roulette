let savedSongs = document.getElementById('savedSongs')
let buttonOne = document.getElementById('buttonOne')
let randomSearchDiv = document.getElementById('randomSearchDiv')
let favorites = [];

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
        //only saves one activity!!!!!!!!!!!!
    })
    randomSearchDiv.innerHTML = ''
    randomSearchDiv.appendChild(activityDiv)
}

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



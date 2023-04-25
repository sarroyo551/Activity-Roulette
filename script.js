let savedSongs = document.getElementById('savedSongs')
let firstForm = document.getElementById('firstForm')
let songInput = document.getElementById('songInput')
let buttonOne = document.getElementById('buttonOne')
let randomSearchDiv = document.getElementById('randomSearchDiv')

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

buttonOne.addEventListener('click', getAPI)

function addActivity (activity) {
    console.log(activity.activity, 'hello')
    let activityDiv = document.createElement('div')
    let activitySaveButton = document.createElement('button')
    let activityPara = document.createElement('p')
    activityDiv.append(activityPara, activitySaveButton)
    activityPara.textContent = activity.activity
    activitySaveButton.textContent = 'Save Activity'
    randomSearchDiv.appendChild(activityDiv)
}

// fetch(url,  { mode: 'cors', headers: {
//     'Content-Type': 'application/json'
// }})
//     .then(function (r) {
//     return r.json();
//     })
//     .then(function (data) {
//     console.log(data, 'hello')
//     }).catch( function (error) {
//         console.log(error)
//     })
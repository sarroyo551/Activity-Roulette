let savedSongs = document.getElementById('savedSongs')
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
    activitySaveButton.style.background = 'black';
    activitySaveButton.style.color = 'white';
    activitySaveButton.addEventListener('click', function () {
        console.log('button work')
        savedSongs.textContent = activity.activity
        //only saves one activity
        savedSongs.style.backgroundColor = 'purple';
        savedSongs.style.color = 'white'
        savedSongs.style.borderRadius = '5px';
    })
    randomSearchDiv.appendChild(activityDiv)
}


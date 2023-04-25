let savedSongs = document.getElementById('savedSongs')
let firstForm = document.getElementById('firstForm')
let songInput = document.getElementById('songInput')
let buttonOne = document.getElementById('buttonOne')

let url = 'https://www.boredapi.com/api/activity'

function getAPI () {
    fetch(url)
        .then(function (r) {
            return r.json();
        })
        .then(function (data) {
            console.log(data, 'hello')
        })
}

buttonOne.addEventListener('click', getAPI)

// getAPI()

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
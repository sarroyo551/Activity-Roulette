let savedSongs = document.getElementById('savedSongs')
let firstForm = document.getElementById('firstForm')
let songInput = document.getElementById('songInput')
let buttonOne = document.getElementById('buttonOne')

let url = `https://musicbrainz.org/ws/2/`

// function getAPI () {
//     fetch(url)
//         .then(function (r) {
//             return r.json();
//         })
//         .then(function (data) {
//             console.log(data, 'hello')
//         })
// }

// function preventDef (e) {
//     e.preventDefault();
//     console.log('fire');
//     getAPI();
// }
// buttonOne.addEventListener('click', preventDef)

// getAPI()

fetch (url,  { mode: 'no-cors'})
    .then(function (r) {
    return r.json();
    })
    .then(function (data) {
    console.log(data, 'hello')
    })

let ul = document.getElementById('listItems');
let trendingBtn = document.getElementById('trending');
let randomBtn = document.getElementById('random');
let searchGiphyInput = document.getElementById('searchGiphyInput');
let form = document.querySelector('form');
let searchGif = document.getElementById('searchGif');

// Key API
let apiKey = '1r8dJtuybHgS5gLPAbT0bfIqBHlEKm4W'

// SearchGifs
function LetSearchGifs (event) {
    event.preventDefault();

    ul.innerHTML = "";
    
    let searchValue = searchGiphyInput.value;
    let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${apiKey}&limit=10`;

    fetch(giphyAPI)
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.data.length; i++) {
            let data = json.data[i].images.original.url;
            let img = document.createElement('img');
            img.src = data;
            let li = document.createElement('li');
            li.appendChild(img);
            ul.appendChild(li)
            document.body.appendChild(ul);
            searchGiphyInput.value = ""
        }
    }).catch(err => console.log(err));
}
form.addEventListener('submit', LetSearchGifs)

// Trending
function trendingGif (event) {
    event.preventDefault();

    ul.innerHTML = "";
    
    let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=trending&api_key=${apiKey}&limit=10`;

    fetch(giphyAPI)
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.data.length; i++) {
            let data = json.data[i].images.original.url;
            let img = document.createElement('img');
            img.src = data;
            let li = document.createElement('li');
            li.appendChild(img);
            ul.appendChild(li)
            document.body.appendChild(ul);
            searchGiphyInput.value = ""
        }
    }).catch(err => console.log(err));
}
trendingBtn.addEventListener('click', trendingGif);

// Random
function randomGif (event) {
    event.preventDefault();

    ul.innerHTML = "";
    
    let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=random&api_key=${apiKey}&limit=10`;

    fetch(giphyAPI)
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.data.length; i++) {
            let data = json.data[i].images.original.url;
            let img = document.createElement('img');
            img.src = data;
            let li = document.createElement('li');
            li.appendChild(img);
            ul.appendChild(li)
            document.body.appendChild(ul);
            searchGiphyInput.value = ""
        }
    }).catch(err => console.log(err));
}
randomBtn.addEventListener('click', randomGif);
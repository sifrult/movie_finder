var searchBtn = document.querySelector("#searchBtn");

var input = document.getElementById("movie");

var api = 'hUHcgOupDPISQvPxFO2U6cpCngXRMGQsbJnOd204';
var apiOmdb = '5a9d4733'

 //Fetches tmdb_id and tmdb_type
function tmdbParameters() {
let url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${api}&search_value=${input.value.replace(" ", "%20")}&search_type=1`;

fetch(url, { method: 'Get' })
    .then((res) => res.json())
    .then((json) => {
      console.log(url);
        console.log(json.results[0]);
    });
  }

// omdb
function getData() {
  let url = `http://www.omdbapi.com/?s=${input.value.replace(" ", "+")}&apikey=${apiOmdb}`;

  fetch(url, { method: 'Get' })
    .then((res) => res.json())
    .then((data) => {
      console.log(url)
       console.log(data.Search[0].Poster);
       let image = "url('" + data.Search[0].Poster + "')";
      document.body.style.backgroundImage = image;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "auto";
    });
  }

  function getResults() {
    getData();
    tmdbParameters();
  }
  

// function init() {
// // getStreaming()
// // getData()
// getID()
// }

searchBtn.addEventListener("click", getResults);
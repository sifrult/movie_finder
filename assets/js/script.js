var searchBtn = document.querySelector("#searchBtn");

var input = document.getElementById("movie");

var api = 'hUHcgOupDPISQvPxFO2U6cpCngXRMGQsbJnOd204';
// find Ids
// function gatherData() {
//   fetch(`https://api.watchmode.com/v1/search/?apiKey=hUHcgOupDPISQvPxFO2U6cpCngXRMGQsbJnOd204&search_field=name&search_value=${input}`)
//   .then((response)=>response.json())
//   .then((data)=> console.log(data))
// console.log(input.value)
// }


// Fetches tmdb_id and tmdb_type
function tmdbParameters() {
let url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${api}&search_value=${input.value.replace(" ", "%20")}&search_type=1`;

fetch(url, { method: 'Get' })
    .then((res) => res.json())
    .then((json) => {
      console.log(url)
        console.log(json.results[0].tmdb_id)
        console.log(json.results[0].tmdb_type);
    });
}

// omdb
// function getData() {
//   fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=5a9d4733`)
//   .then((response)=>response.json())
//   .then((data)=> console.log(data))
// }

// // // watchmode autocomplete
// function getStreaming() {
//   fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=hUHcgOupDPISQvPxFO2U6cpCngXRMGQsbJnOd204&search_value=${input}`)
//   .then((response)=>response.json())
//   .then((data)=> console.log(data))
// }

// function init() {
// // getStreaming()
// // getData()
// getID()
// }

searchBtn.addEventListener("click", tmdbParameters);

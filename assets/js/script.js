var searchBtn = document.querySelector("#searchBtn");

var input = document.getElementById("movie");

var imdbID = "tt";//find the tt code

// find Ids
function gatherData() {
  fetch(`https://api.watchmode.com/v1/search/?apiKey=hUHcgOupDPISQvPxFO2U6cpCngXRMGQsbJnOd204&search_field=name&search_value=${input}`)
  .then((response)=>response.json())
  .then((data)=> console.log(data))
console.log(input.value)
}

// omdb
// function getData() {
//   fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=5a9d4733`)
//   .then((response)=>response.json())
//   .then((data)=> console.log(data))
// }

// // watchmode autocomplete
function getStreaming() {
  fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=hUHcgOupDPISQvPxFO2U6cpCngXRMGQsbJnOd204&search_value=${input}`)
  .then((response)=>response.json())
  .then((data)=> console.log(data))
}


// function init() {
// // getStreaming()
// // getData()
// getID()
// }

searchBtn.addEventListener("click", getStreaming);

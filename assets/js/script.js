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
      console.log(json.results[0].id);
      var id = json.results[0].id


  let url1 = `https://api.watchmode.com/v1/title/${id}/sources/?apiKey=${api}`;

  fetch(url1, { method: 'Get' })
    .then((res) => res.json())
    .then((data) => {
      console.log(url1);
      console.log(data);
      var results = []
      for (var i = 0; i < data.length; i++) {
        results.push(data[i].name) 
      }
      function removeDuplicates(data1) {
          return data1.filter((value, index) => data1.indexOf(value) === index);
        }
        var remove = removeDuplicates(results);

        for( var i=0; i< remove.length; i++ ) {
          var streaming = remove[i];
        var li = document.createElement('li');
        li.textContent = streaming

        document.getElementById('streamingList').appendChild(li);
        }
    });

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
      document.body.classList.add("background")
    });
  }

  function getResults() {
    getData();
    tmdbParameters();
    displaySearch();
  }


searchBtn.addEventListener("click", getResults);

function storeSearches() {
  window.localStorage.setItem("searches",input.value);
}

function displaySearch() {
  var results =  window.localStorage.getItem("searches");
  document.getElementById("previousSearches").textContent = results;
  console.log(results);
  storeSearches();
}

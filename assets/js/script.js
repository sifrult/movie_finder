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
      console.log(json.results[0].id);
      var id = json.results[0].id


  let url1 = `https://api.watchmode.com/v1/title/${id}/sources/?apiKey=${api}`;

  fetch(url1, { method: 'Get' })
    .then((res) => res.json())
    .then((data) => {
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
  
  let url2 = url = `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${api}`;
  fetch(url2, { method: 'Get' })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.trailer_thumbnail);
     var link = document.createElement("a")
    link.href = data.trailer;
    document.getElementById("trailer").appendChild(link)
    var img = document.createElement("img");
    img.src = data.trailer_thumbnail;
    link.appendChild(img)
   
  })
});


  }




// omdb
function getData() {
  let url = `http://www.omdbapi.com/?s=${input.value.replace(" ", "+")}&apikey=${apiOmdb}`;

  fetch(url, { method: 'Get' })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
       let image = "url('" + data.Search[0].Poster + "')";
      document.body.style.backgroundImage = image;
      document.body.classList.add("background")
    });
  }
  function getInfo() {
    let url = `http://www.omdbapi.com/?t=${input.value.replace(" ", "+")}&apikey=${apiOmdb}`;
  
    fetch(url, { method: 'Get' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.getElementById("cast").textContent = data.Actors;
        document.getElementById("director").textContent= data.Director;
        document.getElementById("genre").textContent = data.Genre;
        document.getElementById("released").textContent = data.Released;
        document.getElementById("titleYear").textContent = data.Title + " " + data.Year;

        for( var i=0; i< data.Ratings.length; i++ ) {
          var li = document.createElement("li");
          li.textContent = data.Ratings[i].Source + " " + data.Ratings[i].Value;
          document.getElementById('ratings').appendChild(li);
        }
      });
    }
  function getResults() {
    getData();
    tmdbParameters();
    displaySearch();
    getInfo();
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

var searchBtn = document.querySelector("#searchBtn");

var input = document.getElementById("movie");

var api = 't034dYdEAkk4zauagceOr9aqoCbUIueAStvmXnXs';
var apiOmdb = '5a9d4733'

// Initializes the functions
// Grabs the id for watchmode
function init() {
  let url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${api}&search_value=${input.value.replace(" ", "%20")}&search_type=1`;

  fetch(url, { method: 'Get' })
    .then((res) => res.json())
    .then((json) => {
      console.log(json.results[0].id);
      var id = json.results[0].id

// Displays streaming services
      let url1 = `https://api.watchmode.com/v1/title/${id}/sources/?apiKey=${api}`;

      fetch(url1, { method: 'Get' })
        .then((res) => res.json())
        .then((data) => {
          var results = []

          document.getElementById('streamingList').innerHTML = "";

          for (var i = 0; i < data.length; i++) {
            results.push(data[i].name)
          }
          function removeDuplicates(data1) {
            return data1.filter((value, index) => data1.indexOf(value) === index);
          }
          var remove = removeDuplicates(results);

          document.getElementById("streamingServices").style.display = "block";

          for (var i = 0; i < remove.length; i++) {
            var streaming = remove[i];
            var li = document.createElement('li');
            li.textContent = streaming
            document.getElementById('streamingList').appendChild(li);
          }


        });

// Displays thumbnail and trailer
      let url2 = url = `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${api}`;
      fetch(url2, { method: 'Get' })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          document.getElementById('trailer').innerHTML = "";
          console.log(data.trailer_thumbnail);
          var link = document.createElement("a")
          link.href = data.trailer;
          document.getElementById("trailer").appendChild(link)
          var img = document.createElement("img");
          img.classList.add("thumbnail")
          img.src = data.trailer_thumbnail;
          link.appendChild(img)


          var imdbid = data.imdb_id

// Displays movie data and background
  let url4 = `http://www.omdbapi.com/?i=${imdbid}&apikey=${apiOmdb}`;

  fetch(url4, { method: 'Get' })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.body.style.backgroundImage = "";
      console.log(data);
      let image = "url('" + data.Poster + "')";
      document.body.style.backgroundImage = image;
      document.body.classList.add("background")

      document.getElementById("cast").textContent = "Cast: " + data.Actors;
      document.getElementById("director").textContent = "Director: " + data.Director;
      document.getElementById("genre").textContent = "Genre: " + data.Genre;
      document.getElementById("released").textContent = "Release date: " + data.Released;
      document.getElementById("titleYear").textContent = data.Title + " " + data.Year;
      document.getElementById('ratings').innerHTML = "";

      document.getElementById('ratingTitle').style.display = "block";


      for (var i = 0; i < data.Ratings.length; i++) {
        var li = document.createElement("li");
        li.textContent = data.Ratings[i].Source + " " + data.Ratings[i].Value;
        document.getElementById('ratings').appendChild(li);

      }
    });
  })
    });
}

// Calls the other functions
function getResults() {
  init();
  displaySearch();
  document.getElementById("h1").style.display = "none";
}

// Button event listener, and Enter listener
searchBtn.addEventListener("click", getResults);
document.getElementById('movie').addEventListener('keypress', function(event)
{if(event.key === 'Enter') {
  event.preventDefault();
  searchBtn.click()
}
})

// Store and display searches
var searches = []
function storeSearches() {
  window.localStorage.setItem("searches", JSON.stringify(searches));
}
function displaySearch() {

  var prevSearches = document.getElementById("previousSearches");
  prevSearches.innerHTML = "";

  searches.push(input.value);
  input.textContent = "";
  console.log(searches)

 document.getElementById('prevSearches').style.display = "block";

  for (var i = 0; i < searches.length; i++) {
    var search = searches[i]
    var li = document.createElement('li');
    li.textContent = search;
    prevSearches.appendChild(li)
    input.value="";

  }

  storeSearches();
}

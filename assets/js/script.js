//Adding  api for javascript
function getData() {
  const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=5a9d4733')
  const data = await response.json()
}
//Now we've received a response from our HTTP request, and we can work with it.
//However, the response is in JSON, and we need to convert that JSON in to JavaScript objects in order to work with it.
//Begin accessing JSON data here
var data = JSON.parse(this.response)

data.forEach(movie => {
  // Log each movie's title
  console.log(movie.title)
})
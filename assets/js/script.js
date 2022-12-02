var streamingSearch = "breaking%20bad"
//Adding  api for javascript
function getData() {
  const response = fetch('http://www.omdbapi.com/?i=tt3896198&apikey=5a9d4733')
  const data = response.json()
}
//Now we've received a response from our HTTP request, and we can work with it.
//However, the response is in JSON, and we need to convert that JSON in to JavaScript objects in order to work with it.
//Begin accessing JSON data here
//var data = JSON.parse(this.response)

//data.forEach(movie => {
  // Log each movie's title
  //console.log(data)
//})

function getStreaming() {
  fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=hUHcgOupDPISQvPxFO2U6cpCngXRMGQsbJnOd204&search_value=${streamingSearch}&search_type=1`)
  .then((response)=>response.json())
  .then((data)=> console.log(data.results[0]))
    //const data = response.json() 
  }
  
  //data.forEach(service => {
   
   
getStreaming()
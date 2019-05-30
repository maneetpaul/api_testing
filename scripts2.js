// Grabs the root Div in the HTML
const app = document.getElementById('root')

// Creates a container for all the Gurbani divs to live inside
const container = document.createElement('div')
container.setAttribute('class','container')

// Puts the container inside the root div
app.appendChild(container)

// Creates ONE div for all the gurbani lines to go inside
const gurbaniLine = document.createElement('div')
gurbaniLine.setAttribute('class', 'gurbaniLine')

// Put gurbaniLine div into the container
 container.appendChild(gurbaniLine)

// Puts the Gurbani into a p
const p = document.createElement('p')

 // put the p text into the gurbaniLine div
 gurbaniLine.appendChild(p)


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.banidb.com/v2/banis/10', true)
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {

  // Load/Parse all raw API content into data variable
  const data = JSON.parse(this.response)

  // Display all raw data to console
  console.log(data)

  // Isolate ang verses into an array variable
  const angContent = data.verses

  // Display angContent
  console.log(angContent)

// Display the Gurmukhi lines from each verse on the ang
if (request.status >= 200 && request.status <400) {
  angContent.forEach(gurmukhi => {

    //  console.log(gurmukhi.verse.verse.unicode)

     p.textContent = gurmukhi.verse.verse.unicode

  })
} else {
  console.log('HTTP error')
  }
}

// Send request
request.send()

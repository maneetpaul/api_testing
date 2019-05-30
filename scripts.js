// Grabs the root Div in the HTML
const app = document.getElementById('root')

// Creates a container for all the Gurbani divs to live inside
const container = document.createElement('div')
container.setAttribute('class','container')

// Puts the container inside the root div
app.appendChild(container)

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.banidb.com/v2/angs/917', true)
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {

  // Load/Parse all raw API content into data variable
  const data = JSON.parse(this.response)

  // Display all raw data to console
  console.log(data)

  // Isolate ang verses into an array variable
  const angContent = data.page

  // Display angContent
  console.log(angContent)

// Display the Gurmukhi lines from each verse on the ang
if (request.status >= 200 && request.status <400) {
  angContent.forEach(gurmukhi => {

    // Creates a div for each line with gurbaniLine class
    const gurbaniLine = document.createElement('div')
    gurbaniLine.setAttribute('class', 'gurbaniLine')

    // Puts the Gurbani into a p
    const p = document.createElement('p')
    p.textContent = gurmukhi.verse.unicode

    // Put gurbaniLine divs into the container
     container.appendChild(gurbaniLine)

     // put the p text into the gurbaniLine divs
     gurbaniLine.appendChild(p)

  })
} else {
  console.log('HTTP error')
  }
}

// Send request
request.send()

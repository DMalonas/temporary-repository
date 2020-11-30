const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());


app.use(express.static('demo'));

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})


// POST method route
app.post('/', function (req, res) {
    res.send('POST received')
  })

const appData = {} //js object



// app.get('/all', (req, res) => {
//     res.send(projectData)
// }) WRONG FOR SOME REASON

// Respond with JS object when a GET request is made to the homepage
    app.get('/all', function (req, res) {
        res.send(appData)
    })

  
const port = 8000;

const server = app.listen(port, () => {console.log(`running on localhost: ${port}`)});


function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}


//MOVIE EXAMPLE POST
const data = []
app.post('/addMovie', addMovie)

function addMovie(req, res) {
    data.push(req.body)
    console.log(data)
}


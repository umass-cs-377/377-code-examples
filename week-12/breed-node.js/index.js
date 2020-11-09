// Include external libraries.
let express = require('express');

// Create the HTTP express application.
const app = express();
// Register middleware for parsing JSON.
// parse application/json
app.use(express.json())

// The state of our application.
state = {
   'breed': 'pitbull'
};

// Responds to HTTP GET requests on /dog endpoint.
app.get('/dog', (req, res) => res.send(JSON.stringify(state)));

// Responds to HTTP PATCH requests on /dog endpoint.
app.patch('/dog', (req, res) => {
   console.log(req.body);
   state = req.body;
   res.send(JSON.stringify(state));
});

// Starts the HTTP server on port 3000.
app.listen(3000, () => {
   console.log('Example app listening on port 3000');
});


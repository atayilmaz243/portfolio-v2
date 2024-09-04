const express = require('express');
const app = express();
const port = 3100;


app.use(express.static('public'));


// Middleware to parse JSON requests
app.use(express.json());



// Example GET request
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


// Example GET request with query parameters
// app.get('/search', (req, res) => {
//   const query = req.query.q;
//   res.send(`Search results for: ${query}`);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
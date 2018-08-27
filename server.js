const express = require('express');
const path = require('path');
const app = express();
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));



app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

// app.listen(port, () => console.log(`Listening on port ${port}`));

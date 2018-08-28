const express = require('express');
const path = require('path');
const app = express();
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


var myObj =  {
  "job_data":[
    {"title":"Senior PHP Developer", "status":"hourly", "location" : "Indianopolis, IN", "charge" : "$44 / hr", "desc" : "Lorem ipsum dolor sit amet, ius ex graeco laoreet. Sea ponderum expetenda no. Usu populo epicurei at, purto decore at eam. Vis essent animal corpora ea, eu solet diceret nam."},
    {"title":"Senior Java Developer", "status":"part-time", "location" : "Indianopolis, IN", "charge" : "$84 / hr", "desc" : "Lorem ipsum dolor sit amet, ius ex graeco laoreet. Sea ponderum expetenda no. Usu populo epicurei at, purto decore at eam. Vis essent animal corpora ea, eu solet diceret nam."},
    {"title":"Senior PHP Developer", "status":"full-time", "location" : "Indianopolis, IN", "charge" : "$64 / hr", "desc" : "Lorem ipsum dolor sit amet, ius ex graeco laoreet. Sea ponderum expetenda no. Usu populo epicurei at, purto decore at eam. Vis essent animal corpora ea, eu solet diceret nam."},
    {"title":"Senior PHP Developer", "status":"hourly", "location" : "Indianopolis, IN", "charge" : "$44 / hr", "desc" : "Lorem ipsum dolor sit amet, ius ex graeco laoreet. Sea ponderum expetenda no. Usu populo epicurei at, purto decore at eam. Vis essent animal corpora ea, eu solet diceret nam."}
  ]
}
var myJSON = JSON.stringify(myObj);

app.get('/api/hello', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({ express: myJSON
                       });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

const express = require('express')
const app = express()

app.get('/download', function(req, res){
  const file = `VID_20230408_062423.mp4`;
  res.download(file); // Set disposition and send it.
});

app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
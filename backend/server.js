const express = require('express')
const articleApi = require('./routes/article')
const authorApi = require('./routes/author')

const cors = require('cors')
require('./config/connect');
const app = express()

app.use('/article', articleApi);
app.use('/author', authorApi);

app.use('getimage', express.static('./uploads'));

var corsOptions = {
    origin: "http://localhost:4200"
  };


app.use(cors(corsOptions))

app.use(express.json())

app.get('/blog', (req, res) => {
    res.send('Hello Blog')
  })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
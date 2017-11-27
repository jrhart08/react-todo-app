import express from 'express'
import path from 'path'

const app = express()

app.use(express.static('./public'))

app.get('/', function(req, res) {
 res.sendFile('./public/index.html')
})

app.listen(3000, function() {
  console.log('Running server on port 3000.')
})

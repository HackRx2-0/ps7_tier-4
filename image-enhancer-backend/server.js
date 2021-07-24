const express = require('express')
const app = express()
const CORS = require('cors')


const port = 5000;

app.use(express.json({limit: '50mb'}))
app.use(CORS())

app.use('/api/image', require('./routes/upload'))
app.use('/api/image', require('./routes/ocr'))
app.use('/api/image', require('./routes/fetch'))


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
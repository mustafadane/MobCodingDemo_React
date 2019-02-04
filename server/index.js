const express = require('express')
const app = express()
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

const PORT = 3000

app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
)

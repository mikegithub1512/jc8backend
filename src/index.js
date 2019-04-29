const express = require('express')
const userRouter = require('./routers/userRouter')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)

app.get('/', (req, res) => {
    res.send(`<h1>API Running on Port ${port}`)
})

app.listen(port, () => {
    console.log("Running at ", port);
    
})
const express = require('express')
const userRouter = require('./routers/userRouter')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log("Running at ", port);
    
})
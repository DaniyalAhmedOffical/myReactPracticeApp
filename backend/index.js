import express from 'express'
import cors from 'cors'




const PORT = 2000
const app = express()

import testFunction from './routes/testControl.js'
app.use('/tFunc',testFunction)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(PORT,()=>{console.log(`Server is running on PORT ${PORT}`)})

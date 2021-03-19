const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

const PORT = 8080
const HOST = "0.0.0.0"

//importar las rutas a usar
const router = require('./routes')

const { json, urlencoded } = express

// parse an HTML body as a string
app.use(express.text())


//configuracion basica
app.use(json())
app.use(urlencoded({ extended: false }))
const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))

//usar router para el manejo de las rutas
app.use(router)


app.listen(PORT,HOST, () => {console.log(`Server on port: ${PORT} and host ${HOST}` );})
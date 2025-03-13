import express from "express";
import colors from 'colors'
import router from "./router";
import db from "./config/db";


// Conectar a base de datos
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.blue.bold('Conexión exitosa en la BD'))
    } catch (error) {
        // console.log(error)
        console.log(colors.red.bold('Hubo un erro al conectar a la BD'))
    }
}
connectDB()

// Instancia de Express
const server = express();

// Leer datos de formulario
server.use(express.json())

server.use('/api/products', router)

server.get('/api', (req, res) => {
    res.json({ msg: 'Desde API' })
})

export default server
import express from "express";
import router from "./router";
import db from "./config/db";


// Conectar a base de datos
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log('Conexión exitosa en la BD')
    } catch (error) {
        console.log(error)
        console.log('Hubo un erro al conectar a la BD')
    }
}
connectDB()


const server = express();

server.use('/api/products', router)

export default server
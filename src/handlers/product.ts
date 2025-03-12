import { Request, Response } from 'express'
import Product from '../models/Product.model'

//Obtener producto
export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ['price', 'ASC']
            ],
            attributes: { exclude: ['createdAt', 'updatedAt', 'availability'] }
        })
        res.json({ data: products })
    } catch (error) {
        console.log(error)
    }
}


// Crear producto
export const createProducts = async (req: Request, res: Response) => {

    try {
        // Almacenar en la base de datos
        const product = await Product.create(req.body)
        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}
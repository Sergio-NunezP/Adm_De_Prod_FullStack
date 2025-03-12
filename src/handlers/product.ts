import { Request, Response } from 'express'
import Product from '../models/Product.model'

export const createProducts = async (req: Request, res: Response) => {


    try {
        // Almacenar en la base de datos
        const product = await Product.create(req.body)
        res.json({
            data: product
        })
    } catch (error) {
        console.log(error)
    }
}
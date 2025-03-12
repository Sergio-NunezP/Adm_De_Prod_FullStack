import { Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import Product from '../models/Product.model'

export const createProducts = async (req: Request, res: Response) => {

    // Mostrat datos
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    // Almacenar en la base de datos
    const product = await Product.create(req.body)
    res.json({
        data: product
    })
}
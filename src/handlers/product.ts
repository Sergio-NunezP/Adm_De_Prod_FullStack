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

//Obtener producto por id
export const getProductsById = async (req: Request, res: Response) => {
    try {
        // Obtener registro
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({
                error: 'Producto No Encontrado'
            })
        }

        res.json({ data: product })
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

// Actualizar producto
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }

    //Actualizar (update evita que put reemplace completemente el json)
    await product.update(req.body)
    await product.save()

    res.json({ data: product })
}

// Actualizar con patch (modificar)
export const updateAvailability = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }

    //Actualizar (dataValues.availability ayuda a que pasemos vación el json y por defecto actuliza ese estado de true a false y de false a true)
    product.availability = !product.dataValues.availability
    await product.save()

    res.json({ data: product })
}

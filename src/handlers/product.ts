import { Request, Response } from 'express'
import Product from '../models/Product.model'

//Obtener producto
export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.findAll({
        order: [
            ['id', 'ASC']
        ],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    res.json({ data: products })
}

//Obtener producto por id
export const getProductsById = async (req: Request, res: Response) => {
    // Obtener registro
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }

    res.json({ data: product })
}


// Crear producto
export const createProducts = async (req: Request, res: Response) => {
    // Almacenar en la base de datos
    const product = await Product.create(req.body)
    res.status(201).json({ data: product })
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

// Eliminar producto
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }

    await product.destroy()
    res.json({ message: "Producto Eliminado" })
}
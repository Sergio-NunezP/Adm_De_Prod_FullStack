import { Router } from "express"
import { body, param } from "express-validator"
import { createProducts, getProducts, getProductsById, updateProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()

// Routing

// Obtener productos
router.get('/', getProducts)

// Obtener productos por Id
router.get('/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getProductsById
)

// Crear un producto
router.post('/',

    // Validación
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    body('price')
        .notEmpty().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),
    handleInputErrors,
    createProducts
)

// Actualizar productos
router.put('/:id',

    // Validación
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    body('price')
        .notEmpty().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no válido'),
    handleInputErrors,
    updateProduct
)

// Actualizar 
router.patch('/', (req, res) => {
    res.json('Desde PATCH')
})

// Eliminar producto
router.delete('/', (req, res) => {
    res.json('Desde DELETE')
})

export default router
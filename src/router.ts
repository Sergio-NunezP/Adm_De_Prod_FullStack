import { Router } from "express"
import { body } from "express-validator"
import { createProducts } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()

// Routing
router.get('/', (req, res) => {
    res.json('Desde GET')
})
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

router.put('/', (req, res) => {
    res.json('Desde PUT')
})
router.patch('/', (req, res) => {
    res.json('Desde PATCH')
})
router.delete('/', (req, res) => {
    res.json('Desde DELETE')
})

export default router
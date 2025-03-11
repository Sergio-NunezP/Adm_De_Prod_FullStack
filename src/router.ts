import { Router } from "express"
import { createProducts } from "./handlers/product"

const router = Router()

// Routing
router.get('/', (req, res) => {
    res.json('Desde GET')
})
router.post('/', createProducts)

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
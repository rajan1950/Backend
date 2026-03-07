const router = require("express").Router()
const productcontroller = require('../controller/ProductController')

router.get('/products', productcontroller.getAllProducts)
router.get('/products/:id', productcontroller.getProductById)
router.post('/products', productcontroller.addProduct)
router.delete('/products/:id', productcontroller.deleteProduct)

// PUT /products/:id/color        => add a color   (req.body.color)
// PUT /products/:id/color/remove => remove a color (req.body.color)
router.put('/products/:id/color', productcontroller.addColor)
router.put('/products/:id/color/remove', productcontroller.removeColor)


module.exports = router
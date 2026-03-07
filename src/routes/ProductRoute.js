const router = require("express").Router()
const productcontroller = require('../controller/ProductController')

router.get('/products', productcontroller.getAllProducts)
router.get('/products/:id', productcontroller.getProductById)
router.post('/products', productcontroller.addProduct)
router.delete('/products/:id', productcontroller.deleteProduct)


module.exports = router
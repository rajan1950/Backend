const router = require("express").Router()
const productcontroller = require('../controller/ProductController')

router.get('/products/search', productcontroller.searchProducts)  // ?name=&category=&minPrice=&maxPrice=
router.get('/products', productcontroller.getAllProducts)
router.get('/products/:id', productcontroller.getProductById)
router.post('/products', productcontroller.addProduct)
router.put('/products/:id', productcontroller.updateProduct)
router.delete('/products/:id', productcontroller.deleteProduct)


module.exports = router
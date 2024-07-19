const express=require('express')
const { getProducts,getSingleProduct } = require('../controllers/productController')
const router = express.Router()
//creating routes
router.route('/products').get(getProducts)
router.route('/product/:id').get(getSingleProduct)

//export default router
module.exports=router



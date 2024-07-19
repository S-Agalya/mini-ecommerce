const mongoose=require('mongoose')

//schema creation
const productSchema= mongoose.Schema({
    //products collection's datafiles

    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createdAt:Date

})

//model creation

const productModel = mongoose.model('Product',productSchema)

module.exports=productModel

//export default productModel
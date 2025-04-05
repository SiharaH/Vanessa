import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/ProductModel.js';

//add product functionality
const addProduct = async (req, res) => {
    try {
        const {name, description, price, category, subCategory, sizes, bestsellers} = req.body;
        const image2 =req.files.image1 && req.files.image2[0]
        const image1 =req.files.image2 && req.files.image1[0]
        const image3 =req.files.image3 && req.files.image3[0]
        const image4 =req.files.image4 && req.files.image4[0]

        const images = [ image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'})
            return result.secure_url
        })
    )
    
        const productData ={
            name,
            description,
            price : Number(price),
            image: imagesUrl,
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestsellers : bestsellers === 'true' ? true : false,
            date : Date.now()
        }

        const product = new productModel(productData)
        await product.save()

        res.json({success: true, message: 'Product added successfully'})

    } catch (error) {
        res.json({success: false, message: error.message})
    }

}

//list product functionality
const listProducts = async (req, res) => {
    
}

//remove product functionality
const removeProduct = async (req, res) => {
    
}

//single product info functionality
const singleProduct = async (req, res) => {
    
}

export { addProduct, listProducts, removeProduct, singleProduct }
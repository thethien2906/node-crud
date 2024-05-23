const Product = require('../models/product.models.js');
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}
const getProductsByID = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if (!product){
            return res.status(404).json({message: `No product with id: ${id}`});
        }
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

const updateProductByID = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product){
            return res.status(404).json({message: `No product with id: ${id}`});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error){
        res.status(500).json({message: error.message});
    }
    
}


const deleteProductByID = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product){
            return res.status(404).json({message: `No product with id: ${id}`});
        }
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}
module.exports = {
    getProducts,
    getProductsByID,
    createProduct,
    updateProductByID,
    deleteProductByID
}
const express = require("express");
const router = express.Router();
const Product = require('../models/product.models.js');
const {getProducts, getProductsByID, createProduct,updateProductByID,deleteProductByID} = require('../controllers/product.controller.js');

router.get("/", getProducts);
router.get("/:id", getProductsByID);
router.post("/", createProduct);
router.put("/:id", updateProductByID);
router.delete("/id", deleteProductByID);

module.exports = router;
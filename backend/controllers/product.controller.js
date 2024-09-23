import Product  from "../models/product.module.js"
import mongoose from "mongoose";

export const getProduct= async (req, res) => {
  try {
    // const product = await Product.findById({})
     const products= await Product.find({});
     res.status(200).json({success:true, data:products})
      } catch (error) {
    console.error("error is fetching products", error.message)
    res.status(500).json({success:false, message:" Server error"})
  }
}


export const CreateProduct = async (req, res) => {
  // Removed extra space in the route
  const product = req.body; // Get product data from request body
  // Check for missing fields: corrected the condition to check for 'name' and 'price'
  if (!product.name || !product.price ||!product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = new Product(product); // 

  try {
    await newProduct.save(); // Save the new product to the database
    res.status(201).json({ success: true, data: newProduct }); // Respond with success
  } catch (error) {
    console.error("Error in creating product:", error.message); // Log the error
    res.status(500).json({ success: false, message: "Server error" }); // Respond with server error
  }
};


export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "InvalidProduct id" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(400).json({ success: false, data: "Server error: " });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  // console.log(":id",id)
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(404).json({ success: failed, message: "Product not found" });
  }
};
import express from 'express';

import { CreateProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product.controller.js';

const router =express.router();

router.get("/",getProduct)
router.post("/",CreateProduct );

router.put("/:id",updateProduct)
router .delete("/:id",deleteProduct)

export default router 
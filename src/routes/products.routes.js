import { Router } from "express";

import  {createNewProduct, deleteProductById, getProductById, getProducts, getTotalProducts, updateProductById} from "../controllers/products.controller"

const router = Router()

router.get("/products", getProducts) //obtenemos todos los productos

router.post("/products", createNewProduct) //Añadimos un producto nuevo

router.get("/products/count", getTotalProducts) //Obtener Cuenta de cuantos productos hay

router.get("/products/:id", getProductById) //Obtener el producto introduciendo un id

router.delete("/products/:id", deleteProductById) //Eliminar producto introduciendo un id

router.put("/products/:id", updateProductById) //Actualizar producto a travez de su



export default router
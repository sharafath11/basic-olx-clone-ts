import { Router } from "express"
import { loginController, registerHandler } from "../controllers/authController";
import { addProduct, getProducts } from "../controllers/productControler";
import multer from "multer";
const route = Router();
const storage=multer.memoryStorage()
const upload=multer({storage})

route.post("/register", registerHandler);
route.post("/login", loginController);
route.post("/addProduct", upload.single("image"), addProduct);
route.get("/get-product",getProducts)
export default route
import { Router } from "express"

import { loginController, registerHandler } from "../controllers/authController";
import { addProduct } from "../controllers/addProduct";
const route = Router();
route.post("/register", registerHandler);
route.post("/login", loginController);
route.post("/addProduct",addProduct)
export default route
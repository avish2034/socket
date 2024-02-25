import  express from "express";
import { userLoginController, userRegisterController } from "../controllers/user.controllers.js";
const router = express.Router();

router.post('/user/register',userRegisterController)
router.post('/user/login',userLoginController)

export default router;
import express from "express";
import { signup,log , updatePassword } from "../controllers/user-controllers";
import bodyParser from "body-parser";

var jsonParser = bodyParser.json()

const router = express.Router();

router.post("/login",  jsonParser , log);
router.post("/signup", jsonParser , signup);
router.post("/updatePassword", jsonParser , updatePassword);


export default router;
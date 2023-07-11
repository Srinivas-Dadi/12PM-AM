import express from "express";
import bodyParser from "body-parser";
import { menulist, addItem, updateItem } from "../controllers/menu-controllers";

var jsonParser = bodyParser.json()

const menuRouter = express.Router();

menuRouter.get('/', jsonParser, menulist);
menuRouter.post('/additem',jsonParser, addItem);
menuRouter.post('/updateitem', jsonParser, updateItem);

export default menuRouter;
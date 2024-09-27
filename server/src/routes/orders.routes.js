import { Router } from "express";
import {
  createOrderCtrl,
  deleteOrderaByIdCtrl,
  getOrderByIdCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import { validateJwt } from "../middlewares/validateJwt.js";
import { getOrderById } from "../models/order.model.js";

const ordersRouter = Router();


ordersRouter.get("/orderByUser", validateJwt, getOrdersCtrl);

ordersRouter.post("/createOrder", validateJwt, createOrderCtrl);

ordersRouter.get("/orderById/:id", validateJwt, getOrderByIdCtrl)

ordersRouter.get("/deleteOrder/:id", validateJwt, deleteOrderaByIdCtrl)

export { ordersRouter };

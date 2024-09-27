import { createOrder, getOrderById, getOrders } from "../models/order.model.js";

export const createOrderCtrl = (req, res) => {
  const userId = req.user.id;
  console.log(userId);
  const { coffee } = req.body;

  const order = createOrder(coffee, userId);

  res.status(201).json(order);
};

export const getOrdersCtrl = (req, res) => {

  const userId = req.user.id;
  const orders = getOrders(userId);

  res.status(200).json(orders);
};

export const getOrderByIdCtrl = (req, res) => {

  const userId = req.user.id;
  const { id } = req.params;

  const orders = getOrderById(id, userId);

  if(!orders){
    res.status(500).json({msg:"NO EXISTE LA ORDEN"})
  }
  res.status(200).json(orders);
};

// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
    const { data } = req.body;
    await createNewOrderRepo(data);
    res
      .status(201)
      .json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    return next(new ErrorHandler(500, error));
  }
};

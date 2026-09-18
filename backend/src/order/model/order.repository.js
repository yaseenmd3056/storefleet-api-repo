import OrderModel from "./order.schema.js";
import mongoose from "mongoose";

export const createNewOrderRepo = async (data) => {
  // Write your code here for placing a new order
  try {
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
      // Place order and update other docs with { session }
      await OrderModel.create([data], { session });
      if (!Array.isArray(data.orderItems) || data.orderItems.length === 0) {
        throw new Error("orderItems must be a non-empty array");
      }
      for (const item of data.orderItems) {
        await ProductModel.findByIdAndUpdate(
          item.productId,
          { $inc: { stock: -item.qty } },
          { session },
        );
      }
    });
    session.endSession();
  } catch (error) {}
};

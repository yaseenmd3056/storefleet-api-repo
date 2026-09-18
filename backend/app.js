
import express from "express";
import productRoutes from "./src/product/routes/product.routes.js";
import {
  errorHandlerMiddleware,
  handleUncaughtError,
} from "./middlewares/errorHandlerMiddleware.js";
import userRoutes from "./src/user/routes/user.routes.js";
import cookieParser from "cookie-parser";
import orderRoutes from "./src/order/routes/order.routes.js";




const app = express();
app.use(express.json());
app.use(cookieParser());

// configure routes
app.use("/api/storeFleet/product", productRoutes);
app.use("/api/storeFleet/user", userRoutes);
app.use("/api/storeFleet/order", orderRoutes);

// errorHandlerMiddleware
app.use(errorHandlerMiddleware);

export default app;

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";
import itemRoute from "./routes/itemRoute.js";

import AppError from "./utils/AppError.js";
import globalErrorHandler from "./controllers/errorController.js"


dotenv.config();
const app = express();

app.use(cors({ credentials: true }));
app.options("*", cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 100,
  message: "Too many requests from this IP please try again in an hour!",
});
app.use(limiter);
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/civic-todo/", itemRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;

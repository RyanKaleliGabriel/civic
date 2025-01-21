import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connected successfully"));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on ${process.env.NODE_ENV} environment`);
  console.log(`App Listening on port ${port}`);
});

import express from "express";
import {
  addItem,
  getItem,
  getItems,
  removeItem,
  updateItem,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", addItem);
router.patch("/:id", updateItem);
router.delete("/:id", removeItem);

export default router;

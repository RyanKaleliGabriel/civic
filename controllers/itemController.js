import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";
import Item from "../models/Item.js";
import APIfeatures from "../utils/ApiFeatures.js";

export const getItems = catchAsync(async (req, res, next) => {
  const features = new APIfeatures(Item.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const doc = await features.query;

  return res.status(200).json({
    status: "success",
    results: doc.length,
    data: doc,
  });
});

export const getItem = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const item = await Item.findById(id);

  if (!item) {
    return next(new AppError("No document found with that id", 404));
  }

  return res.status(200).json({
    status: "success",
    data: item,
  });
});

export const addItem = catchAsync(async (req, res, next) => {
  const item = await Item.create(req.body);
  return res.status(201).json({
    status: "success",
    data: item,
  });
});

export const updateItem = catchAsync(async (req, res, next) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });

  if (!item) {
    return next(new AppError("No document found with that id", 404));
  }

  return res.status(201).json({
    status: "success",
    data: item,
  });
});

export const removeItem = catchAsync(async (req, res, next) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) {
    return next(new AppError("No document found with that id", 404));
  }

  return res.status(204).json({
    status: "success",
    data: null,
  });
});

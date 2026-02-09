import Joi from "joi";

export const productSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "Title is required",
    "string.min": "Title must be at least 3 characters",
  }),
  description: Joi.string().required().messages({
    "string.empty": "Description is required",
    "string.min": "Description must be at least 10 characters",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number",
    "number.min": "Price must be greater than 0",
  }),
  stock: Joi.number().required().messages({
    "number.base": "Stock must be a number",
    "number.min": "Stock cannot be negative",
  }),
  category: Joi.string().min(0).required().messages({
    "string.empty": "Category is required",
  }),
});

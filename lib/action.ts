"use server";

import { redirect } from "next/navigation";
import { productSchema } from "./validator/product.schema";

export async function createProductAction(formData: FormData) {
  const product = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    stock: Number(formData.get("stock")),
    category: formData.get("category"),
  };
  const { error, value } = await productSchema
    .validateAsync(product, { abortEarly: false })
    .catch((err) => ({ error: err }));

  if (error) {
    console.error("Validation errors:", error.details);
    console.error("Validation errors:", error);
    throw new Error("Validation failed. Please check the input data.");
  }

  // Handle file upload if an image is provided
  const imgFile = formData.get("img") as File | null;
  console.log("Received file:", imgFile);
  // Here you would typically save the product to your database
  console.log("Product created successfully:", value);

  redirect("/dashboard/products"); // Redirect to products page after form submission
}

import FormProduct, { productsToAdd } from "@/components/Category/FormProduct";
import React from "react";

const CreteCategory = () => {
  return (
    <form
      className="
    max-w-4xl
    space-y-8
    rounded-xl
    border
    bg-white dark:bg-gray-900
    border-gray-200 dark:border-gray-800
    p-4 sm:p-6
  "
    >
      {/* ===== Category Section ===== */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Create Category
        </h2>

        <div className="space-y-1">
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Category Name
          </label>
          <input
            type="text"
            placeholder="Electronics"
            className="
          w-full rounded-md
          border border-gray-300 dark:border-gray-700
          bg-white dark:bg-gray-950
          px-3 py-2
          text-sm
          text-gray-900 dark:text-gray-100
          focus:ring-2 focus:ring-indigo-500
        "
          />
        </div>
      </div>

      {/* ===== Products Section ===== */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Products in this category
        </h3>

        {/* Product Item */}
        {productsToAdd.map((i) => (
          <FormProduct key={i} i={i} />
        ))}

        {/* Add Product (Mock button) */}
        <button
          type="button"
          className="
        text-sm
        text-indigo-600 dark:text-indigo-400
        hover:underline cursor-pointer
      "
          onClick={() => {
            productsToAdd.push(productsToAdd.length + 1);
          }}
        >
          + Add another product
        </button>
      </div>

      {/* ===== Actions ===== */}
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
        <button
          type="button"
          className="
        rounded-md
        border
        px-4 py-2
        text-sm
        border-gray-300 dark:border-gray-700
        text-gray-700 dark:text-gray-300
        hover:bg-gray-100 dark:hover:bg-gray-800
      "
        >
          Cancel
        </button>

        <button
          type="submit"
          className="
        rounded-md
        bg-indigo-600
        px-4 py-2
        text-sm font-medium
        text-white
        hover:bg-indigo-700
      "
        >
          Create Category with Products
        </button>
      </div>
    </form>
  );
};

export default CreteCategory;

import React from "react";

const ProductSkelton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md flex flex-col gap-2">
      <div className="h-5 w-2/3 animate-pulse bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="h-3 w-full animate-pulse bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="h-4 w-1/3 animate-pulse bg-gray-200 dark:bg-gray-700 rounded mt-auto" />
    </div>
  );
};

export default ProductSkelton;

export const productsToAdd = [1];

const FormProduct = ({ i }: { i: number }) => {
  return (
    <div
      className="
          rounded-lg
          border
          border-gray-200 dark:border-gray-800
          bg-gray-50 dark:bg-gray-800
          p-4
          space-y-3
        "
    >
      <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
        Product #{i}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Product name"
          className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm"
        />

        <input
          type="number"
          placeholder="Price"
          className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm"
        />

        <input
          type="number"
          placeholder="Stock"
          className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm"
        />

        <input
          type="file"
          className="
              text-sm
              file:mr-3
              file:rounded-md
              file:border-0
              file:bg-gray-200 dark:file:bg-gray-700
              file:px-3 file:py-1.5
            "
        />
      </div>
    </div>
  );
};

export default FormProduct;

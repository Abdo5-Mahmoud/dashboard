export default function CreateCategoryForm() {
  return (
    <form
      className="
        space-y-4
        rounded-xl border
        bg-white dark:bg-gray-900
        border-gray-200 dark:border-gray-800
        p-4 sm:p-6
      "
    >
      <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
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
            focus:outline-none focus:ring-2 focus:ring-indigo-500
          "
        />
      </div>

      <button
        type="submit"
        className="
          w-full rounded-md
          bg-indigo-600
          px-4 py-2
          text-sm font-medium
          text-white
          hover:bg-indigo-700
        "
      >
        Create Category
      </button>
    </form>
  );
}

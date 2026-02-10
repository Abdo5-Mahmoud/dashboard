import FormRow from "@/components/Form/FormRow";
import Input from "@/components/Form/Input";
import { Button } from "@/components/ui/Button";
import { createProductAction } from "@/lib/action";

const CreateProduct = () => {
  return (
    <form
      className="
  max-w-3xl
  space-y-6
  rounded-xl
  border
  bg-white dark:bg-gray-900
  border-gray-200 dark:border-gray-800
  p-4 sm:p-6
"
      action={createProductAction}
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Create Product
      </h2>

      {/* Title */}
      <FormRow>
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Product Title
        </label>
        <Input type="text" placeholder="Wireless Headphones" name="title" />
      </FormRow>

      {/* Description */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Description
        </label>
        <textarea
          rows={3}
          placeholder="Noise cancelling over-ear headphones"
          className="
        w-full rounded-md
        border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-950
        px-3 py-2
        text-sm
        text-gray-900 dark:text-gray-100
        placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-indigo-500
      "
          name="description"
        />
      </div>

      {/* Price & Stock */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Price
          </label>
          <Input type="number" placeholder="299" name="price" />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Stock
          </label>
          <Input type="number" placeholder="15" name="stock" />
        </div>
      </div>

      {/* Category */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Category
        </label>
        <select
          className="
        w-full rounded-md
        border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-950
        px-3 py-2
        text-sm
        text-gray-900 dark:text-gray-100
        focus:outline-none focus:ring-2 focus:ring-indigo-500
      "
          title="category"
          name="category"
        >
          <option>Electronics</option>
          <option>Accessories</option>
          <option>Home</option>
        </select>
      </div>

      {/* Image */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Product Image URL
        </label>

        <Input type="file" placeholder="Please choose a file" name="img" />
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-4">
        <Button
          styles="
        rounded-md
        border
        px-4 py-2
        text-sm font-medium
        border-gray-300 dark:border-gray-700
        text-gray-700 dark:text-gray-300
        hover:bg-gray-100 dark:hover:bg-gray-800
      "
        >
          Cancel
        </Button>

        <Button type="submit">Create Product</Button>
      </div>
    </form>
  );
};

export default CreateProduct;

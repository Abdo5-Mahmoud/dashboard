import CategoriesList from "@/components/Category/CategoryList";
import CreateCategoryForm from "@/components/Category/CreateCategoryForm";

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Categories
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Categories */}
        <div className="lg:col-span-2">
          <CategoriesList />
        </div>

        {/* Create */}
        <div>
          <CreateCategoryForm />
        </div>
      </div>
    </div>
  );
}

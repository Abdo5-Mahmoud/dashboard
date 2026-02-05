import { ProductCardProps } from "@/types/propsType";

function ProductCard({ product, children }: ProductCardProps) {
  return (
    <article
      className="
        bg-white dark:bg-gray-800
        border border-transparent dark:border-gray-700
        shadow-md rounded-xl p-4
        flex flex-col gap-2
      "
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {product.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {product.description}
      </p>

      <strong className="text-base font-bold text-blue-600 dark:text-blue-400 mt-auto">
        ${product.price.toLocaleString()}
      </strong>

      {children}
    </article>
  );
}

export default ProductCard;

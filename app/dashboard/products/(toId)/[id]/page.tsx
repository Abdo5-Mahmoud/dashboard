import { products } from "@/lib/mock/products";
import { ProductPageProps } from "@/types/props.type";
import Image from "next/image";

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  const product = products.find((prod) => prod.id === parseInt(id));
  if (!product) return <div>Product not found</div>;
  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative w-full aspect-square bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-6 rounded-xl"
            priority
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">
              {product.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-semibold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                product.stock > 0
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Meta */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Added on:{" "}
            <span className="font-medium">
              {new Date(product.createdAt).toDateString()}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4">
            <button className="flex-1 rounded-lg bg-gray-900 text-white py-3 font-medium hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition">
              Add to Cart
            </button>

            <button className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 py-3 font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;

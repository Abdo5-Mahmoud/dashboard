import ProductSkelton from "@/components/ui/ProductSkelton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductSkelton key={i} />
      ))}
    </div>
  );
};

export default loading;

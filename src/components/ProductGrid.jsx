import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onTryOn }) => {
  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl max-md:text-4xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-gray-600 text-lg max-md:text-base">
            Discover the latest trends and styles, curated just for you. Explore
            our diverse range of products and find your perfect match today.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onTryOn={onTryOn} />
          ))}
        </div>
      </div>

     
    </section>
  );
};

export default ProductGrid;

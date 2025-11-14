import React from "react";
import { useStore } from "../../store/useStore";
import EmptyList from "../EmptyList";

export enum NotFoundStatus {
  EMPTY = "empty",
  LOADING = "loading",
  ERROR = "error",
}

const ProductListing = () => {
  const { products, allProducts, loading, error } = useStore();

  if (loading) return <EmptyList status={NotFoundStatus.LOADING} />;
  if (error) return <EmptyList status={NotFoundStatus.ERROR} />;
  if (products.length === 0) return <EmptyList status={NotFoundStatus.EMPTY} />;

  return (
    <div>
      <div className="product-listing-header">
        <h3 className="product-listing-header-title">
          Showing{" "}
          {products.length === allProducts.length
            ? `${allProducts.length} Products`
            : `${products.length} of ${allProducts.length} Products`}
        </h3>
      </div>
      <div className="product-listing-container">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <p className="product-item-category">{product.category}</p>
            <div className="product-item-image-container">
              <img
                src={product.image}
                alt={product.title}
                className="product-item-image"
              />
            </div>
            <div className="product-item-details">
              <p className="product-item-title">{product.title}</p>
              <p className="product-item-price">${product.price}</p>
              <p className="product-item-description">
                {product.description.length > 100
                  ? product.description.slice(0, 180) + "..."
                  : product.description}
              </p>
              <button className="product-item-button">Add to Bag</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

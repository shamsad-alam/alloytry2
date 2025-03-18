import React from 'react';
import './Product.css'; // Assuming you have a CSS file for styling

const productTitles = [
  "Product One",
  "Product Two",
  "Product Three",
  "Product Four",
  "Product Five",
  "Product Six"
];

function Product() {
  const handleProductClick = (index) => {
    window.location.href = `/product-details/${index}`; // Use window.location.href for navigation
  };

  return (
    <div className="container product">
      <section>
        <h1 className='product-head'>Products</h1>
        <div className="product-grid">
          {productTitles.map((title, index) => (
            <div
              key={index}
              className="product-card"
              onClick={() => handleProductClick(index)}
            >
              <div className="product-image">
                <img src={`/images/product${index + 1}.jpg`} alt={title} />
              </div>
              <h2>{title}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Product;

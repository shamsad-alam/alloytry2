import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../component/Product.css"; // Assuming you have a CSS file for styling
const products = [
    { id: 1, name: "SmithAlloy 80", image: `${process.env.PUBLIC_URL}/images/product1.jpg` },
    { id: 2, name: "SmithAlloy 60", image: `${process.env.PUBLIC_URL}/images/product2.jpg` },
    { id: 3, name: "SmithAlloy 255A", image: `${process.env.PUBLIC_URL}/images/product1.jpg` },
    { id: 4, name: "SmithAlloy 214R", image: `${process.env.PUBLIC_URL}/images/product2.jpg` },
    { id: 5, name: "SmithAlloy 235D", image: `${process.env.PUBLIC_URL}/images/product1.jpg` },
    { id: 6, name: "Product 6", image: `${process.env.PUBLIC_URL}/images/product2.jpg` },
];

function SwitchList() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCardClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="container">
            <section>
                <div className="product">
                    <h1 className="">Products</h1>
                    <div className="product-grid">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="product-card"
                                onClick={() => handleCardClick(product.id)}
                            >
                                <div className="product-image">
                                    <img src={product.image || "/images/default.jpg"} alt={product.name} />
                                </div>
                                <h2 className="cardTitle">{product.name}</h2>
                                <button className="cardbtn" onClick={(e) => { e.stopPropagation(); handleCardClick(product.id); }}>
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SwitchList;

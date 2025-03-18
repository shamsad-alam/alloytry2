import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { alloy80 } from "../component/data"; // Import data from data.js
import '../component/ProductDetail.css';

const products = [
    { id: 1, name: "Product 1", details: "Details of Product 1" },
    { id: 2, name: "Product 2", details: "Details of Product 2" },
    {
        id: 3, name: "Product 3", details: "Details of Product 3",
        table: "Table 1",
        para: " Ek button banao jo click hone par background color change kare Ek input field banao jo user ke likhne par usi text ko page me dikhaye. Ek button banao jo click hone par ek naya list item add kare. Ek div banao jo mouseover hone par apna size badhaye, aur mouseout hone par normal ho "
    },
    { id: 4, name: "Product 4", details: "Details of Product 4" },
    { id: 5, name: "Product 5", details: "Details of Product 5" },
    { id: 6, name: "sam", details: "Details of Product 6" }
];

function SwitchDetailList() {
    const { id } = useParams(); // URL se ID le rahe hain
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(parseInt(id) - 1); // Pehla tab default hoga jo ID match kare

    // Agar koi wrong ID daale to error dikhaye
    if (activeTab < 0 || activeTab >= products.length) {
        return <h2>Product not found</h2>;
    }

    const handleTabClick = (index) => {
        setActiveTab(index);
        navigate(`/product/${products[index].id}`); // URL update karega
    };

    return (
        <div className="container">
            <div className="product-detail">
                {/* <p>{products[activeTab].details}</p> */}
                <h2 className="product-head">Products</h2>

                <div className="tabs">
                    {/* Home Button - Left Side */}
                    <button className="home-button" onClick={() => navigate("/")}>
                        Home
                    </button>
                    {products.map((product, index) => (
                        <button
                            key={product.id}
                            className={`tab-button ${activeTab === index ? "active" : ""}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {product.name}
                        </button>
                    ))}
                </div>

                <h2>{products[activeTab].name}</h2>

                <div className="tab-content">
                    <p>{products[activeTab].details}</p>
                    
                    <p>{products[activeTab].table}</p>
                    <p>{products[activeTab].para}</p>

                    <h2>{alloy80.title}</h2>
                </div>
            </div>
        </div>
    );
}

export default SwitchDetailList;

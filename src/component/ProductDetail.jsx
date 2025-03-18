import React, { useState } from 'react';
import './ProductDetail.css'; // Import the CSS file for styling

function ProductDetail() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { title: 'Overview', content: 'This is the overview content.' },
        { title: 'Specifications', content: 'This is the specifications content.' },
        { title: 'Features', content: 'This is the features content.' },
        { title: 'Pricing', content: 'This is the pricing content.' },
        { title: 'Reviews', content: 'This is the reviews content.' },
        { title: 'FAQ', content: 'This is the FAQ content.' }
    ];

    return (
        <div className="container">
            <div className="product-detail m-sm-3 my-lg-5">
                <div className="tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-button ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    {tabs[activeTab].content}
                </div>
            </div>
        </div>

    );
}

export default ProductDetail;

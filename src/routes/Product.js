import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Productsection from '../components/Productsection';

const Product = () => {
    const [activeTab, setActiveTab] = useState(0)
    const onSelect = (id) => {
        setActiveTab(id)
    }
    return (
        <div>
            <Header onSelect={onSelect} />
            <Productsection onSelect={onSelect} activeTab={activeTab} />
            <Footer />
        </div>
    );
};

export default Product;
import React from 'react'
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import About from './component/About';
import Footer from './component/Footer';
// import Product from './component/Product';
// import ProductDetail from './component/ProductDetail';
import SwitchMain from './SwitchCompo/SwitchMain';

import TryProductDetails from './SwitchCompo/TryProductDetails';
function Layout() {
    return (
        <>
            <Navbar />
            <Banner />
            <About />
            {/* <Product /> */}
            <SwitchMain />
            
            <Footer />
            {/* <TryProductDetails />    */}
    

            {/* <ProductDetail /> */}

        </>
    )
}

export default Layout

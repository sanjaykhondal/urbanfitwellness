import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import About from '../../components/about/About'
import Services from '../../components/services/Services'
import Product from '../../components/product/Product'
import Quotes from '../../components/quotes/Quotes'
import Footer from '../../components/footer/Footer'
import HomeComponent from '../../components/homecomponent/HomeComponent'

function Home() {
    return (
        <>
            <Navbar />
            <HomeComponent />
            <About />
            <Services />
            <Product />
            <Quotes />
            <Footer />
        </>
    )
}

export default Home
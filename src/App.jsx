import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <>
      <Header />
      <div className='h-[90vh] overflow-y-scroll'>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
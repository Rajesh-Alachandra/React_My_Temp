import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './project/components/LoadingScreen/LoadingScreen';
import Layout from './project/layout/Layout';
import ThemeToggle from './project/components/ThemeToggle/ThemeToggle';

// Lazy load components
const Home = lazy(() => import('./project/pages/Home/Home'));
const About = lazy(() => import('./project/pages/other/About'));
const Contact = lazy(() => import('./project/pages/other/Contact'));
const Products = lazy(() => import('./project/pages/shop/Products'));
const ProductDetail = lazy(() => import('./project/pages/shop/ProductDetail.jsx'));

const App = () => {
  return (
    <>
      {/* //! Loading screen for components that require loading */}
      <Suspense fallback={<LoadingScreen />}>
        <Layout>
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            {/* // ?Product details by using params Name */}
            <Route path="/products/:name" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
};

export default App;


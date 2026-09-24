import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './hero';
import About from './about';
import Footer from './footer';
import ScrollReveal from './scroll-reveal';
import NotFound from './not-found';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isHomePage = window.location.pathname === '/';

root.render(
isHomePage ? (
  <>
    <Hero/>
    <About/>
    <Footer/>
    <ScrollReveal/>
  </>
) : <NotFound />
);

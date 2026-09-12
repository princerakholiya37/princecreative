import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './hero';
import About from './about';
import Footer from './footer';
import ScrollReveal from './scroll-reveal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Hero/>
<About/>
<Footer/>
<ScrollReveal/>
</>
);

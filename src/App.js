import React from 'react';
import { HashRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/common.css';
import './styles/style.css';


import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <HashRouter>
      <Header />
      <AppRouter />
      <Footer />
    </HashRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, HashRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/common.css';
import './styles/style.css';

import AppRouter from './nav/AppRouter';
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

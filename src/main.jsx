import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/main.css'
import Header from './pages/Header';
import Footer from './pages/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Footer/>
  </React.StrictMode>,
);

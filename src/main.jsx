import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/main.css'
import Header from './pages/Header';
import Content from './pages/Content';
import Footer from './pages/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <main>
      <Content/>
    </main>
    <Footer/>
  </React.StrictMode>,
);

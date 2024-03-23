/** Instacats - Main Page:
 * Feito por lucarl07
 * Criado em: 23/03/2024
 */

// Importar recursos React.js:
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importar folha de estilo:
import './css/main.css'

// Importar componentes DOM em formato .jsx:
import Header from './pages/Header';
import Content from './pages/Content';
import Footer from './pages/Footer';

// Renderizando os componentes DOM:
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <main>
      <Content/>
    </main>
    <Footer/>
  </React.StrictMode>,
);

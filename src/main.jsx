import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import store from './Redux/store.jsx'; // Import the Redux store
import { CartProvider } from './Pages/Product/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}> {/* Redux should wrap everything */}
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </Provider>
</React.StrictMode>

);

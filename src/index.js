import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './components/api/productContext';
import { AppProviderWomen } from './components/womenApi/productContext';
import { CartProvider } from './components/cart/cartContext';
import { Provider } from 'react-redux';
import { store } from './feature/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <AppProviderWomen>
        <CartProvider>
          <Provider store={store}>
    <App  />
    </Provider>
    </CartProvider>
    </AppProviderWomen>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
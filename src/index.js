import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import {Provider} from '../src/context/Provider'
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
    <ToastContainer/>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);

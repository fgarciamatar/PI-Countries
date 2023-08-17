import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import store from "./redux/store";


import App from './App.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}> 
    <BrowserRouter> 
        <App />
    </BrowserRouter>
</Provider>
);

//envolvemos la app y le pasamos a Provider el store de Redux
//envolvemos la app en BrowserRouter para poder hacer el enrutado
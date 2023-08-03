import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/store"
import "./main.css"

import App from './App.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
);

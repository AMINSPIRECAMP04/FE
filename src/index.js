import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// import CapacityPage from './pages/state/CapacityPage';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <CapacityPage />
// );


import BlogJsonPage from './pages/state/BlogJsonPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BlogJsonPage />
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

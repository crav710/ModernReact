import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// get ref for div root 

const el = document.getElementById('root');

// tell react show our app in the element above 

const root = ReactDOM.createRoot(el);

// show component on screen 

root.render(<App/>);

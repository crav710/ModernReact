import React from 'react';
import ReactDOM from 'react-dom/client';


// get ref for div root 

const el = document.getElementById('root');

// tell react show our app in the element above 

const root = ReactDOM.createRoot(el);

// Create a Component 

function App(){
  return <textarea autoFocus={true} />;
}

// show component on screen 

root.render(<App/>);

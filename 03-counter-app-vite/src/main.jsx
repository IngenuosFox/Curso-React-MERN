import React from 'react';
import "./styles.css";
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import ReactDOM from 'react-dom/client';


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp value={20}/>
        {/* <FirstApp title="Hola, Soy Vegeta"/> */}
    </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Calendar from '../src/Calendar/index.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{display: 'flex'}}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    <Calendar></Calendar>
    </div>
    
  </React.StrictMode>
);

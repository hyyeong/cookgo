import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import ReactCatcher from 'react-catcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactCatcher
    fallback={
      <h1>
        An Error has occured !!
      </h1>
    }
    errorHandler={(error, errorInfo) => {
      const error_message = `error: ${error}, errorInfo: ${JSON.stringify(errorInfo)}`;
      console.log(error_message)
    }}
  >

  <BrowserRouter> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </ReactCatcher>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

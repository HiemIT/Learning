import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './app/store';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <App />
      </SnackbarProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();

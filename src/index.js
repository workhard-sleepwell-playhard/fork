import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './App';

// import { CategoriesProvider } from './contexts/categories.context';

import { store } from './store/store';

import './index.scss';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
     <Provider store={store}>  
       <BrowserRouter>   
                    <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  
);

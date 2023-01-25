import React from 'react';
import ReactDOM from 'react-dom/client';
// import CtxtProvider from './contexter';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from './contexts/themecontext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  <ThemeContextProvider>
    <BrowserRouter>
      {/* <Snowfall /> */}
      <App />
    </BrowserRouter>
  </ThemeContextProvider>
  // </Provider>
);

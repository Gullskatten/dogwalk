import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import * as serviceWorker from './serviceWorker';
import theme from './utils/theme';
import { UserProvider } from './context/User';
import GlobalStyle from './components/GlobalStyle';
import 'react-tippy/dist/tippy.css';

const application = (
  <ThemeProvider theme={theme}>
    <UserProvider>
      <>
        <GlobalStyle />
        <App />
      </>
    </UserProvider>
  </ThemeProvider>
);

ReactDOM.render(application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

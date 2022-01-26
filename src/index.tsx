import React from "react"
import ReactDOM from "react-dom"
import {App} from "./App"
import store from "./redux/store"
import {Provider} from "react-redux"
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import './index.css';
import {HashRouter} from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  </ThemeProvider>, document.getElementById('root'));

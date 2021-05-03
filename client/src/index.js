import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/Global.module.scss";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <GlobalStyle>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </GlobalStyle>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

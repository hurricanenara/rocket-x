import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
// import { ApolloProvider } from "@apollo/client/react";
import { gql } from "@apollo/client";

const { REACT_APP_STEPZEN_API_KEY, REACT_APP_STEPZEN_URI } = process.env;
console.log(REACT_APP_STEPZEN_API_KEY);
const client = new ApolloClient({
  link: createHttpLink({
    credentials: "same-origin",
    headers: {
      authorization: `apikey ${REACT_APP_STEPZEN_API_KEY}`,
    },
    uri: REACT_APP_STEPZEN_URI,
  }),
  cache: new InMemoryCache(),
  onError: (e) => {
    console.log(e);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

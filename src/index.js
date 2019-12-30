import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

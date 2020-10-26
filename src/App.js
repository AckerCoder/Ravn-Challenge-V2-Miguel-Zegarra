import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "@apollo/react-hooks";
import {PeoplePreviewContainer} from "./containers/PeoplePreviewContainer";
import {PeopleDetailsContainer} from "./containers/PeopleDetailsContainer";
import 'normalize.css'
import './styles/styles.css'

function App() {

  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/"
  })

  return (
    <ApolloProvider client = {client}>
      <header>Ravn Star Wars Registry</header>
      <main>
        <PeoplePreviewContainer/>
        <PeopleDetailsContainer/>
      </main>
    </ApolloProvider>
  );
}

export default App;

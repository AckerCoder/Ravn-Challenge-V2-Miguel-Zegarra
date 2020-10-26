import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "@apollo/react-hooks";
import {MainContainer} from "./containers/MainContainer";
import 'normalize.css'
import './styles/styles.css'


function App() {

  const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index"
  })
  

  return (
    <ApolloProvider client = {client}>
      <header>Ravn Star Wars Registry</header>
      <main>
        <MainContainer/>
      </main>
    </ApolloProvider>
  );
}

export default App;

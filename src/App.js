import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "@apollo/react-hooks";
import {MainContainer} from "./containers/MainContainer";
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
        <MainContainer/>
      </main>
    </ApolloProvider>
  );
}

export default App;

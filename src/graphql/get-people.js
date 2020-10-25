import gql from 'graphql-tag';

export const GET_PEOPLE = gql`
    query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  } 
  
`
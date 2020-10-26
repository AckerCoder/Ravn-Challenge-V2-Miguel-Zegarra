import gql from 'graphql-tag';

export const GET_PEOPLE = gql`
  query people($first: Int = 5, $after: String = null){
    allPeople(first:$first,after: $after){
      people{
        name
        species{
          name
        }
        homeworld{
          name
        }
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection{
          edges{
            node{
              name
            }
          }
        }
      }
      pageInfo{
        endCursor
        hasNextPage
      }
    }
        
  }
  
`
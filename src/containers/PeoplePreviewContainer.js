import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PEOPLE } from '../graphql/get-people';

export const PeoplePreviewContainer = () => {
    const {data: {pokemons = []} = {}} = useQuery(GET_PEOPLE, 
        {variables: {first: 9}
    })
    console.log(pokemons)
    return(
        <div className="container">
            {pokemons && pokemons.map(person => JSON.stringify(person))}
        </div>
    )
}
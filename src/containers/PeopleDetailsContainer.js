import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PEOPLE } from '../graphql/get-people';
import {Person} from  '../components/Person';

export const PeopleDetailsContainer = () => {
    const {data: {pokemons = []} = {}} = useQuery(GET_PEOPLE, 
        {variables: {first: 9}
    })
    console.log(pokemons)
    return(
        <div className="current-person">
        </div>
    )
}
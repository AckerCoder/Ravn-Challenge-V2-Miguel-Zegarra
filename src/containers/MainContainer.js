import  React, {useState} from 'react';
import {Person} from  '../components/Person';
import {useQuery} from '@apollo/react-hooks';
import{GET_PEOPLE} from '../graphql/get-people';
import{PeopleDetailsContainer} from './PeopleDetailsContainer';



export const MainContainer = () => {

    const {data: {pokemons = []} = {}} = useQuery(GET_PEOPLE, 
        {variables: {first: 9}
    })
    
    const [current, setCurrent] = useState(null)

    function switchCurrent(clickedPerson){
        setCurrent(clickedPerson)
    }

    
    return(
        <div className="main-container">
            <div  className="person-previews">
                {pokemons.map(person=>
                    <div key = {person.name} onClick={()=>switchCurrent(person)}>
                        <Person person={person}/>
                    </div>        
                    )}
            </div>
            {current?(
                    <div className="current-details-container">
                            <PeopleDetailsContainer name={current.name}/>
                    </div>
            ): null
            }
        </div>
    )
}
import  React, {useState} from 'react';
import {Person} from  '../components/Person';
import {useQuery} from '@apollo/react-hooks';
import{GET_PEOPLE} from '../graphql/get-people';
import{PeopleDetailsContainer} from './PeopleDetailsContainer';
import * as ReactBootStrap from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

export const MainContainer = () => {
    

    const [current, setCurrent] = useState(null)

    function switchCurrent(clickedPerson){
        setCurrent(clickedPerson)
    }

    const {data, error, loading} = useQuery(GET_PEOPLE,
        {
            variables: {first: 5}
        });
        if(loading)return<div  className="person-previews"><div className="ly-loading"><ReactBootStrap.Spinner animation="border" role="status"/>
      Loading
      </div>
      </div>;

        if(error) return<div  className="person-previews"><div className="error-message">Failed to Load Data</div></div>;
        console.log(data.allPeople.people)

    return(
        <div className="main-container">
            <div  className="person-previews">
                {data.allPeople.people.map(person=>
                    {return<div key = {person.name} onClick={()=>switchCurrent(person)}>
                        <Person person={person}/>
                    </div>}
                    )}
            </div>
            {current?(
                    <div className="current-details-container">
                        <PeopleDetailsContainer current={current}/>
                    </div>
            ): null
            }
        </div>
    )
}
import  React, {useState} from 'react';
import {Person} from  '../components/Person';
import {useQuery} from '@apollo/react-hooks';
import{GET_PEOPLE} from '../graphql/get-people';
import{PeopleDetailsContainer} from './PeopleDetailsContainer';
import * as ReactBootStrap from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

export const MainContainer = () => {    

    const [current, setCurrent] = useState(null)
    const [loaded, isLoaded] = useState(false)


    function switchCurrent(clickedPerson){
        setCurrent(clickedPerson)
    }

    function everythingLoaded(){
        isLoaded(true)
    }

    const {data, error, loading, fetchMore} = useQuery(GET_PEOPLE,
        {
            variables: {first: 5}
        });

    if(loading)
        return<div  className="person-previews">
                <div className="ly-loading">
                    <ReactBootStrap.Spinner animation="border" role="status"/>
                        Loading
                </div>
            </div>;


    if(error)
        return<div  className="person-previews">
                <div className="error-message">
                    Failed to Load Data
                </div>
            </div>;

    fetchMore({variables:{first: 5, 
        after: data.allPeople.pageInfo.endCursor}, 
        updateQuery: (prevResult, {fetchMoreResult})=>{

            if(!fetchMoreResult)return prevResult;

            fetchMoreResult.allPeople.people=[
                ...prevResult.allPeople.people,
                ...fetchMoreResult.allPeople.people
            ];
           if(fetchMoreResult.allPeople.pageInfo.hasNextPage)
            return fetchMoreResult;

            everythingLoaded();
            
            return false;
    }})
    console.log(loaded)
    return<div className="main-container">
            <div  className="person-previews">
                {data.allPeople.people.map(person=>
                    {return<div key = {person.name} onClick={()=>switchCurrent(person)}>
                        <Person person={person}/>
                    </div>}
                    )}
                    {!loaded?(<div className="ly-loading">
                            <ReactBootStrap.Spinner animation="border" role="status"/>
                                Loading
                            </div>):null}
            </div>
                           
            {current?(
                    <div className="current-details-container">
                        <PeopleDetailsContainer current={current}/>
                    </div>
            ): null}
            
            
            
        </div>
    
}
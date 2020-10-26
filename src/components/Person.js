import React from 'react';
import arrow from "../img/arrow.svg"

export const Person = ({person})=>{
    return(
        <div className = "person">
            <div className = "ly-person">
                <div className = "person-name">
                    <span>{person.name}</span>
                </div>
                <div className = "race-from-world">
                    <span>{person.species?person.species.name:"Human"} from {person.homeworld.name}</span>
                </div>
            
            </div>
                <button >
                    <div className = "arrow-icon" >
                        <img src={arrow} alt={person.name}></img>
                    </div>
                </button>
        </div>


    )
}
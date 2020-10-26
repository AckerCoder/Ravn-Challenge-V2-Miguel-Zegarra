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
                    <span>{person.maxHP} from {person.maxCP}</span>
                </div>
            
            </div>
                <div className = "arrow-icon">
                    <img src={arrow} ></img>
                </div>
        </div>

    )
}
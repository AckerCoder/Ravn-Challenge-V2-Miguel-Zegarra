import React from 'react';

const capitalize = (unformalString) => {
    if (typeof unformalString !== 'string') return ''
    return unformalString.charAt(0).toUpperCase() + unformalString.slice(1)
}

export const PeopleDetailsContainer = ({current}) => {
    return(
        <div className="current-person">
            <div className="general-information">
                <h3>General Information</h3>
                <div className="ly-section-information">
                    <span className="tag-info">Eye Color</span>
                    <span className="info">{capitalize(current.eyeColor)}</span>
                </div>
                <div className="ly-section-information">
                    <span className="tag-info">Hair Color</span>
                    <span className="info">{capitalize(current.hairColor)}</span>
                </div>
                <div className="ly-section-information">
                    <span className="tag-info">Skin Color</span>
                    <span className="info">{capitalize(current.skinColor)}</span>
                </div>
                <div className="ly-section-information">
                    <span className="tag-info">Birth Year</span>
                    <span className="info">{capitalize(current.birthYear)}</span>
                </div>

            </div>
            <div>
                <h3>Vehicles</h3>
                {current.vehicleConnection?current.vehicleConnection.edges.map(vehicle=>{
                return<div className="ly-section-information" key={current.birthYear + current.id}>
                    <span className="tag-info">{vehicle.node.name}</span>
                </div>
                }):<span></span>}

                    
            </div>
        </div>
    )
}
import React from 'react';

export const PeopleDetailsContainer = (props) => {
    return(
        <div className="current-person">
            <div className="general-information">
                <h3>General Information</h3>
                <div className="ly-section-information">
                    <span className="tag-info">Eye Color</span>
                    <span className="info">{props.name}</span>
                </div>
                <div className="ly-section-information">
                    <span className="tag-info">Hair Color</span>
                    <span className="info">{props.name}</span>
                </div>
                <div className="ly-section-information">
                    <span className="tag-info">Skin Color</span>
                </div>
                <div className="ly-section-information">
                    <span className="tag-info">Birth Year</span>
                </div>

            </div>
            <div>
                <h3>Vehicles</h3>
                <div className="ly-section-information">
                    <span className="tag-info">Birth Year</span>
                </div>
                <div className="ly-section-information">
                    <span className="tag-info">Birth Year</span>
                </div>
            </div>
        </div>
    )
}
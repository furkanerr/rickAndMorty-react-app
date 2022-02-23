import React from 'react';
import Cardstyle from './Cardstyle.scss';
import {Link} from "react-router-dom";

const MyComponent = ({character}) => {


    return (
        <>
        <Link to={`/characters/${character.id}`} style={{ textDecoration: 'none' }}>
                <div className="Card">

                    <div className="allElements">
                        <div className="Image">
                            <img src={character.image} alt="characterImage"/>
                        </div>
                        <div className="CharacterInfo">
                            <div className="CharacterName">{character.name}</div>
                            <div className="StatusAndSpecies">
                                <p className="Status">{character.status+"-"+character.species}</p>
                            </div>
                            <label>Gender:</label>
                            <span className="Gender">{character.gender}</span>
                            <label>Location:</label>
                            <span className="Location">{character.location.name}</span>
                        </div>
                    </div>

                </div>
        </Link>
        </>

    );
};

export default MyComponent;

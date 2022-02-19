import React from 'react';
import Cardstyle from './Cardstyle.scss';
import Services from "../../api/api";
const MyComponent = () => {

    console.log(Services.getAllCharacter());
    return (
        <div className="Card">
            <div className="allElements">
            <div className="Image">
                <img src={"https://rickandmortyapi.com/api/character/avatar/361.jpeg"} alt="characterImage"/>
            </div>
            <div className="CharacterInfo">
            <div className="CharacterName">Morty</div>
                <div className="StatusAndSpecies">
                    <p className="Status">Alive-Human</p>
                </div>
                <label>Gender:</label>
                <span className="Gender">Male</span>
                <label>Location:</label>
                <span className="Location">Earth</span>
            </div>
            </div>
        </div>
    );
};

export default MyComponent;

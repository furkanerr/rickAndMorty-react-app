import React from 'react';
import resim from './Resim.jpg'
import Cardstyle from './Cardstyle.scss';
const MyComponent = () => {
    return (
        <div className="Card">
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
    );
};

export default MyComponent;

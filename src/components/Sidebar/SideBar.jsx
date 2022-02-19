import React from 'react';
import SideBarStyle from './SideBarStyle.scss';

const genders = ["female", "male", "genderless", "unknown"];
const species = ["human", "alien", "humanoid", "poopybutthole", "mythological-creature", "animal", "robot", "disease", "unknown"];
const statuses = ["alive", "dead", "unknown"];

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const MyComponent = () => {
    return (
        <div className="sideBar">

            <div className="searhBarDiv">
                <input className="searchBarInput" placeholder="Search..." type="search"/>
            </div>
            <label  id={"labels"}>Gender</label>
            <div className="genderContainer">
                {
                    genders.map((gender) =>(
                        <>
                            <input type="radio" id={gender} name="fav_language" name={gender}/>
                            <label htmlFor={gender}>{capitalize(gender)}</label><br/>
                        </>
                    ))
                }


            </div>
            <label  id={"labels"} >Status</label>
            <div className="statusContainer">
                {
                    statuses.map((status) =>(
                        <>
                            <input type="radio" id={status} name="fav_language" name={status}/>
                            <label htmlFor={status}>{capitalize(status)}</label><br/>
                        </>
                    ))
                }


            </div>
            <label  id={"labels"} >Species</label>
            <div className="speciesContainer">
                {
                    species.map((species) =>(
                        <>
                            <input type="radio" id={species} name="fav_language"
                                   name={species}/>
                            <label htmlFor={species}>{capitalize(species)}</label><br/>
                        </>
                    ))
                }

            </div>
        </div>
    );
};

export default MyComponent;

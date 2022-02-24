import React,{useState} from 'react';
import SideBarStyle from './SideBarStyle.scss';

const genders = ["female", "male", "genderless", "unknown"];
const species = ["human", "alien", "humanoid", "poopybutthole", "mythological-creature", "animal", "robot", "disease", "unknown"];
const statuses = ["alive", "dead", "unknown"];

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const setName = (name, _filters, _setFilters) => {
    _setFilters({..._filters, name: name})
}

export const setGender = (gender, _filters, _setFilters) => {
    _setFilters({..._filters, gender: gender})
    console.log("gender:"+gender)
}

export const setStatus = (status, _filters, _setFilters) => {
    _setFilters({..._filters, status: status})
    console.log("status:"+status)
}

export const setSpecies = (species, _filters, _setFilters) => {
    _setFilters({..._filters, species: species})
    console.log("species:"+species)
}

export const resetFilters = (_setFilters, _setUrl) => {
    _setFilters({});
    _setUrl("https://rickandmortyapi.com/api/character");

}

export const createFilterUrl = (_filters) => {
    let queryString = Object.entries(_filters).map(([key, value]) => ("" + key + '=' + value)).join('&');
    return "https://rickandmortyapi.com/api/character/?" + queryString;
    console.log(_filters);
}

const SideBar = ({setUrl}) => {
    const [filters, setFilters] = useState({});
    console.log(filters)
    return (
        <div className="sideBar">

            <div className="searhBarDiv">
                <input className="searchBarInput" placeholder="Search..."
                       type="search"
                       onChange={(e) => setName(e.target.value, filters, setFilters)}
                       value={filters.name || ""}
                />
            </div>
            <label  id={"labels"}>Gender</label>
            <div className="genderContainer">
                {

                    genders.map((gender,index) =>(

                        <div key={index} onClick={() => setGender(gender, filters, setFilters)}   >
                            <input className={"gender"} type="radio"
                                     checked={filters.gender === gender}   id={gender} name="fav_language" name={"gender"} value={gender} />
                            <label  htmlFor={gender}>{capitalize(gender)}</label><br/>
                        </div>

                    ))

                }


            </div>
            <label  id={"labels"} >Status</label>
            <div className="statusContainer">
                {
                    statuses.map((status,index) =>(

                        <div key={index}  onClick={() => setStatus(status, filters, setFilters)}>
                            <input className={"status"}
                                   checked={filters.status === status} type="radio"  id={status} name="fav_language" name={"status"} value={status}/>
                            <label  htmlFor={status}>{capitalize(status)}</label><br/>
                        </div>

                    ))
                }


            </div>
            <label  id={"labels"} >Species</label>
            <div className="speciesContainer">
                {
                    species.map((species,index) =>(

                            <div key={index} onClick={() => setSpecies(species, filters, setFilters)}>
                            <input className={"species"} type="radio" id={species}
                                   checked={filters.species === species}      name={"species"} value={species}/>
                            <label htmlFor={species}>{capitalize(species)}</label><br/>
                            </div>

                    ))
                }

            </div>
            <button className={"applyFilterButton"} onClick={() => setUrl(createFilterUrl(filters))}>Apply Filters</button>
            <button className={"resetFilterButton"}  onClick={() => resetFilters(setFilters, setUrl)}>Clear Filters</button>
        </div>
    );
};

export default SideBar;

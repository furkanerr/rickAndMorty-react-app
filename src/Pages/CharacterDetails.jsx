import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleCharacter} from "../features/characterDetailSlice";
import characterDetailStyle from './characterDetailStyle.scss';

const CharacterDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const character = useSelector((state) => state.singleCharacter)

    useEffect( () => {
        dispatch(  fetchSingleCharacter(id))
    }, []);

    var lastEpisode = character.singleCharacter?.episode?.slice(-1);

    return (
        <div className={"characterDetails"}>
        <div className={"container"}>
            <div className={"Image"}>
                <img src={character.singleCharacter.image}/>
            </div>
            <div className={"characterInfo"}>
                <h2 className={"name"}>{character.singleCharacter.name}</h2>
                <p className={"statusAndSpecies"}>{character.singleCharacter.status + "-" + character.singleCharacter.species}</p>
                <p className={"location"}>{character.singleCharacter.location?.name}</p>
                <p className={"lastEpisode"}>{lastEpisode}</p>



            </div>

        </div>
        </div>
    );
};

export default CharacterDetails;

import React, {useEffect, useState} from "react";
import Card from "../components/Card/Card";
import HomeStyle from './HomeStyle.scss';
import SideBar from "../components/Sidebar/SideBar";
import Header from '../components/Header/Header'
import {fetchAllCharacter} from "../features/characterSlice";
import {useDispatch,useSelector} from "react-redux";
import axios from "axios";


const Home = () => {
    const dispatch  = useDispatch();
    const characters = useSelector((state) => state.characters)
    const[url,setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1")


    useEffect(() => {
    dispatch(fetchAllCharacter(url));
    },[url] );


    const handleNextClick=  () =>{
        setUrl(characters.characters.info.next)
    }
    const handlePrevClick =() =>{
        setUrl(characters.characters.info.prev)
    }
    console.log(characters);

    return (
        <>
            <Header/>

            <div className="Dashboard">

                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="Cards">
                    {
                        characters.characters?.results?.map((character) =>(
                            <Card character={character}></Card>
                        ))
                    }

                </div>


            </div>
            <div className={"buttonGroup"}>
            {
                characters.characters.info?.prev!==null && (<button className={"prevPageButton"} onClick={()=>handlePrevClick()}>Prev Page</button>)
            }
            {
                characters.characters.info?.next!==null && (<button className={"nextPageButton"} onClick={()=>handleNextClick()}>Next Page</button>)
            }
            </div>


        </>
    );
};

export default Home;
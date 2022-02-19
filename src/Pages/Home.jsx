import React from "react";
import Card from "../components/Card/Card";
import HomeStyle from './HomeStyle.scss';
import SideBar from "../components/Sidebar/SideBar";
import Header from '../components/Header/Header'

const Home = () => {
    return (
            <>
                <Header/>
            <div className="Dashboard">

         <div className="sideBar">
             <SideBar/>
         </div>
            <div className="Cards">

                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            </div>
            </>
    );
};

export default Home;
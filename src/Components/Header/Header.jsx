import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Header.scss";

function Header({ setData }) {

    const [Location, setLocation] = useState("");
    const [WeatherData, setWeatherData] = useState({}); // store data from api

    function getLocation(e) {
        setLocation(e.target.value);
    }
    useEffect(() => {
        getData();
    }, [])

    async function getData(Location) {
        let _Location = capitalize(Location);
        const resp = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${_Location}&cnt=8&units=metric&appid=7978bd37eb6b8463cc06ca35e9166f7a`);
        if (resp.status === 200) {
            let data = resp.data;
            setWeatherData(data);
            if (typeof setData == "function") {
                setData(data);
            }
        } else {
            console.log("Oh! API Failed");
        }
    }
    function capitalize(cityEnter) {
        let citylower = cityEnter.toLowerCase();
        return cityEnter.charAt(0).toUpperCase() + citylower.slice(1);
    }
   
    function viewData(e) {
        e.preventDefault();
        getData(Location);
    }
    return (
        <>
            <div className="header w-100">
                <div className="container-fluid">
                    <div className="" id="">
                        <form className="d-flex" role="search" onSubmit={viewData}>
                            <input
                                className=" me-2 searchInpt"
                                onChange={getLocation}
                                type="search"
                                placeholder="Type in a city name"
                                aria-label="Search"
                            />
                            <button className="searchBtn" type="submit">
                                FIND WEATHER
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;

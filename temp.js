import React, { useEffect, useState } from "react"
import './style.css'
const Temp = () =>{
  const[searchValue,setsearchValue] = useState();

  const getWheatherInfo = async () =>{
     try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid={API key}`;

        const res = await fetch(url);
        const data = await data.json();
        console.log(data)
        const {temp} = data.main;

     }catch{
       console.log("error")
     }
  }

  useEffect(() =>{
    getWheatherInfo();
  },[])
    return(
        <>
        <div className="wrap">
            <div className="search">
                <input type="" placeholder="search.." autoFocus id="search" className="searchTerm"
                value={searchValue}
                onChange={(e)=>{searchValue(e.target.value)}}/>

                <button className="searchButton" type="button" onClick={getWheatherInfo}>
                    Search 
                </button>
            </div>
        </div>
        { /**/}

       <article className="widget">
        <div className="weatherIcon">
            <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
            <div className="temperature">
                <span>25.87&deg;</span>
            </div>

            <div className="description">
                <div className="weatherCondition">
                    sunny
                </div>
                <div className="place">
                    Pune, India
                </div>
            </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>

            {/*our 4col section*/}
            <div className="extra-temp">
                 <div className="temp-info-minmax">
                    <div className="two-sided-section">
                      <p>
                        <i className={"wi wi-sunset"}></i>
                      </p>
                      <p className="extra-info-leftside">
                        19:19<br/>
                        Sunset
                      </p>
                    </div>
                    <div className="two-sided-section">
                      <p>
                        <i className={"wi wi-humidity"}></i>
                      </p>
                      <p className="extra-info-leftside">
                        19:19<br/>
                        Humidity
                      </p>
                    </div>
                 </div>
                 <div className="weather-extra-info">
                 <div className="two-sided-section">
                      <p>
                        <i className={"wi wi-rain"}></i>
                      </p>
                      <p className="extra-info-leftside">
                        19:19<br/>
                        Pressure
                      </p>
                    </div>

                    <div className="two-sided-section">
                      <p>
                        <i className={"wi wi-strong-wind"}></i>
                      </p>
                      <p className="extra-info-leftside">
                        19:19<br/>
                        Speed
                      </p>
                    </div>
                 </div>
            </div>
       </article>
        </>
    )
}

export default Temp;
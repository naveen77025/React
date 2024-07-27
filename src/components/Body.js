import { ResCard } from "./ResCard";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurantList, setRestaurantlist]= useState([]);
    const [filteredrRestaurantList, setfilteredrRestaurantList]= useState([]);    
    const [searchText,setSearchText]= useState("");

    useEffect(()=>{
        fetchData();
    },[]);
    //console.log(restaurantList);
    const fetchData= async () => {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3120407&lng=80.4319567&collection=83639&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const jsonData= await data.json();
        setfilteredrRestaurantList(jsonData?.data?.cards?.slice(3));
        setRestaurantlist(jsonData?.data?.cards?.slice(3));
    };
    return (
        <div className="body-container">
            <div className="res-filter">
                <div>
                    <input type="text" className="search-res" value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button className="searchResBtn" onClick={()=>{
                            console.log(searchText);
                            const filteredRest=restaurantList.filter(res=>res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setfilteredrRestaurantList(filteredRest);
                        }}>search
                    </button>
                </div>
                <button className="top-rated-button" onClick={()=>{
                    const filteredRes = restaurantList.filter(res => res.card.card.info.avgRating>=4);
                    setfilteredrRestaurantList(filteredRes);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="card-container">
            {
                filteredrRestaurantList.map(res => 
               <Link key={res.card.card.info.id} to={"/restaurant/"+res.card.card.info.id}> <ResCard key={res.card.card.info.id} resData={res.card.card.info}/></Link>
            )}
            </div>
        </div>
    )
};

export default Body;
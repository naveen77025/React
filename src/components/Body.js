import { ResCard } from "./ResCard";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantList, setRestaurantlist]= useState([]);
    const [filteredrRestaurantList, setfilteredrRestaurantList]= useState([]);    
    const [searchText,setSearchText]= useState("");

    useEffect(()=>{
        fetchData();
    },[]);
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return (
            <h1> you are offline!!!</h1>
        )
    }
    const fetchData= async () => {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3120407&lng=80.4319567&collection=83639&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const jsonData= await data.json();
        setfilteredrRestaurantList(jsonData?.data?.cards?.slice(3));
        setRestaurantlist(jsonData?.data?.cards?.slice(3));
    };
    return (
        <div className="body-container">
            <div className="flex">
                <div className="m-4 px-4 py-2">
                    <input type="text" className="border border-solid border-black rounded-md" value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button className="px-4 py-1 m-2 bg-green-400 rounded-xl" onClick={()=>{
                            console.log(searchText);
                            const filteredRest=restaurantList.filter(res=>res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setfilteredrRestaurantList(filteredRest);
                        }}>search
                    </button>
                </div>
                <div className="m-4 px-2 py-2 flex items-center">
                <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={()=>{
                    const filteredRes = restaurantList.filter(res => res.card.card.info.avgRating>=4);
                    setfilteredrRestaurantList(filteredRes);
                }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
            {
                filteredrRestaurantList.map(res => 
               <Link key={res.card.card.info.id} to={"/restaurant/"+res.card.card.info.id}> <ResCard key={res.card.card.info.id} resData={res.card.card.info}/></Link>
            )}
            </div>
        </div>
    )
};

export default Body;
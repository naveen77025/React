import { resList } from "../utils/constants";
import { ResCard } from "./ResCard";
import {useState} from "react";

const Body = () => {
    const [restaurantList, setRestaurantlist]= useState(resList);
    console.log(restaurantList);
    return (
        <div className="body-container">
            <button className="top-rated-button" onClick={()=>{
                const filteredRes = restaurantList.filter(res => res.info.rating.aggregate_rating>=4);
                setRestaurantlist(filteredRes);
            }}>Top Rated Restaurants</button>
            <div className="card-container">
            {
                restaurantList.map(res => <ResCard key={res.info.resId} resData={res}/>)
            }
            </div>
        </div>
    )
};

export default Body;
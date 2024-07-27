import { Link } from "react-router-dom";
import { RES_URL } from "../utils/constants";
import Menu from "./Menu";

export const ResCard = (props) =>{
    const {resData}=props;
    //console.log(resData.info);
    const {id,name, avgRating,cuisines,lastMileTravel,cloudinaryImageId,costForTwo,sla}=resData;
    const deliveryTime=sla.deliveryTime;
    const cuisineList= cuisines.join(", ");
    return (
        <div className="res-card">
            <img className="res-image" src={RES_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{avgRating} ⭐</h4>
            <h4>{lastMileTravel}</h4>
            <h4>{costForTwo}</h4>
            <h4>delivery in {deliveryTime} mins</h4>
            <h4>{cuisineList}</h4>
        </div>
    )
};
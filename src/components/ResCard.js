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
        <div className="m-4 p-4 w-[250px] bg-amber-100 rounded-lg shadow-lg hover:bg-amber-200 ">
            <img className="rounded-lg text-lg shadow-lg" src={RES_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-2">{name}</h3>
            <h4 className="inline-block bg-yellow-300 text-white px-2 py-1 rounded-full text-sm font-semibold mr-2">{avgRating} ⭐</h4>
            <h4 className="inline-block text-sm">{lastMileTravel}</h4>
            <h4 className="block font-medium">{costForTwo}</h4>
            <h4 className="block font-medium">delivery in {deliveryTime} mins</h4>
            <h4 className="text-gray-500 text-sm mt-2">{cuisineList}</h4>
        </div>
    )
};
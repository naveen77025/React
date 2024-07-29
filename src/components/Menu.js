import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import { RES_URL } from "../utils/constants";

const Menu= () => {
    const {resId}= useParams();
    const resInfo= useResMenu(resId);
    const {id,name,cuisines=[],costForTwoMessage,avgRating,locality,city,sla,totalRatingsString}= resInfo?.data?.cards[2]?.card?.card?.info || {};
    const cards= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    //console.log(cards);
    return (
        <div className="flex items-center flex-col">
            <div className="p-2 m-2 border border-solid border-[15px] rounded-xl border-grey w-[700px] shadow-xl">
                <h1 className="font-bold text-lg">{name}</h1>
                <p className="font-bold">⭐{avgRating} ({totalRatingsString}) . {costForTwoMessage}</p>
                <p className="text-red-500">{cuisines.join(", ")}</p>
                <p className="font-light">{locality}, {city}</p>
                <p>delivery in {sla?.deliveryTime} mins</p>
            </div>
            <div className="p-2 m-2 flex items-center flex-col w-[700px]">
                {   
                    cards.slice(1).map((item,index) =>  (
                        item?.card?.card["@type"]!=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"?
                        <ListItems key={index} titlesData={item?.card?.card}/>:
                        <Categories key={index} categoriesData={item?.card?.card} />
                    ))
                }
            </div>

        </div>
    );
};

const ListItems = (props) => {
    const { title, categories = [] } = props.titlesData;
    const [display,setDisplay]= useState(false);
    const updateDisplay=()=>{
        setDisplay(!display);
    }
    return (
        <div className="flex flex-wrap m-4 flex-col w-[700px]" onClick={()=>{
            updateDisplay()
        }}>
            <div className="flex justify-between">
            <h2 className="font-bold text-left text-xl">{title}</h2>
            {
                display?<span>➖</span>:<span>➕</span>
            }
            </div>
            {
                display && categories.map((item,index)=> <Categories key={index} categoriesData={item} />)
            }
        </div>
    )
};

const Categories = (props) => {
    const {title,itemCards=[]}=props.categoriesData;
    const [display,setDisplay]= useState(false);
    const updateDisplay=()=>{
        setDisplay(!display);
    }
    return (
        <div className="flex flex-wrap m-5 p-2 flex-col w-[700px] rounded-md shadow-md">
            <div className="text-left font-bold flex justify-between" onClick={()=>{
                updateDisplay()
            }}>
            <h3>{title}({itemCards.length})</h3>
            {
                display?<span>➖</span>:<span>➕</span>
            }
            </div>
            {
                display && itemCards.map(item=> <FoodItem key={item?.card?.info?.id} foodData={item?.card?.info}/>)
            }
        </div>
    )
}

const FoodItem = (props) => {
    const {name,price,ratings,imageId}=props.foodData;
    console.log(props.foodData)
    return (
        <div className=" flex justify-between p-2 m-2 rounded-md border-b-4 border-gray-400 bg-amber-50 hover:bg-amber-200">
            <div className="w-9/12">
                <h3 className="text-pretty font-bold">{name}</h3>
                <p>⭐{props.foodData.ratings.aggregatedRating.rating} ({props.foodData.ratings.aggregatedRating.ratingCountV2})</p>
                <h3>₹{price/100}</h3>
                <p className="font-light">{props.foodData.description}</p>
            </div>
            <div className="w-3/12">
                <img src={RES_URL+imageId} className="w-[150px] rounded-lg h-32 object-cover"/>
            </div>
        </div>
    )
};

export default Menu;
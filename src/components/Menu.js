import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const Menu= () => {
    const {resId}= useParams();
    const resInfo= useResMenu(resId);
    const {id,name,cuisines=[],costForTwoMessage,avgRating,locality,city,sla,totalRatingsString}= resInfo?.data?.cards[2]?.card?.card?.info || {};
    const cards= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    //console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    return (
        <div className="">
            <div className="p-2 m-2 border border-solid border-black w-[300px]">
                <h1>{name}</h1>
                <p>⭐{avgRating} ({totalRatingsString}) . {costForTwoMessage}</p>
                <p>{cuisines.join(", ")}</p>
                <p>{locality}, {city}</p>
                <p>delivery in {sla?.deliveryTime} mins</p>
            </div>
            <div className="p-2 m-2">
                {
                    cards.slice(1).map((item,index) =>  (
                        <ListItems key={index} titlesData={item?.card?.card}/>
                    ))
                }
            </div>

        </div>
    );
};

const ListItems = (props) => {
    const { title, categories = [] } = props.titlesData;
    return (
        <div className="flex flex-wrap ">
            <h1 className="font-bold ">{title}</h1>
            {
                categories.map((item,index)=> <Categories key={index} categoriesData={item} />)
            }
        </div>
    )
};

const Categories = (props) => {
    const {title,itemCards=[]}=props.categoriesData;
    return (
        <div className="flex">
            <h3 className="font-light">{title}</h3>
            {
                itemCards.map(item=> <FoodItem key={item?.card?.info?.id} foodData={item?.card?.info}/>)
            }
        </div>
    )
}

const FoodItem = (props) => {
    const {name,price,ratings}=props.foodData;
    return (
        <div className="p-2 m-2 bg-slate-200">
            <h3>{name}</h3>
            <h3>Rs.{price/100}</h3>
        </div>
    )
};

export default Menu;
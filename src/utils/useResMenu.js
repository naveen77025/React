import { useEffect, useState } from "react";

const useResMenu= (resId) =>{
    const [resInfo,setResInfo]= useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData =async () =>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3120407&lng=80.4319567&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const jsonData= await data.json();
        setResInfo(jsonData);
    }
    return resInfo;
};

export default useResMenu;
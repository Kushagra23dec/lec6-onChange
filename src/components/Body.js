import React, { useState } from "react";
import Card from "./Card";
import {restaurantList} from "../contants.js";
 
const Body = ()=>{
    const [restaurants,setRestaurants] = useState(restaurantList);
    const [searchtxt,setSearchtxt]  = useState("");
    
    function filterData(searchtxt){
        
        if(searchtxt === "" || searchtxt === " "){
             return restaurantList;
        }

       const data = restaurantList.filter((e)=>{
        return e.data.name.toLowerCase().includes(searchtxt.toLowerCase())
       })
        
        //  console.log(data);
         return data;
    
    }

    return(

        <div className="body-container">
 
        <div className="search-input-div">

        <input className="search-input" 
            type="text" placeholder="Search"
            value={searchtxt} onChange={
            (e)=>{   
            setSearchtxt(e.target.value)
            const data = filterData(e.target.value)
            setRestaurants(data);
             
            // console.log(data);
            }}  />
 
        </div>


            <div className="cards-collection-div">

            {restaurants.map((restaurant)=>{
                return(
                    <Card key={restaurant.data.id} {...restaurant.data} />
                );
            })}
             
            </div>
        </div>
    );
}

export default Body;
import { useState, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Root (){
  const fetchedColl = useLoaderData();
    const collectionsState = useState(fetchedColl); //[collectionsState,setCollections]
    const carState = useState([]);//[carItems, setCarItems]
    const userStatus = useState();//[userState, setUserState]

    const [carItems, setCarItems] = carState;
    

        
    function addItemToCart(item){
        console.log(item, 'add item to cart')
        setCarItems((prevItems) => {return [...prevItems, item]})
      }

    function removeCartItem(index){
        setCarItems(prevItems => prevItems.filter((item,i) => {return i!==index}))
      }

    // useEffect(()=>{ ??
    //     if(collectionsState){
    //       setRoutes(createRoutes())
    //     }
    //   },[collectionsState])
    return(
        <Outlet context={{collectionsState, carState, userStatus, cartEvents:{addItemToCart, removeCartItem}}}/>
    )
}
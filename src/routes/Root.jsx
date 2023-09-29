import { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Root (){
  const fetchedColl = useLoaderData();
    const collectionsState = useState(fetchedColl);
    const carState = useState([]);
    const userStatus = useState();

    const [carItems, setCarItems] = carState;
    

        
    function addItemToCart(item){
        setCarItems((prevItems) => {return [...prevItems, item]})
      }

    function removeCartItem(index){
        setCarItems(prevItems => prevItems.filter((item,i) => {return i!==index}))
      }

    return(
        <Outlet context={{collectionsState, carState, userStatus, cartEvents:{addItemToCart, removeCartItem}}}/>
    )
}
import { useState, useRef, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/NavbarPresentational";
import fetchCollections from "./components/fetchCollections";

import "./assets/main.css";
import "./assets/mainheader.css";
import "./assets/ranking.css";
import "./assets/slides.css";
import "./assets/homefooter.css";

import HomeFooter from "./components/HomeFooter";

import CollectionPage from "./routes/CollectionPage";
import "./assets/buypage.css";

import ItemPage from "./routes/ItemPage";
import "./assets/item-page.css";

import diamondGif from "./assets/diamond 3d.gif";
import targetIcon from "./assets/big target.png";
import checkIcon from "./assets/check-mark.svg";

import { getDataFromStorage, getDataFromFirestore } from "./data/firebase";
import { useEffect } from "react";
import MainContainer from "./components/MainContainer";
import RankingContainer from "./components/RankingContainer";
import NavBarContainer from "./components/NavbarContainer";
import SlidesContainer from "./components/SlidesContainer";
import UserCollectionsPresentational from "./routes/userCollections";

export const CollectionContext = createContext();
export const UserContext = createContext();

import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { v4 } from "uuid";

import AuthPresentational from "./components/ProfileFormPage";

function App() {
  // function setStorageItemAsFolder(arr, i) {
  //   for (let x = 0; x < arr.length; x++) {
  //     if (x === i) {
  //       arr[i] = arr[i] + "/";
  //       return arr;
  //     }
  //   }
  // }
  // const [collectionsState,setCollections] = useState();
  // const [carItems, setCarItems] = useState([]);
  // const [userState, setUserState] = useState();
  const [routesState, setRoutes] = useState();

  // useEffect(()=>{
  // fetchCollections({setCollections})
  // },[])

//   useEffect(()=>{
//     if(collectionsState){
//       setRoutes(createRoutes())
//     }
//   },[collectionsState])

//   function createRoutes(){
//     return collectionsState.map((collection,i)=>{
//       const url= (`/${collection.id}`);
//       return <Route path={url} element={<CollectionPage collection={collection} carItems={carItems} cartEvents={{addItemToCart,removeCartItem}} userState={userState} key={v4()}/>} />
//     })
//   }

// function addItemToCart(item){
//   console.log(item, 'add item to cart')
//   setCarItems((prevItems) => {return [...prevItems, item]})
// }

// function removeCartItem(index){
//   setCarItems(prevItems => prevItems.filter((item,i) => {return i!==index}))
// }
// https://reactrouter.com/en/main/start/tutorial#adding-a-router
  return (
    <>
    <CollectionContext.Provider value={collectionsState}>
    <UserCollectionsPresentational userState={userState}/>
  <NavBarContainer carItems={carItems} setCarItems={setCarItems} cartEvents={{addItemToCart, removeCartItem}} setUserState={setUserState} userState={userState}/>
  {/* <RankingContainer />
  <SlidesContainer categoryFilter={"Art"}/>
  <SlidesContainer title={"Gaming"} categoryFilter="Gaming"/> */}
    </CollectionContext.Provider>
    {/*<CollectionPage /> */}
    <UserContext.Provider value={userState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/test" element={<div>Test succeeded</div>} />
          {/* Create a route for each collec with a different link number  */}

          {routesState}
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
      {/* <MainContainer />  pass props to present 
      <fetchCollections collectionsState={collectionsState} setCollections={setCollections/>
      <HomeFooter /> */}
      {/* <Main
        mainData={mainData}
        launchDate={launchDate}
        setLaunchDate={setLaunchDate}
        diamondGif={diamondGif}
        targetIcon={targetIcon}
        checkIcon={checkIcon}
        countDownKey={countDownKey}
      /> */}
      {/* <Navbar />
      <Ranking rankingState={rankingState} setRankingState={setRankingState} checkIcon={checkIcon} pathStrFormatter={pathStrFormatter} />
      <Slides rankingState={rankingState} title={'traz state do ranking antes'} />
      <Slides rankingState={rankingState} />
      <Slides rankingState={rankingState} />
      <HomeFooter />
      <CollectionPage />

      <Navbar />
      <ItemPage /> */}
    </>
  );
}

export default App;

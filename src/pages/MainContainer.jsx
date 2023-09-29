import MainHeaderPresentational from "../components/MainHeaderPresentational";
import { useState, useEffect, useRef } from "react";
import { getDataFromFirestore, getDataFromStorage } from "../data/firebase";
import MainPresentational from "../components/MainPresentational";
import currentCountdown from "../utils/date";

const initialTime= {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

function TimeData(){
    const [launchDate, setLaunchDate] = useState(initialTime);
    const countDownKey = useRef();
  
    return {
      countDownKey,
      launchDate, 
      setLaunchDate,
      initialTime
    } 
  }
  
function ClearAndUpdateCountdown(countDownKey, mainData, setLaunchDate){
  
    useEffect(() => {
      clearInterval(countDownKey.current);
      if (mainData?.launchDate) {
        countDownKey.current = currentCountdown(
          mainData.launchDate,
          setLaunchDate
        );
      }
    }, [mainData]);
  }
  
function FetchAndSetSingleCollection (){
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [mainData, setMainData] = useState(null);
    useEffect(() => {
      fetchDataAndSet();
    }, [selectedCategory]);
  
    async function fetchDataAndSet() {
      const folder= "MainItem"
      try {
        const data = await getDataFromFirestore([
          folder,
          `${selectedCategory}`,
        ]);
          const imgs= await getImages(data);
          setMainData({ ...data, ...imgs});
        }
       catch (e) {
        console.log(e);
      } 
    }
  
    const handleCheck = (e) => {
        setSelectedCategory(e.target.value);
      };
  
    const pathStrFormatter = (path) => {
    return path.slice(2);
    }
    const getImages = async (data) => {
          
      if (data.bgPath && data.iconPath) {
        const imgs = await Promise.all([
          getDataFromStorage(pathStrFormatter(data.bgPath)),
          getDataFromStorage(pathStrFormatter(data.iconPath)),
          ]);
          return {imgBg: imgs[0], imgIcon: imgs[1]}}
          else {
            alert("Missing images");
          }}
  
          return {mainData, selectedCategory, handleCheck}
  }

 export default function MainHeaderContainer () {
  const results=FetchAndSetSingleCollection();
  const time= TimeData();
  ClearAndUpdateCountdown(time.countDownKey, results.mainData, time.setLaunchDate)
  return <>
  <MainHeaderPresentational handleCheck={results.handleCheck} selectedCategory={results.selectedCategory}/>
  <MainPresentational {...time} mainData={results.mainData}/>
  </>
 }
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect, useRef } from "react";
import currentCountdown from "../utils/date";
import { getDataFromFirestore, getDataFromStorage } from "../data/firebase";
 
// const initialTime= {
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   }

// export default function TimeData(){
//   const [launchDate, setLaunchDate] = useState(initialTime);
//   const countDownKey = useRef();

//   return {
//     countDownKey,
//     launchDate, 
//     setLaunchDate,
//     initialTime
//   } 
// }

// export default function ClearAndUpdateCountdown(countDownKey, mainData){

//   useEffect(() => {
//     clearInterval(countDownKey.current);
//     if (mainData?.launchDate) {
//       countDownKey.current = currentCountdown(
//         mainData.launchDate,
//         setLaunchDate
//       );
//     }
//   }, [mainData]);
// }

// export default function FetchSingleCollection (){
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [mainData, setMainData] = useState(null);
//   useEffect(() => {
//     fetchDataAndSet();
//   }, [selectedCategory]);

//   async function fetchDataAndCheckifImagesAndSet() {
//     const folder= "MainItem"
//     try {
//       const data = await getDataFromFirestore([
//         folder,
//         `${selectedCategory}`,
//       ]);
//         setMainData({ ...data, ...getImages()});
//       }
//      catch (e) {
//       console.log(e);
//     } 
//   }

//   const handleCheck = (e) => {
//       setSelectedCategory(e.target.value);
//     };

//   const pathStrFormatter = (path) => {
//   return path.slice(2);
//   }
//   const getImages = async () => {
        
//     if (data.bgPath && data.iconPath) {
//       const imgs = await Promise.all([
//         getDataFromStorage(pathStrFormatter(data.bgPath)),
//         getDataFromStorage(pathStrFormatter(data.iconPath)),
//         ]);
//         return {imgBg: imgs[0], imgIcon: imgs[1]}}
//         else {
//           alert("Missing images");
//         }}

//         return {mainData, selectedCategory, handleCheck}
// }

// export default function MainHeaderPresentational({selectedCategory, handleCheck}) {

//   return (
//     <header className="landing-categories">
//       <Swiper
//         slidesPerView="auto"
//         spaceBetween={16}
//         className="landing-categories__ul"
//       >
//         <SwiperSlide>
//           <li className="categories__li">
//             <input
//               type="radio"
//               name="landing-category"
//               id="landing-category1"
//               className="category-radio"
//               onChange={handleCheck}
//               checked={selectedCategory === "All"}
//               value="All"
//             />{" "}
//             <label htmlFor="landing-category1" className="category-label">
//               All
//             </label>
//           </li>
//         </SwiperSlide>
//         <SwiperSlide>
//           <li className="categories__li">
//             <input
//               type="radio"
//               name="landing-category"
//               id="landing-category2"
//               className="category-radio"
//               onChange={handleCheck}
//               checked={selectedCategory === "Art"}
//               value="Art"
//             />{" "}
//             <label htmlFor="landing-category2" className="category-label">
//               Art
//             </label>
//           </li>
//         </SwiperSlide>
//         <SwiperSlide>
//           <li className="categories__li">
//             <input
//               type="radio"
//               name="landing-category"
//               id="landing-category3"
//               className="category-radio"
//               onChange={handleCheck}
//               checked={selectedCategory === "Gaming"}
//               value="Gaming"
//             />{" "}
//             <label htmlFor="landing-category3" className="category-label">
//               Gaming
//             </label>
//           </li>
//         </SwiperSlide>
//         <SwiperSlide>
//           <li className="categories__li">
//             <input
//               type="radio"
//               name="landing-category"
//               id="landing-category4"
//               className="category-radio"
//               onChange={handleCheck}
//               checked={selectedCategory === "Memberships"}
//               value="Memberships"
//             />{" "}
//             <label htmlFor="landing-category4" className="category-label">
//               Memberships
//             </label>
//           </li>
//         </SwiperSlide>
//         <SwiperSlide>
//           <li className="categories__li">
//             <input
//               type="radio"
//               name="landing-category"
//               id="landing-category0"
//               className="category-radio"
//               onChange={handleCheck}
//               checked={selectedCategory === "PFPs"}
//               value="PFPs"
//             />{" "}
//             <label htmlFor="landing-category0" className="category-label">
//               PFPs
//             </label>
//           </li>
//         </SwiperSlide>
//         <SwiperSlide>
//           <li className="categories__li">
//             <input
//               type="radio"
//               name="landing-category"
//               id="landing-category5"
//               className="category-radio"
//               onChange={handleCheck}
//               checked={selectedCategory === "Photography"}
//               value="Photography"
//             />{" "}
//             <label htmlFor="landing-category5" className="category-label">
//               Photography
//             </label>
//           </li>
//         </SwiperSlide>
//       </Swiper>
//     </header>
//   );
// }

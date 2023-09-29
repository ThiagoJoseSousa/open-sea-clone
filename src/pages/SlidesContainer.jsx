import SingleSlidePresentational from "../components/SingleSlidePresentational";
import SlidesWrapper from "../components/SlidesWrapper";
import '../assets/style/slides.css'
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { v4 } from "uuid";

export default function SlidesContainer({title ,categoryFilter}){

    const [collectionsSlides, setCollectionsSlides] = useState();
    const {collectionsState} = useOutletContext();
    const collections = collectionsState[0];

    useEffect(()=>{
      setCollectionsSlides(getSlides());
    },[collections])
  
    function getSlides() {
      if (collections && categoryFilter){
        return collectionsToSlides(filterCollections(categoryFilter));
      }
      if (collections){
        return collectionsToSlides(collections);
      }

      }

      function filterCollections (categoryFilter){
         return collections.filter(collectionData => collectionData.category === categoryFilter)
      }

      function collectionsToSlides(collections){
        return collections.map((collectionData)=>{
          return <SingleSlidePresentational collectionData={collectionData} key={v4()} />
        })
      }

      return <SlidesWrapper collectionsSlides={collectionsSlides} title={title} categoryFilter={categoryFilter} />
    }
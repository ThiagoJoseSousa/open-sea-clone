import { CollectionContext } from "../App";
import SingleSlidePresentational from "./SingleSlidePresentational";
import SlidesWrapper from "./SlidesWrapper";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { v4 } from "uuid";

export default function SlidesContainer({title ,categoryFilter}){

    const [collectionsSlides, setCollectionsSlides] = useState();
    const {collectionsState} = useOutletContext();
    const collections = collectionsState[0];

    useEffect(()=>{
      setCollectionsSlides(getSlides()); //should build from main item, rankingstate is limited to 10
    },[collections])
  
    function getSlides() {
      // the func would be better if it just checks and evokes the func that maps over array, being the map func separate
      // like collectionsToSlides(){if (collections) do this, if collections && categoryFilter do that}
      if (collections && categoryFilter){
        return collectionsToSlides(filterCollections(categoryFilter));
      }
      if (collections){
        return collectionsToSlides(collections);
      }

      }

      //mudar o algoritmo do collectionstoslides, filtrar antes de mapear 
      //collections.data.map if (category===category) return collectionDATA
      // above arr return single slide PResentantional map
      function filterCollections (categoryFilter){
         return collections.filter(collectionData => collectionData.category === categoryFilter)
      }
      //function CollectionsToSlides will return the presentational

      function collectionsToSlides(collections){
        return collections.map((collectionData)=>{
          console.log(collectionData, 'why index 0 undefined? install uuid?');
          return <SingleSlidePresentational collectionData={collectionData} key={v4()} />
        })
      } // if not undefined pass as props

      return <SlidesWrapper collectionsSlides={collectionsSlides} title={title} categoryFilter={categoryFilter} />
      //return <SlidesWrapper {...props}/>
  }
  
  // const props= {
  //   collectionsSlides:collectionsSlides, 
  //   title:collections===undefined ? undefined : collections.title.title,
  //   categoryFilter:"Art"
  // }
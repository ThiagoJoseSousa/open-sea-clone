import { useState, useEffect } from "react";
import RankingPresentational from "./RankingPresentational";
import checkIcon from '../assets/check-mark.svg';
import { Link, useOutletContext } from "react-router-dom";
import { v4 } from "uuid";

function CreateRankingItemJSX ({itemData, i}) { return (
  <div className="ranking__results-item" key={i}>
      <div className="ranking__results-item-column ranking__results-item-left">
        <div className="ranking__results-text">{i + 1}</div>
        <div>
        <Link to={"/Collections/" + itemData.id} className="anchor-styleless">
          <img src={itemData.img} className="ranking__results-icon" />
        </Link>
        </div>
      <Link to={"/Collections/" + itemData.id} className="anchor-styleless">
        <div className="ranking__results-text">
          {itemData.title.title}{" "}
          {itemData.title.check && <img src={checkIcon} />}
        </div>
      </Link>
      </div>
      <div className="ranking__results-item-right ranking__results-item-column ">
        <div>{itemData.floorPrice}</div>
      </div>
      <div className="ranking__results-item-right ranking__results-item-column ">
        <div>{itemData.volume}</div>
      </div>
    </div>
  );
}

export default function RankingContainer(){

    const [itemSortState, setItemSortState] = useState("owners");
    const [rankingState, setRankingState] = useState();
    const {collectionsState} = useOutletContext();
    const collections = collectionsState[0];
    console.log(collections);
    // useEffect(() => {
    // createItemList();
    // }, [itemSortState]);
  
    // const createItemList = async () => {
    //   const querySnapshot = await getFirestoreDocs();
    //   const allImagesArr = await Promise.all(
    //     sortedArr.map((item) =>  item.img ? getDataFromStorage(pathStrFormatter(item.img)) : 'no img' )
    //     );
  
    // const collectionsArr = queryToArr(querySnapshot);
    // const sortedArr = sortItemsByGreatest(collectionsArr, itemSortState);
    // const sortedAndImagedArr = sortedArr.map((item, i) => {
    //   item.img = allImagesArr[i];
    //   return item;
    // });

    useEffect(
      ()=>{
        if (collections){
        console.log("collections not empty", collections);
        const sortedArray = sortItemsByProperty(collections, itemSortState);
        const jsxArray = sortedArray.map((item, position) => <CreateRankingItemJSX itemData={item} i={position} key={v4()} />);
        const dividedArr = divideArrIntoTwo(jsxArray);
        
        setRankingState((prevState) => ({
          ...prevState,
          left: dividedArr.leftArr,
          right: dividedArr.rightArr,
        }));
      }},[collections,itemSortState]
    )
      
    function divideArrIntoTwo(renderedArr) {
      const leftArr = [];
      const rightArr = [];
      for (let i = 0; i < 5; i++) {
        leftArr.push(renderedArr[i]);
      }
      for (let i = 5; i < 10; i++) {
        rightArr.push(renderedArr[i]);
      }
      return { leftArr, rightArr };
    }

    function sortItemsByProperty(collectionsArr , sortingProperty) {
      for (let i = 0; i < collectionsArr.length; i++) {
        for (let y = i; y < collectionsArr.length; y++) {
          if (collectionsArr[y][sortingProperty] > collectionsArr[i][sortingProperty]) {
            const saveValue = collectionsArr[i];
            collectionsArr[i] = collectionsArr[y];
            collectionsArr[y] = saveValue;
          }
        }
      }
      return collectionsArr;
    }
  
    return <RankingPresentational rankingState={rankingState} itemSortState={itemSortState} setItemSortState={setItemSortState}/>
  }

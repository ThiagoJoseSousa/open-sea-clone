//collectionState will be shared to ranking and slides, which will have logic, but a shared parent.
import { getFirestoreDocs, getDataFromStorage } from "../data/firebase";


export default function fetchCollections ({itemSortState="owners"}){

    // const [itemSortState, setItemSortState] = useState("owners");

    // useEffect(() => {
        
        // }, [itemSortState]);

    const createItemList = async () => {
    const querySnapshot = await getFirestoreDocs(["Collections"]);
    const collectionsArr = queryToArr(querySnapshot);
    const allImagesArr = await Promise.all(
      collectionsArr.map((item) =>  item.img ? getDataFromStorage(item.img) : 'no img' )
      );
      //there's no img in firebase
      
  const sortedAndImagedArr = collectionsArr.map((item, i) => {
    item.img = allImagesArr[i];
    return item; 
  });
  return sortedAndImagedArr
}
return createItemList();
}

export function queryToArr(querySnapShot){
  const collectionsArr = [];
  querySnapShot.forEach((doc) => {
    collectionsArr.push({...doc.data(), id:doc.id});
  });
  return collectionsArr;
}


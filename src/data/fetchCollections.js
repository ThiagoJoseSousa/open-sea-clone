import { getFirestoreDocs, getDataFromStorage } from "./firebase";


export default function fetchCollections ({itemSortState="owners"}){

    const createItemList = async () => {
    const querySnapshot = await getFirestoreDocs(["Collections"]);
    const collectionsArr = queryToArr(querySnapshot);
    const allImagesArr = await Promise.all(
      collectionsArr.map((item) =>  item.img ? getDataFromStorage(item.img) : 'no img' )
      );
      
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


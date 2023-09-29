import headerBG from "../assets/buy page header.jpg";
import menuDot from "../assets/menu-dot-horizontal-filled.svg";
import shareIcon from "../assets/share.svg";
import filterIcon from "../assets/filter.svg";
import sortIcon from "../assets/sort.svg";
import marketIcon from "../assets/shopping-cart.png";

import { createOrUpdateDoc, getDataFromStorage, getFirestoreDocs, uploadImageToStorage } from "../data/firebase";
import { useEffect, useState, useRef, useContext } from 'react';
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom";

import { queryToArr } from "../components/fetchCollections";
import { FormNotification, mapOptions, readImage, retrieveInputDataAndValidate } from "./userCollections";

import { validationFuncs} from "./userCollections";
import { UserContext } from "../App";
import ErrorPage from "../error-page";
import { v4 } from "uuid";
//refactor

//CollectionContainer

function findCollection({collectionsState, title}){
  let item;
  for (let i=0; i<collectionsState.length; i++){
    if(collectionsState[i].id === title){
      item=collectionsState[i]
    }
  }
  return item
}

export default function CollectionContainer() {
  const {collectionsState,cartEvents} = useOutletContext();
  const {title} = useParams();

  const collection = findCollection({collectionsState: collectionsState[0], title})
  if(!collection) {
    return <ErrorPage />
  }

  const [itemsState, setItemsState] = useState()

  useEffect(
     ()=> {
      async function setItems(){
        const itemsWithImage = await getCollectionItems(title);
        setItemsState(itemsWithImage)
      }
      setItems()
    //   function getCollectionItems(){

    //     let itemsArray;
    //     getFirestoreDocs(["Collections",title,"/Items"]).then((data)=> {
    //      itemsArray = queryToArr(data);
        
    //      }).then(()=>{
    //       Promise.all(itemsArray.map((item)=>{
    //       return item.img ? getDataFromStorage(item.img) : 'no img';
    //     }
    //     )).then((allImagesArr)=>{
    //       const sortedAndImagedArr = itemsArray.map((item, i) => {
    //         return {...item, img:allImagesArr[i]}; 
            
            
    //       });
    //       setItemsState(sortedAndImagedArr)
          
    //     });
    //   })
    // }


     },[]
 )
     return <CollectionPresentational collectionInfo={collection} cartEvents={cartEvents} itemsState={itemsState}/>
}

       async function getCollectionItems(title){

         

         //const items = await get...
        const items = await getFirestoreDocs(["Collections",title,"/Items"]);
        const itemsArray = queryToArr(items);
        const imagesArray = await Promise.all(itemsArray.map((item)=>{
          return item.img ? getDataFromStorage(item.img) : 'no img';
        }));
        const itemsWithImage = itemsArray.map((item, i) => {
          return {...item, img:imagesArray[i]}; 
        })
        //  getFirestoreDocs(["Collections",title,"/Items"]).then((data)=> {
        //   itemsArray = queryToArr(data);
        //  //const retrievedImages =
        //   }).then(()=>{
        //    Promise.all(itemsArray.map((item)=>{
        //    return item.img ? getDataFromStorage(item.img) : 'no img';
        //  }
        //  // itemsWithImage
        //  )).then((allImagesArr)=>{
        //    const sortedAndImagedArr = itemsArray.map((item, i) => {
        //      return {...item, img:allImagesArr[i]}; 
            
            return itemsWithImage
        }

function CollectionPresentational ({collectionInfo,  itemsState, cartEvents}){
  const [itemsCards, setItemsCards] = useState();
  const {userStatus} = useOutletContext();
  const currentUser = userStatus[0];  
  useEffect(
    ()=>{
  function createAllCards(){
    return itemsState.map((item)=>{
      return <ItemCard item={item} cartEvents={cartEvents} key={v4()}/>
    })
  }
  if (itemsState) {setItemsCards(createAllCards())};

},[itemsState])

  return (
    <main className="buypage__main">
      
      
      {/*PS:there is an wrapper now, may bug style.  */}
      <CollectionHeader collectionImg={collectionInfo.img}/>
        <CollectionInfoPresentational collectionInfo={collectionInfo}/>
        <CollectionNavigationPresentational />

        <div className="collection-padding">
          <div className="live">
            <div className="live-circle">●</div>
            <span className="semi-bold unhighlighted-words">Live</span>
            <span className="unhighlighted-words results-number">
              6954 results
            </span>
        </div>
        </div>
        <section className="main__header-collection-products collection-padding">
          {itemsCards}
          {currentUser?.email===collectionInfo.email ? <PostCardContainer /> : "Creator? Connect to post more!"}
        </section>

    </main>
  );
}
function CollectionHeader({collectionImg}){
  return <>
  <div className="main__header-bg">
        <img src={collectionImg} alt="" className="main__header-bg-img" />
      </div>

      <div className="main__header-collection">
        <div className="main__header-collection-img-wrapper">
          <img src={collectionImg} alt="" className="main__header-collection-img" />
        </div>
        <button className="main__header-collection-btn cursor-pointer">
          <img
            src={shareIcon}
            alt=""
            className="main__header-collection-btn-img"
          />
        </button>
        <button className="main__header-collection-btn cursor-pointer">
          <img
            src={menuDot}
            alt=""
            className="main__header-collection-btn-img"
          />
        </button>
      </div>
  </>
}

function PostCardContainer (){
  const [formState, setFormState] = useState({coin:"ETH"});
  const [notificationState, setNotification] =  useState();
  const [messageState, setMessagesState]= useState();
  const imageRef= useRef();
  const rulesRef =useRef({rarity:{minLength:0, maxLength:10}, price:{minLength:0, maxLength:5}});
  return (
    <>
  <form className="product__card product-info__wrapper--submit">
  <div className="product-info__wrapper product-info__wrapper--submit">

    <h4 className="semi-bold semi-bold-large">Image</h4>
    <input onChange={async (e)=>{
      const {filePath, fileData} = await readImage(e.target.files[0]);
      imageRef.current=fileData;
      setFormState(prevState => {return {...prevState, img:filePath}});
      setMessagesState(" ✔️ File selected!")
    }} type="file" required accept="image/png, image/jpeg" className="image-input" id="item__image"/>
    <label htmlFor="item__image" className="buy-btn buy-btn--file">Upload image</label>
    {messageState}
{/* 
    <div className="form__item-wrapper form__item-wrapper--card">
    <h4 className="semi-bold semi-bold-large">Name</h4>
    <input onChange={(e)=>{
      //refatorar collectionitem onChange p deixar a funcao publica
      //validation pode ser aquelas abinhas, mas em :focus
    retrieveInputDataAndValidate({e,setFormState, subheader:"name",setMessage:setMessagesState, rulesObj:rulesRef.current})
    }}type="text" maxLength={rulesRef.current.maxLength} className="collection-creation__item-input" placeholder="name" name="name" id="" />
    {messageState}
    </div> */}

    
    {/* <h4 className="semi-bold semi-bold-large">Quantity</h4>
    <div className="form__item-wrapper form__item-wrapper--card">
    <input onChange={(e)=>{
      retrieveInputDataAndValidate({e,setFormState, subheader:"rarity",setMessage:setMessagesState, rulesObj:null})
    }} type="number" className="collection-creation__item-input" placeholder="quantity" name="rarity" id="" />
    {messageState}
    </div> 
    setFormState, subheader,inputType, rulesObj 
    */}

    <ItemInput inputType={"text"} setFormState={setFormState} subheader={"name"} rulesObj={rulesRef.current.rarity}/>
    <ItemInput inputType={"number"} setFormState={setFormState} subheader={"quantity"} rulesObj={rulesRef.current.rarity}/>
    <PriceInput inputType={"number"} setFormState={setFormState} subheader={"Price"} rulesObj={rulesRef.current.price} options={["ETH", "AVAX", "BNB", "KLAY", "SOL"]}/>
  </div>
    <button className="product__buy-bar product__buy-bar--submit buy-btn" onClick={(e)=>{
      e.preventDefault()
      if (checkIfFilled(formState, setNotification)){

        const url=window.location.href; // or use the ref
        const collection= url.split('/')[3];
        const arrFirestorePath = ["Collections", collection, "Items", formState.name]
        createOrUpdateDoc(arrFirestorePath, formState);
        setNotification("✔️ Your collection was created!") 
        uploadImageToStorage(formState.img, imageRef.current);
      }
      //geturl
    }}>
      SUBMIT
      </button>
  </form>
  {notificationState && <FormNotification notificationState={notificationState}/>}
  </>
  )
}

function checkIfFilled(formState,setNotification){
  const {coin, img, name, price, quantity} = formState;
  if  (!coin || !img || !name || !price || !quantity)
   {setNotification(prevState => prevState==='❌ Non-filled input!' ? '❌ An Input was not filled!' : '❌ Non-filled input!' ); return false}
   setNotification('✔️ Valid form, trying to submit!');
   return true;
}

function ItemInput ({inputType, setFormState, subheader, rulesObj}){
  const [messageState, setMessagesState] = useState();
  return <div className="form__item-wrapper form__item-wrapper--card">
  <h4 className="semi-bold semi-bold-large">{subheader}</h4>
  <input onChange={(e)=>{
    //refatorar collectionitem onChange p deixar a funcao publica
    //validation pode ser aquelas abinhas, mas em :focus
  if (validationFuncs[inputType](e.target,setMessagesState)){
    retrieveInputDataAndValidate({e,setFormState, subheader, setMessagesState, rulesObj})
  }
  }} type="text" {...rulesObj} className="collection-creation__item-input" placeholder={subheader} name="name" id="" />
  {messageState}
  </div>
}

function PriceInput({inputType, setFormState, subheader, options,rulesObj }){
  const [messageState, setMessagesState] = useState();
  const [optionsState, setOptionsState] = useState(mapOptions(options))
  useEffect(()=>{
    setFormState((prevState)=> {
      return {...prevState, coin:optionsState[0].props.value}
    })
  },[optionsState])
  return <>
      <h4 className="semi-bold semi-bold-large">{subheader}</h4>
    <div className="form__item-money">
    <div className="form__item-wrapper">
    <input onChange={(e)=>{
        if (validationFuncs[inputType](e.target,setMessagesState)){
          retrieveInputDataAndValidate({e,setFormState, subheader, setMessagesState, rulesObj})
        }
    }}type="text" className="collection-creation__item-input" placeholder={subheader} {...rulesObj} name="price" id="" />
    {messageState}
    </div>
    <div className="form__item-wrapper">

    <select onChange={(e)=>{
      setFormState((prevState)=> {
        return {...prevState, coin:e.target.value}
      })
    }} className="collection-creation__item-input">
      {optionsState}
    </select>
    </div>
    </div></>
}

//collectionitem validate too

function ItemCard ({item,i,cartEvents}) {
  console.log('item card', item.item)
  return (<article className="product__card">
    <Link to={location.href + '/' + item.name} className="anchor-styleless">
  <div className="product-container">
    <img src={item.img} id="test" />
  </div>
  <div className="product-info__container"><div className="product-info__wrapper">
    <div className="semi-bold product-info-title">
      <span className="text-dots">{item.name}</span>
      <span className="product-info-number"># {item.rarity}</span>
    </div>
    <div className="semi-bold">
      <span>{item.price} {item.coin}</span>
    </div>
  </div>
  </div>
    </Link>
  <div className="product__buy-bar">
    <span>Buy now</span>
    <span className="product__buy-car" onClick={() => {cartEvents.addItemToCart(item)}}>
      <img src={marketIcon} className="item-counts-img" alt="" />
    </span>
  </div>
</article>)
}

function CollectionInfoPresentational({collectionInfo}){  
  const [seeMore, setSeeMore] = useState (true);
  return <div className="collection-padding collection-gap">
  <div className="main__data-title">
    <h1>{collectionInfo.title.title}</h1>
  </div>
  <div className="main__data-subtitle">
    By <span className="semi-bold ">{collectionInfo.creator}</span>
  </div>

  <div>
    <div className="main__header-collection-info">
      <div className="main__header-collection-info-item">
        <span>Items </span>
        <span className="semi-bold ">{collectionInfo.items}</span>
      </div>
      <div className="main__header-collection-info-item">
        <span>Earnings </span>
        <span className="semi-bold ">{collectionInfo.earnings}%</span>
      </div>
      <div className="main__header-collection-info-item">
        <span>Category </span>
        <span className="semi-bold ">{collectionInfo.category}</span>
      </div>
      <div className="main__header-collection-info-item">
        <span>Created </span>
        <span className="semi-bold ">{collectionInfo.date}</span>
      </div>
      <div className="main__header-collection-info-item">
        <span>Chain </span>
        <span className="semi-bold ">Ethereum</span>
      </div>
    </div>
  </div>
  <div className="main__header-collection-description">
    <div className={seeMore? "main__header-collection-description-closed" : "main__header-collection-description-opened"}>
      {collectionInfo.paragraphs?.map(item => <p key={v4()}>{item}</p>)}
      <p>
        Learn more about the {collectionInfo.title.title}:{" "}
        <a href="#">
          https://{collectionInfo.creator}.com/
        </a>
      </p>
      <p>
        Learn more about {collectionInfo.creator}:{" "}
        <a href="#">https://{collectionInfo.creator}.com/</a>
      </p>
    </div>
    <input type="checkbox" id="seemore-btn" defaultChecked={seeMore} />
    <label
      htmlFor="seemore-btn"
      className={"main__header-collection-description-show cursor-pointer "}
      onClick={() => {setSeeMore(prevState=> !prevState)}}
    >
      {`See ${seeMore ? 'more ↓': 'less ↑' }`}
    </label>
  </div>
  <div>
    <div className="main__header-collection-data-wrapper">
      <div className="main__header-collection-data-column">
        <span className="semi-bold  semi-bold-large">{collectionInfo.volume}</span>
        <span>total volume</span>
      </div>

      <div className="main__header-collection-data-column">
        <span className="semi-bold semi-bold-large">{collectionInfo.floorPrice || collectionInfo['floor price'] }</span>
        <span>floor price</span>
      </div>

      <div className="main__header-collection-data-column">
        <span className="semi-bold semi-bold-large">{collectionInfo.floorPrice || collectionInfo['floor price'] }</span>
        <span>best offer</span>
      </div>

      <div className="main__header-collection-data-column">
        <span className="semi-bold semi-bold-large">100%</span>
        <span>listed</span>
      </div>

      <div className="main__header-collection-data-column">
        <span className="semi-bold semi-bold-large">{collectionInfo.owners}</span>
        <span>owners</span>
      </div>

      <div className="main__header-collection-data-column">
        <span className="semi-bold semi-bold-large">--</span>
        <span>unique owners</span>
      </div>
    </div>
  </div>
</div>
}

function CollectionNavigationPresentational(){
  const [nav, setNav] = useState('Items');
  return <div className="collection-padding collection-gap">
  <nav>
      <ul className="main__section-nav">
        <li className="semi-bold semi-bold-large">
          <input
            type="radio"
            name="section-choice"
            id="section-choice-items"
            defaultChecked={ nav==="Items" ? true : false}
          />
          <label htmlFor="section-choice-items" onClick={()=> {
            setNav('Items')
          }}>Items</label>
        </li>
        <li className="semi-bold semi-bold-large">
          <input
            type="radio"
            name="section-choice"
            id="section-choice-offers"
            defaultChecked={ nav==="Offers" ? true : false}
            onClick={()=> {
              setNav('Offers')
            }}
          />
          <label htmlFor="section-choice-offers">
            Offers<span className="beta">BETA</span>
          </label>
        </li>
        <li className="semi-bold semi-bold-large">
          <input
            type="radio"
            name="section-choice"
            id="section-choice-analytics"
            defaultChecked={ nav==="Analytics" ? true : false}
            onClick={()=> {
              setNav('Analytics')
            }}
          />
          <label htmlFor="section-choice-analyti  cs">Analytics</label>
        </li>
        <li className="semi-bold semi-bold-large">
          <input
            type="radio"
            name="section-choice"
            id="section-choice-activity"
            defaultChecked={ nav==="Activity" ? true : false}
          />
          <label htmlFor="section-choice-activity"
          onClick={()=> {
            setNav('Activity')
          }}>Activity
          </label>
        </li>
      </ul>
      <hr />
    </nav>
    <div className="main__header-collection-products-search">
      <div className="main__header-collection-products-live">
        <button className="main__header-btn cursor-pointer">
          <img src={filterIcon} className="main__header-icon" />
        </button>
      </div>
      <div className="full-width">
        <input
          type="text"
          name=""
          id="collection-products-search-input"
          placeholder="🔎 Search by name or trait"
        />
      </div>
      <div>
        <button className="main__header-btn cursor-pointer">
          <img src={sortIcon} className="main__header-icon" />
        </button>
      </div>
    </div>
  </div>
}
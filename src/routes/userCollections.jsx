import { useState, useRef, useEffect, useContext, createContext } from "react"
import { createOrUpdateDoc, uploadImageToStorage } from "../data/firebase";
import SlidesContainer from "../pages/SlidesContainer";
import { useOutletContext } from "react-router-dom";
import { v4 } from "uuid";

import '../assets/style/userCollections.css'

const messagesObj={
    title:"It's the first title the user will see from your arts. ",
    creator:"The author or group that created all the arts inside this collection.",
    image:"It's the first image the user will see from your arts.",
    floorPrice:"It's the cheapest price for an item from your collection.",
    volume:"Total money gathered from this collection.",
    category:"category is selected.",
    earnings:"How much in percentage does the creator earn minus the expenses?",
    owners:"How many people own art from this collection?",
    items:"How many items this collection have?",
    
}
const CollectionContext= createContext();

const categories= ["Gaming", "Art", "Memberships", "Music", "PFPs", "Photography"]
export const validationFuncs = {
    text:function blockNonLetters(input, setMessagesState){
    const lastInput = input.value[input.value.length-1];
    if (!parseInt(lastInput)){
      return lastInput
    }
    setMessagesState("❌ Type a letter!")
    input.value = lastInput.slice(0, lastInput.length-1)
    return false;
  }, 
    number:function blockNonNumbers(input,setMessagesState){
    const lastInput = input.value[input.value.length-1];
    if (lastInput==='.'){
      return lastInput
    }
    const numberInt= parseInt(lastInput,10);
    if(numberInt || numberInt===0)
    {return numberInt}
    setMessagesState("❌ Type either \".\" or a number!")
    input.value = lastInput.slice(0, lastInput.length-1)
    return false;
  }
  }
export default function UserCollectionsPresentational (){

    const {userStatus, collectionsState} = useOutletContext();
    const [userState, setUserState] = userStatus;
    const [allCollections, setCollections] = collectionsState;

    return (
        <div className="collection-creation">
            <PrevCollContainer userEmail={userState?.email}/>

            {userState && <FormContainer userEmail={userState?.email}/>}
        </div>
    )
}

function FormContainer({userEmail}){
    const [messagesState, setMessagesState] = useState(messagesObj);
    const [formState, setFormState] = useState({})
    const [notificationState, setNotification] = useState(); 
    const imageRef= useRef();
    const rulesRef= useRef({title:{minLength:4, maxLength:7}, 
        floorPrice:{min:0, max:10, step:0.001},
        earnings:{min:0, max:100, step:0.1},
        owners:{min:0} });
    return (<section className="creation-form">
    <header className="creation-form__header">
        <h3>Create your collection</h3>
        <span>You're almost there!</span>
    </header>
    <hr className="hr-paddingless"/>
    <form className="collection-creation__form">

    <CollectionItem inputInfo={{subheader:"Title", setFormState}} validationInfo={{message:messagesState.title, inputType:"text", rulesObj:rulesRef.current.title}}/>
    <CollectionItem inputInfo={{
        subheader:"Creator", setFormState
    }} 
    validationInfo={{
       message:messagesState.creator, inputType:"text", rulesObj:{}
    }}/>
    <UploadImage subheader={"Load image"} setFormState={setFormState} imageRef={imageRef}/>
    <CollectionItem inputInfo={{
        subheader:"Floor Price", setFormState
    }} 
    validationInfo={{
       message:messagesState.floorPrice, inputType:"number",rulesObj:rulesRef.current.floorPrice
    }}/>
    <CollectionItem inputInfo={{
        subheader:"Volume", setFormState
    }} 
    validationInfo={{
       message:messagesState.volume, inputType:"number",rulesObj:rulesRef.current.volume
    }}/>
    <CollectionItemSelect subheader={"Choose a category: "} options={categories} setFormState={setFormState}/>
    <CollectionItem inputInfo={{
        subheader:"Earnings", setFormState
    }} 
    validationInfo={{
       message:messagesState.earnings, inputType:"number", rulesObj:rulesRef.current.earnings
    }}/>
    <CollectionItem inputInfo={{
        subheader:"Owners", setFormState
    }} 
    validationInfo={{
       message:messagesState.owners, inputType:"number", rulesObj:rulesRef.current.owners
    }}/>
    <CollectionItem inputInfo={{
        subheader:"Items", setFormState
    }} 
    validationInfo={{
       message:messagesState.items, inputType:"number", rulesObj:rulesRef.current.owners
    }}/>
    <CollectionDescription setFormState={setFormState}/>
    <button className="buy-btn" onClick={(e) => submitForm(e,formState,setNotification, imageRef, userEmail)}>SUBMIT</button>
    </form>
    
    {notificationState && <FormNotification notificationState={notificationState}/>}
</section>)
}

function PrevCollContainer ({userEmail}){
    const allCollections = useContext(CollectionContext);
    const [myCollections, setMyCollections] = useState(undefined);
    useEffect(()=>{
        if (allCollections){
            setMyCollections(filterByEmail(allCollections,userEmail))
        }
    },[setMyCollections,allCollections])
    return (
    <CollectionContext.Provider value={myCollections}>
        <SlidesContainer title={userEmail ? "Created collections (click to edit):" : "Connect first!"} />
    </CollectionContext.Provider>
    )
}

function CollectionDescription({setFormState}){
    return (
    <div>  
    <h4 className="form__h4">Description</h4>
    <textarea className="collection-creation__input-description" onChange={(e)=>{setFormState(prevState => {const newState={...prevState};
    newState.description=e.target.value;
    return newState})}} placeholder="This is my secret world, the place where I will publish extraordinary works, taken care of in every detail, designed for the people who love me and believe in my work. "></textarea>
    </div>)
}



function CollectionItem({inputInfo,validationInfo}){
    const [messageState, setMessagesState] = useState();
    const {subheader,setFormState} = inputInfo;
    const {message, inputType, rulesObj} = validationInfo;
    return <div >
    <h4 className="form__h4">{subheader}</h4>
    <div className="collection-creation__item-wrapper">
        <div className="form__item-wrapper">
        <input className="collection-creation__item-input"
     placeholder={subheader} {...rulesObj} type="text"
     onChange={
        (e)=>{
            if (validationFuncs[inputType](e.target,setMessagesState)){
                retrieveInputDataAndValidate({e,setFormState,subheader,setMessagesState,rulesObj})   
            }
}
}/>    
        </div>
    
    <span className="collection-creation__input-message">{messageState || "* " + message}</span>
    </div>
</div>
}

export function retrieveInputDataAndValidate({e,setFormState,subheader,setMessagesState,rulesObj}){
    const input= e.target;
    setFormState((prevState) => {
        const newState={...prevState};
        
        newState[subheader.toLowerCase()]=input.value;
        return newState
    }); 
    
    setMessagesState(prevState=> {
        const validationBool = input.checkValidity();
        if (input.value.length === rulesObj?.maxLength) {return `✔️ Character limit reached (${rulesObj.maxLength})`}
        if(!validationBool){
            if (input.validity.tooLong) {return undefined}
            if (input.validity.valueMissing) {return undefined}
            return ` ❌ ${input.validationMessage}`;
        }
        if(validationBool){
            return " ✔️ Valid input"
        }
    
    })
}

export function mapOptions(options){
    return options.map(option => {
        return <option value={option} key={v4()}>{option}</option>
    })
}
function CollectionItemSelect({subheader, options, setFormState}){
    const [optionsState, setOptionsState] = useState(mapOptions(options))
    const [messageState, setMessagesState] = useState(optionsState && optionsState[0].props.value)
    useEffect(()=>{
        setFormState((prevState) => {return {...prevState,category:optionsState[0].props.value}})
    },[optionsState])
    return (
        <div>
            
        <h4 className="form__h4">{subheader}</h4>
        <div className="collection-creation__item-wrapper">

        <select name="category" onChange={e => {setMessagesState(e.target.value);setFormState((prevState) =>  {return {...prevState,category:e.target.value}})}}>
            {optionsState}
        </select>
        <span className="collection-creation__input-message">{ messageState + " " + messagesObj.category}</span>
        </div>
        </div>
    )
}

function UploadImage ({subheader, setFormState, imageRef}){
const [message,setMessagesState]= useState(messagesObj.image);
return (<div>
    <h4 className="form__h4">{subheader}</h4>
    <div className="collection-creation__image-wrapper">
    <img className="collection-creation__image" ref={imageRef}/>
    </div>
    <div className="collection-creation__item-wrapper">
<input type="file" required accept="image/png, image/jpeg" 
id="collection__image"
className="form__item-wrapper image-input"
onChange={async (e)=>{
    const {filePath, fileData}= await readImage(e.target.files[0]);
    imageRef.current.src= fileData;
    setFormState(prevState => {return {...prevState, img:filePath}});
    setMessagesState(" ✔️ File selected!")
}}/>
<label htmlFor="collection__image" className="buy-btn buy-btn--file">Upload image</label>
<span className="collection-creation__input-message">* {message}</span>
    </div>
</div>)
}

export async function readImage(file){
    const reader = new FileReader();

    const dataURL = new Promise ((resolve)=>{
        reader.addEventListener('load', (event) => {
            const fileData = event.target.result;
          const filePath= `Collections/CollectionsImages/${file.name}`;
          resolve({filePath, fileData})
        });
    })
    reader.readAsDataURL(file);
    return dataURL;
}

function divideStrParagraphs (description){

    const indicies=findNewLineCharacterIndex(description);
    const paragraphs=[];
    for(let i=0; i<indicies.length; i++){
        let a = i===0 ? indicies[i] : indicies[i]+2;
        let b = indicies[i+1];
        paragraphs.push(description.slice(a,b))
    }    
    return paragraphs;
}

    const findNewLineCharacterIndex = (description) => {
        const indicies = [0];
        [...description].forEach((char, i) => {
            if (char === '\n' || char === '\r') indicies.push(i);
        });
        return indicies;
    };

    const dateObj= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function checkIfFilled(formState,setNotification){
    const {title, category, creator, img, items, owners, description, volume} = formState;
    if  (!title || !category || !creator || !formState["floor price"] || !img || !items || !owners || !description || !volume)
     {setNotification(prevState => prevState==='❌ Non-filled input!' ? '❌ An Input was not filled!' : '❌ Non-filled input!' ); return false}
     setNotification('✔️ Valid form, trying to submit!');
     return true;
}
export function FormNotification({notificationState}){
    return  <div key={notificationState} className={`collection-creation__form-notification ${ notificationState[0] === "❌" ? "collection-creation__form-notification--miss" : "collection-creation__form-notification--right"}`}>
        {notificationState}
    </div>
}

function submitForm(e,formState, setNotification, imageRef, userEmail){
    e.preventDefault();
    if (checkIfFilled(formState,setNotification)) {

        const dividedParagraphs=divideStrParagraphs(formState.description);
        const date = new Date();
        const dateMessage= dateObj[date.getMonth()] + ' ' + date.getFullYear();
        const fullData= {...formState,
            title:{title:formState.title,check:false}, 
            paragraphs:dividedParagraphs, email:userEmail,date:dateMessage};
            const arrFirestorePath = ["Collections",formState.title]
            createOrUpdateDoc(arrFirestorePath, fullData)
            uploadImageToStorage(
                formState.img, imageRef.current.src
                );
            }
    }

function filterByEmail(collections, userEmail){
    return collections.filter((collection)=> {
        return collection.email === userEmail
    })
}



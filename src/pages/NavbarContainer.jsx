import { useState, useRef, useEffect } from "react"
import Navbar from "../components/NavbarPresentational"
import NavbarCar from "./NavbarCar";
import AuthPresentational from "../components/ProfileFormPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../data/firebase";
import { useOutletContext } from "react-router-dom";

export default function NavBarContainer (){
    const [viewCar, setViewCar] = useState(false);
    const [viewAuth, setViewAuth] = useState(false);
    
    const { userStatus } = useOutletContext();
    const [userState, setUserState] = userStatus;
    const bodyRef= useRef(document.getElementsByTagName('body')[0]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              const displayName = user.displayName;

              const photoURL = user.photoURL;
              const emailVerified = user.emailVerified;
              setUserState(user);
            } else {
              setUserState(undefined)
            }
          });    
    },[setUserState])

    useEffect(()=>{
        toggleScroll(bodyRef)
    },[viewCar])
    
    function showCar (){
        toggleState(setViewCar)
    }
    
    function showAuth(){
        toggleState(setViewAuth)
    }

    function toggleState(setState){
        setState(prevState => !prevState)
    }

    return <>
    <Navbar showCar={showCar} showAuth={showAuth} />
    {viewCar && <NavbarCar showCar={showCar} />}
    {viewAuth && <AuthPresentational showAuth={showAuth} toggleState={toggleState}/>}
    </>
}

function toggleScroll(domEle){
    domEle.current.classList.toggle('scrolloff');
}
import { useState, useRef, useEffect } from "react"
import Navbar from "./NavbarPresentational"
import NavbarCar from "./NavbarCar";
import AuthPresentational from "./ProfileFormPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../data/firebase";
import { Outlet, useOutletContext } from "react-router-dom";

export default function NavBarContainer (){
    const [viewCar, setViewCar] = useState(false);
    const [viewAuth, setViewAuth] = useState(false);
    
    const { userStatus } = useOutletContext();
    const [userState, setUserState] = userStatus;
    const bodyRef= useRef(document.getElementsByTagName('body')[0]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              const displayName = user.displayName;

              const photoURL = user.photoURL;
              const emailVerified = user.emailVerified;
              setUserState(user);
              console.log(user)
              //bug navbar não da o display correto no authstatechanged
            } else {
              // User is signed out
              // ...
              setUserState(undefined)
            }
          });    
    },[setUserState])

    useEffect(()=>{
        toggleScroll(bodyRef)
    },[viewCar])
    // note here what i want
    // car and profile/login <- essential
    // create is good too
    // night mode and search are pluses

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
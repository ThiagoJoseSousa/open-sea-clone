
import { useState } from "react"
import { createUser,login } from "../data/firebase";
import { useOutletContext } from "react-router-dom";

 export default function AuthPresentational ({showAuth, toggleState}){
    const [newAccountState, setNewAccount] = useState({});
    const [formChoiceState, setFormChoice] = useState(false);

    const {userStatus} = useOutletContext();
    const [userState, setUserState] = userStatus;
    
        function changeAccountData({e,accountField}){
            setNewAccount(prevState => {
                const accountObj = {...prevState}
                accountObj[accountField] = e.target.value;
                return accountObj;
            });
        }

    return <div className="black">
        <section className="auth">
        <header className="car__header"> 
         <h4 className="header__title">{formChoiceState ? "Create an account" : "Login"}</h4> 
         <button className="close-btn close-btn--aligned" onClick={showAuth}>✖</button>
        </header>



            <form className="auth__form">
                <input type="email" className="auth--padding" onChange={(e) => {changeAccountData({e,accountField:'email'})}} placeholder="email"/>
                <input type="password" className="auth--padding" onChange={(e) => {changeAccountData({e,accountField:'password'})}} placeholder="password"/>
                <button className="auth--padding buy-btn" onClick={async (e)=> {e.preventDefault();
                let userData;
                    if (formChoiceState===true){userData= await (createUser(newAccountState))};
                    if (formChoiceState===false){userData= await (login(newAccountState))};
                    showAuth();
                    setUserState({...userData.user});
                    }}>{formChoiceState ? "Register" : "Login"}</button>
            </form>
            <footer className="sign">
            <div className="sign__question">{formChoiceState ? "Do you already" : "Don't"} have an account? <button className="sign__btn" onClick={()=>{toggleState(setFormChoice)}}>Sign {formChoiceState ? "in" : "up"}</button></div>
            </footer>
        </section>
    </div>

}
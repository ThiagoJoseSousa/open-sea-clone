import arrowIcon from "../assets/angel right.svg";
export default function HamBtn ({description, icon, onClick, available}) {
    return (<li className="hamburger__link cursor-pointer">
   <button className={`hamburger__link-btn ${available ? null : "unavailable"}`} onClick={onClick}>
     <img
       src={icon}
       alt=""
       className="hamburger__link-icon"
     />
     <div>{description}</div>
     <img src={arrowIcon} alt="" className="arrow" />
   </button>
   </li>)
   }
   
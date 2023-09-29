import arrowIcon from "../assets/angel right.svg";
export default function HamBtn ({description, icon}) {
    return (<li className="hamburger__link cursor-pointer">
   <button className="hamburger__link-btn">
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
   
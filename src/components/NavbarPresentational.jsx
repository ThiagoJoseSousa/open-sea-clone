import logoIcon from "../assets/opensea.svg";
import cartIcon from "../assets/shopping-cart-thin.svg";
import searchIcon from "../assets/magnifier-lined.svg";
import calendarIcon from "../assets/calendar.svg";
import chartIcon from "../assets/chart.svg";
import resourcesIcon from "../assets/document.svg";
import pencilIcon from "../assets/pencil.svg";
import crownIcon from "../assets/crown.svg";
import globeIcon from "../assets/globe.svg";
import weatherIcon from "../assets/weather.svg";
import walletIcon from "../assets/wallet.svg";
import profileIcon from "../assets/profile.svg";
import plusIcon from "../assets/plus.svg"
import gearIcon from '../assets/gear.svg'

import HamBtn from "./NavHamItem";
import HoverListBtn from "./NavHoverItem";

import arrowIcon from "../assets/angel right.svg";
import { logOut } from "../data/firebase";
import { useOutletContext, Link } from "react-router-dom";

export default function Navbar({showCar, showAuth}) {
  const {userStatus} = useOutletContext(); 
  const [userState,setUserState] = userStatus;
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__container nav__button--hamburger">
          <input type="checkbox" id="nav__hamburger" key={window.location.pathname}/>
          <label
            htmlFor="nav__hamburger"
            className="nav__button nav__button--hamburger cursor-pointer"
          >
            <div className="nav__hamburger "></div>
          </label>
          <ul className="hamburger__navigation">

            {!userState && <HamBtn description={"Log in"} icon={profileIcon} available={true} onClick={() => userState? null : showAuth()}/>}
            <Link to={'../UserCollections'}>
            <HamBtn description={"Create"} icon={pencilIcon} available={true}/>
            </Link>
            {userState && <HamBtn description={"Log out"} icon={profileIcon} onClick={()=>{
              logOut();
              setUserState(undefined);
            }} available={true}/>} 
            <HamBtn description={"Drops"} icon={calendarIcon} />
            <HamBtn description={"Stats"} icon={chartIcon} />
            <HamBtn description={"Resources"} icon={resourcesIcon} />
            <HamBtn description={"OpenSea Pro"} icon={crownIcon}/>
            <HamBtn description={"Language"} icon={globeIcon}/>
            <HamBtn description={"Night Mode"} icon={weatherIcon}/>

          </ul>
        </li>
        
          <Link to="/" className="anchor-styleless">
        <li className="nav__logo">
          <img src={logoIcon} className="nav__icon--logo" alt="logo image" />
          <div className="logo__name">OpenSea</div>
        </li>
          </Link>

        <li className="nav__links desktop--show">
          <div className="hover-list cursor-pointer hover-list__div">Drops</div>

          <ul>
          <HoverListBtn description={"Featured"} />
            <HoverListBtn description={"Learn More"} />
          </ul>

          <div className="hover-list cursor-pointer hover-list__div">Stats</div>

          <ul>
          <HoverListBtn description={"Ranking"} />
          <HoverListBtn description={"Activity"} />
          </ul>
        </li>

        <li className="nav__container nav__button--text">
          <input
            type="text"
            className="nav__button nav__button--text"
            placeholder="🔎 Search items, collections, and accounts"
          />
        </li>

        <li className="nav__container desktop--hide">
          <input type="checkbox" name="" id="nav__search" />

          <label className="nav__button" htmlFor="nav__search">
            <img src={searchIcon} className="nav__icon" />
          </label>
          <div id="nav__search--input">
            <label className="nav__button" htmlFor="nav__search">
              <img src={arrowIcon} className="nav__icon" />
            </label>
            <input
              type="text"
              name=""
              className="nav__search--input"
              placeholder="🔎 Search items, collections, and accounts"
            />
          </div>
        </li>

        <li className="nav__account desktop--show">
          <Link to={userState && "../UserCollections"} className="anchor-styleless">
          <button className="nav__button--account cursor-pointer" onClick={() => userState? null : showAuth()}>
            <img src={userState? plusIcon : walletIcon } />
            <div> {userState? "Create collection" : "Connect wallet"}</div>

          </button>
          </Link>
          <button className="nav__button--account hover-list cursor-pointer" onClick={() => userState? null : showAuth()}>
            <img src={userState? gearIcon : profileIcon } />
          </button>
          <ul>
            <HoverListBtn description={"Profile"} available={true} onClick={!userState && showAuth}/>
            <Link to="../UserCollections" className="anchor-styleless">
            <HoverListBtn description={"My Collections"} available={true}/>
            </Link>
            <HoverListBtn description={"Watchlist"} />
            <HoverListBtn description={"Create"} />
            <HoverListBtn description={"OpenSea Pro"} />
            <HoverListBtn description={"Learn"} />
            <HoverListBtn description={"Help Center"} />
            <HoverListBtn description={"Settings"} />
            <HoverListBtn description={"Language"} />
            <HoverListBtn description={"Night Mode"} />
            {userState && <HoverListBtn description={"Log out"}  onClick={()=>{
              logOut();
              setUserState(undefined);
            }} available={true}/>} 
          </ul>
        </li>

        <li className="nav__container">
          <button className="nav__button cursor-pointer" onClick={showCar}>
            <img src={cartIcon} className="nav__icon"></img>
          </button>
        </li>
      </ul>
    </nav>
  );
}

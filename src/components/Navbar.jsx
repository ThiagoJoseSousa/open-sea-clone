import logoIcon from '../assets/navbar/opensea.svg'
import cartIcon from '../assets/navbar/shopping-cart-thin.svg'
import searchIcon from '../assets/navbar/magnifier-lined.svg'
import arrowIcon from '../assets/navbar/angel right.svg'
import calendarIcon from '../assets/navbar/calendar.svg'
import chartIcon from '../assets/navbar/chart.svg'
import resourcesIcon from '../assets/navbar/document.svg'
import pencilIcon from '../assets/navbar/pencil.svg'
import crownIcon from '../assets/navbar/crown.svg'
import globeIcon from '../assets/navbar/globe.svg'
import weatherIcon from '../assets/navbar/weather.svg'
import walletIcon from '../assets/navbar/wallet.svg'
import profileIcon from '../assets/navbar/profile.svg'

export default function Navbar(){
    return (
        <nav className="nav">
            <ul className="nav__ul">
                <li className="nav__container nav__button--hamburger">
                    <input type="checkbox" id="nav__hamburger"/>
                    <label htmlFor="nav__hamburger" className='nav__button nav__button--hamburger'>
                        <div className='nav__hamburger'>
                        </div>
                    </label>
                    <ul className="hamburger__navigation">
                        <li className="hamburger__link">
                            <button className="hamburger__link-btn">

                            <img src={calendarIcon} alt="" className='hamburger__link-icon'/>
                            <div>
                                Drops
                            </div>
                            <img src={arrowIcon} alt="" className="arrow"/>
                            </button>
                        </li>

                        <li className="hamburger__link">
                            <button className="hamburger__link-btn">
                                
                            <img src={chartIcon} alt="" className='hamburger__link-icon'/>
                            <div>
                                Stats
                            </div>
                            <img src={arrowIcon} alt="" className="arrow"/>

                            </button>
                        </li>

                        <li className="hamburger__link">
                        <button className="hamburger__link-btn">
                            
                        <img src={resourcesIcon} alt="" className='hamburger__link-icon'/>
                            <div>
                                Resources
                            </div>
                            <img src={arrowIcon} alt="" className="arrow"/>

                        </button>
                        </li>

                        <li className="hamburger__link">
                        <button className="hamburger__link-btn">
                            
                        <img src={pencilIcon} alt="" className='hamburger__link-icon'/>
                            <div>
                                Create
                            </div>
                            <img src={arrowIcon} alt="" className="arrow"/>

                        </button>
                        </li>

                        <li className="hamburger__link">
                            <button className="hamburger__link-btn">
                                
                            <img src={crownIcon} alt="" className='hamburger__link-icon'/>
                                <div>
                                    OpenSea Pro
                                </div>
                                <img src={arrowIcon} alt="" className="arrow"/>

                            </button>
                        </li>

                        <li className="hamburger__link">
                        <button className="hamburger__link-btn">
                            
                        <img src={globeIcon} alt="" className='hamburger__link-icon'/>
                            <div>
                                Language
                            </div>
                            <img src={arrowIcon} alt="" className="arrow"/>

                        </button>
                        </li>

                        <li className="hamburger__link">
                        <button className="hamburger__link-btn">
                            
                        <img src={weatherIcon} alt="" className='hamburger__link-icon'/>
                            <div>
                                Night Mode
                            </div>
                            <img src={arrowIcon} alt="" className="arrow"/>

                        </button>
                        </li>

                    </ul>

                </li>

                <li className="nav__logo">
                    
                    <img src={logoIcon} className="nav__icon--logo" alt="logo image" />
                    <div className="logo__name">
                        OpenSea
                    </div>
                </li>

                <li className="nav__links desktop--show">
                    <div className='hover-list'>
                        Drops  
                    </div>

                    <ul>
                        <li><div>Featured</div></li>
                        <li><div>Learn more</div></li>
                    </ul>

                    <div className="hover-list">
                        Stats
                    </div>

                    <ul>
                        <li><div>Rankings</div></li>
                        <li><div>Activity</div></li>
                    </ul>

                </li>

                <li className="nav__container nav__button--text">
                    <input type="text" className="nav__button nav__button--text"
                    placeholder='🔎 Search items, collections, and accounts' />
                </li>

                <li className="nav__container desktop--hide">
                    <input type="checkbox" name="" id="nav__search" />
                    
                    <label className="nav__button" htmlFor='nav__search'>
                        <img src={searchIcon} className="nav__icon" />
                    </label>
                    <div id="nav__search--input">
                    <label className="nav__button" htmlFor='nav__search'>
                        <img src={arrowIcon} className="nav__icon" />
                    </label>
                        <input type="text" name="" className="nav__search--input" placeholder='🔎 Search items, collections, and accounts'/>
                        
                    </div>

                    
                </li>

                <li className="nav__account desktop--show">
                    <button className="nav__button--account">
                        <img src={walletIcon} />
                        <div>Connect wallet</div>
                    </button>
                    <button className="nav__button--account hover-list">
                        <img src={profileIcon} />
                    </button>
                    <ul>
                        <li><div>Profile</div></li>
                        <li><div>Watchlist</div></li>
                        <li><div>My Collections</div></li>
                        <li><div>Create</div></li>
                        <li><div>OpenSea Pro</div></li>
                        <li><div>Learn</div></li>
                        <li><div>Help Center</div></li>
                        <li><div>Settings</div></li>
                        <li><div>Language</div></li>
                        <li><div>Night Mode</div></li>
                    </ul>
                </li>

                <li className="nav__container">
                <button className="nav__button"> 
                    <img src={cartIcon} className="nav__icon"></img>
                </button>
                </li>

            </ul>
        </nav>
    )
}

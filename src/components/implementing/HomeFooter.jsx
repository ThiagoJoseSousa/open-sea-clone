import logoIcon from '../../assets/navbar/opensea.svg'

import instagramIcon from '../../assets/footer/instagram.png'
import mailIcon from '../../assets/footer/mail.png'
import redditIcon from '../../assets/footer/reddit.png'
import twitterIcon from '../../assets/footer/twitter.png'
import wechatIcon from '../../assets/footer/wechat.png'
import youtubeIcon from '../../assets/footer/youtube.png'

export default function HomeFooter (){
    return <footer className="home__footer">
            <div className='home__footer-container-responsive'>
        <div className="home__footer-container">
            <div className="home__footer-title">
                Stay in the loop
            </div>
            <div>
                Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.
            </div>
            <form action="" className='' id='home__footer-form'>
                <input type="email" placeholder="Your email address" id="home__footer-form-email"/>
                <button id='home__footer-form-btn'>Sign up</button>
            </form>
        </div>

        <div className="home__footer-container">
            <div className="home__footer-title">
                Join the community
            </div>
            <div className="home__footer-social">
                <button className="home__footer-btn">
                    <img src={instagramIcon} className='home__footer-form-btn-icon' alt="" />
                    </button>
                <button className="home__footer-btn">
                    <img src={mailIcon} className='home__footer-form-btn-icon' alt="" />
                    </button>
                <button className="home__footer-btn">
                    <img src={redditIcon} className='home__footer-form-btn-icon' alt="" />
                    </button>
                <button className="home__footer-btn">
                    <img src={twitterIcon} className='home__footer-form-btn-icon' alt="" />
                    </button>
                <button className="home__footer-btn">
                    <img src={wechatIcon} className='home__footer-form-btn-icon' alt="" />
                    </button>
                <button className="home__footer-btn">
                    <img src={youtubeIcon} className='home__footer-form-btn-icon' alt="" />
                    </button>
             </div>
        </div>
        </div>
            <hr />

        <div className='home__footer-container-responsive'>

       
        <div className="home__footer-container home__footer-container-width">
            <img src={logoIcon} className='home__footer-icon'/>
            <div className="home__footer-title">
                OpenSea
            </div>
            The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
        </div>

    <div className='home__footer-nav'>

        <div >
            <h3>Title</h3>
            <ul className="home__footer-nav-ul">
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
        </div>

        
        <div >
            <h3>Title</h3>
            <ul className="home__footer-nav-ul">
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
        </div>

        
        <div >
            <h3>Title</h3>
            <ul className="home__footer-nav-ul">
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
        </div>
    </div>
 </div>
        <hr/>

        <div className="home__footer-container home__footer-container-copyright">
            <div>© 2018 - 2023 Ozone Networks, Inc</div>
            <div>
                <button className='home__footer-terms-btn'>
                Privacy Policy
                </button>

                <button className='home__footer-terms-btn'>
                    Terms of Service
                </button>
            </div>
        </div>

    </footer>
}
import logoIcon from "../assets/opensea.svg";

import instagramIcon from "../assets/instagram.png";
import mailIcon from "../assets/mail.png";
import redditIcon from "../assets/reddit.png";
import twitterIcon from "../assets/twitter.png";
import wechatIcon from "../assets/wechat.png";
import youtubeIcon from "../assets/youtube.png";

export default function HomeFooter() {
  return (
    <footer className="home__footer">
      <div className="home__footer-container-responsive">
        <div className="home__footer-container">
          <div className="home__footer-title">Stay in the loop</div>
          <div>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </div>
          <form action="" className="" id="home__footer-form">
            <input
              type="email"
              placeholder="Your email address"
              id="home__footer-form-email"
            />
            <button id="home__footer-form-btn" className="cursor-pointer">Sign up</button>
          </form>
        </div>

        <div className="home__footer-container">
          <div className="home__footer-title">Join the community</div>
          <div className="home__footer-social">
            <button className="home__footer-btn cursor-pointer">
              <img
                src={instagramIcon}
                className="home__footer-form-btn-icon"
                alt=""
              />
            </button>
            <button className="home__footer-btn cursor-pointer">
              <img
                src={mailIcon}
                className="home__footer-form-btn-icon"
                alt=""
              />
            </button>
            <button className="home__footer-btn cursor-pointer">
              <img
                src={redditIcon}
                className="home__footer-form-btn-icon"
                alt=""
              />
            </button>
            <button className="home__footer-btn cursor-pointer">
              <img
                src={twitterIcon}
                className="home__footer-form-btn-icon"
                alt=""
              />
            </button>
            <button className="home__footer-btn cursor-pointer">
              <img
                src={wechatIcon}
                className="home__footer-form-btn-icon"
                alt=""
              />
            </button>
            <button className="home__footer-btn cursor-pointer">
              <img
                src={youtubeIcon}
                className="home__footer-form-btn-icon"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <hr />

      <div className="home__footer-container-responsive">
        <div className="home__footer-container home__footer-container-width">
          <img src={logoIcon} className="home__footer-icon" />
          <div className="home__footer-title">OpenSea</div>
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </div>

        <div className="home__footer-nav">
          <div>
            <h3>Marketplace</h3>
            <ul className="home__footer-nav-ul">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>

          <div>
            <h3>My Account</h3>
            <ul className="home__footer-nav-ul">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
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
      <hr />

      <div className="home__footer-container home__footer-container-copyright">
        <div>© 2018 - 2023 Ozone Networks, Inc</div>
        <div>
          <button className="home__footer-terms-btn">Privacy Policy</button>

          <button className="home__footer-terms-btn">Terms of Service</button>
        </div>
      </div>
    </footer>
  );
}

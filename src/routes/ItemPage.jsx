import menuDot from "../assets/menu-dot-horizontal-filled.svg";
import shareIcon from "../assets/share.svg";
import ethereumIcon from "../assets/ethereum-1.svg";
import headerBG from "../assets/buy page header.jpg";
import tallImg from "../assets/tall img.jpg";

import openIcon from "../assets/open.svg";
import favoriteIcon from "../assets/favorite.svg";

import eyeIcon from "../assets/eye.svg";
import databaseIcon from "../assets/database.svg";
import categoryIcon from "../assets/category.svg";
import userIcon from "../assets/user.svg";

import arrowIcon from "../assets/angel-down.svg";
import carIcon from "../assets/shopping-cart.png";

import tagIcon from "../assets/tag.svg";
import clockIcon from "../assets/clock.svg";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { getDataFromFirestore, getDataFromStorage } from "../data/firebase";
import { useEffect, useState } from "react";
import ErrorPage from "../error-page";

export async function itemLoader({title,itemName}){
  const itemData= await getDataFromFirestore(['Collections/', title , '/Items/' , itemName]);
  const itemImg=  itemData?.img ? await getDataFromStorage(itemData.img) : 'no img';
  return {...itemData, img:itemImg}
}

export default function ItemPage() {
  const [item, setItem] = useState()
  const {title, itemName} = useParams();

  const {cartEvents} = useOutletContext();
  useEffect(()=>{
    (async function(){
      const retrieve = await itemLoader({title,itemName});
      setItem(retrieve);
    })()
  },[])
  // if (!item) {
  //   return <ErrorPage />
  // }

  // request the item here, 
  if (!item) {return null}
  return (
    <main>
      <header className="item__header">
        <div className="item__header-collection-toolbar">
          <div className="item__header-collection-link">
            <Link to={"../Collections/" + title}>Return to collection</Link>
          </div>
          <button className="item__header-collection-btn">
            <img src={shareIcon} className="toolbar-icon" alt="" />
          </button>
          <button className="item__header-collection-btn">
            <img src={menuDot} className="toolbar-icon" alt="" />
          </button>
        </div>
        <div>
          <h1 className="item__header-collection-h1">{item.name}</h1>
        </div>
      </header>

      <article>
        <header className="item__header-collection-toolbar">
          <div className="item__header-collection-link ">
            <img src={ethereumIcon} className="toolbar-icon" alt="" />
          </div>
          <button className="item__header-collection-btn">
            <img src={openIcon} className="toolbar-icon" alt="" />
          </button>
          <button className="item__header-collection-btn">
            <img src={favoriteIcon} className="toolbar-icon" alt="" />
          </button>
        </header>

        <div className="item__header-collection-img-wrapper">
          <img src={item.img} className="item__header-collection-img" alt="" />
        </div>
      </article>

      <section className="item-counts">
        <button className="item-count">
          <img src={userIcon} className="item-counts-img" alt="" />
          <span>-- owners </span>
        </button>
        <div className="item-count">
          <img src={databaseIcon} className="item-counts-img" alt="" />
          <span>{item.rarity} items</span>
        </div>
        <div className="item-count">
          <img src={eyeIcon} className="item-counts-img" alt="" />
          <span>-- views</span>
        </div>
        <button className="item-count">
          <img src={favoriteIcon} className="item-counts-img" alt="" />
          <span>-- favorites</span>
        </button>
      </section>

      <section className="sale">
        <header className="sale__expiration">
          <img src={clockIcon} className="item-counts-img" />
          <span>Sale ends at ----</span>
        </header>
        <div className="sale__wrapper">
          <div className="sale__info">
            <div>
              <span className="current-price">Current price</span>
              <div>
                <span className="item__header-collection-h1">{item.price} {item.coin}</span>
              </div>
            </div>
          </div>

          <div className="sale__buy">
            <div className="product__buy-bar sale__btn">
              <span onClick={()=> cartEvents.addItemToCart(item)}>Buy now</span>
              <span className="product__buy-car sale__car" onClick={()=> cartEvents.addItemToCart(item)}>
                <img src={carIcon} className="item-counts-img" alt="" />
              </span>
            </div>
            <div className="sale__offer sale__btn">
              <span>
                <img src={tagIcon} className="item-counts-img" />
              </span>
              <span className="product__buy-">Make offer</span>
            </div>
          </div>
        </div>
      </section>

      <div className="expand-wrapper">
        <input
          type="checkbox"
          name=""
          id="checkbox-test"
          className="open-section"
        />
        <label htmlFor="checkbox-test" className="expand-label">
          <img src={arrowIcon} className="arrow-down" alt="" />
        </label>
        <h3 className="expand-title">Description</h3>

        <div className="details-wrapper">
          <section className="item-creator">
            <span>By</span>
            <span className="subtitle">ConsortiumKeyDeployer</span>
            <span></span>
          </section>
          <p>
            The Consortium Key is a one of a kind alerts and tools based
            Discord, aimed to provide holders with real time tracking of market
            behaviors to stay ahead of the game.
          </p>
          <p>
            Are you tired of waiting for alpha calls? Are you tired of being
            late to every mint, shitcoin, or NFT pump? Be tired no longer, join
            the Consortium.
          </p>
          <p>
            Our custom and curated alert systems provide holders of the
            Consortium Key instant access to a custom database of curated wallet
            tracking alerts, and tools like our mobile minting bot and our soon
            to come new token sniping bot, all of which give you the edge you
            need to be early, not chasing calls
          </p>
        </div>
      </div>

      <div className="expand-wrapper">
        <input
          type="checkbox"
          name=""
          id="checkbox-details"
          className="open-section"
        />
        <label htmlFor="checkbox-details" className="expand-label">
          <img src={arrowIcon} className="arrow-down" alt="" />
        </label>
        <h3 className="expand-title">Details</h3>

        <div className="details-wrapper">
          <div>
            <div className="details-line">
              <div className="details-type">Contract adress</div>
              <span>
                <a href="#" className="a-blue">
                  0x4be3...5493
                </a>
              </span>
            </div>
            <div className="details-line">
              <div className="details-type">Token ID</div>
              <span>
                <a href="#" className="a-blue">
                  39
                </a>
              </span>
            </div>
            <div className="details-line">
              <div className="details-type">Token Standard</div>
              <span>ERC-721</span>
            </div>
            <div className="details-line">
              <div className="details-type">Chain</div>
              <span>Ethereum</span>
            </div>
            <div className="details-line">
              <div className="details-type">Last Updated</div>
              <span>4 days ago</span>
            </div>
            <div className="details-line">
              <div className="details-type">Creator Earnings</div>
              <span>7.5%</span>
            </div>
          </div>
        </div>
      </div>

      {/*Fazer buy section, description, details e more from this  */}
    </main>
  );
}

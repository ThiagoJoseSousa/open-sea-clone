import checkIcon from "../assets/check-mark.svg";
import { Link } from "react-router-dom";

export default function SingleSlidePresentational ({collectionData, isDaily}){
    return (
    <div className="card cursor-pointer">
      <Link to={'/Collections/' + collectionData.id} className="anchor-styleless">
      <div className="card__img">
        <img src={collectionData.img} alt="card image" />
      </div>
      <div className="card__text-wrapper">
        <div className="card__text">
          <span className="title">
            {collectionData.title.title}
          </span>
          <span className="check-icon">
            {collectionData.title.check && <img src={checkIcon} />}
          </span>

          <div></div>
        </div>
        <div className="card__market">
          <div className="card__market-floor">
            <div className="card__market-sub">floor</div>
            <div className="card__market-data">{collectionData["floor price"]}</div>
          </div>
          <div className="card__market-volume">
            <div className="card__market-sub">
              {isDaily ? "24h volume" : "Total volume"}
            </div>
            <div className="card__market-data">{collectionData.volume}</div>
          </div>
        </div>
      </div>
      </Link>
    </div>
)
  }
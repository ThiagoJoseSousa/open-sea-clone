export default function RankingPresentational({ rankingState,itemSortState, setItemSortState}) {

    return (
      <section className="ranking">
        <div className="ranking__filters">
          <div className="ranking__filters-line">
            <ul className="ranking__filters-left">
              <li
                className={
                  itemSortState === "owners"
                    ? "active-line cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => {
                  setItemSortState("owners");
                }}
              >
                Trending
              </li>
              <li
                className={
                  itemSortState === "volume"
                    ? "active-line cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => {
                  setItemSortState("volume");
                  console.log('clicked', `${itemSortState}`);
                }}
              >
                Top
              </li>
            </ul>
            <ul className="ranking__filters-right">
              <li className="desktop--show">
                <ul className="ranking__filters-time">
                  <li>1h</li>
                  <li>6h</li>
                  <li>24h</li>
                  <li>7d</li>
                </ul>
              </li>
              <li className="desktop--show">
                <select>
                  <option>All chains</option>
                </select>
              </li>
              <li className="ranking__filters-view cursor-pointer">View all</li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="ranking__results-wrapper">
          <div className="ranking__results">
            <div className="ranking__results-left">
              <div className="ranking__results-title">
                <div className="ranking__results-test ranking__results-item-left">
                  collection
                </div>
                <div className="ranking__results-item-right">floor price</div>
                <div className="ranking__results-item-right">volume</div>
              </div>
              {rankingState?.left}
            </div>
            <div className="ranking__results-right">
              <div className="ranking__results-title">
                <div className="ranking__results-test ranking__results-item-left">
                  collection
                </div>
                <div className="ranking__results-item-right">floor price</div>
                <div className="ranking__results-item-right">volume</div>
              </div>
  
              {rankingState?.right}
            </div>
          </div>
        </div>
      </section>
    );
  }
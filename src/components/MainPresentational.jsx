import { useEffect, useState, useRef } from "react";
import diamondGif from '../assets/diamond 3d.gif';

export default function MainPresentational({
  mainData,
  launchDate,
  setLaunchDate,
  targetIcon,
  checkIcon,
  countDownKey,
}) {

  return (
    <main className="main__item">
      <div className="main__item-img">
        {mainData !== null && mainData?.imgBg ? (
          <img src={mainData.imgBg} alt="" />
        ) : (
          <img src={diamondGif} alt="" />
        )}
      </div>
      <div className="main__item-data">
        <div className="main__item-column">
          <div className="main__item-column-left">
            {mainData?.imgIcon ? (
              <img
                src={mainData.imgIcon}
                alt=""
                className="main__item-icon query__results-icon"
              />
            ) : (
              <img
                src={targetIcon}
                className="main__item-icon query__results-icon"
              />
            )}
            <div className="main__item-data-groups">
              <div className="main__item-title">
                {mainData?.title?.title && <div>{mainData.title.title}</div>}
                {mainData?.title?.check && <img src={checkIcon} />}
              </div>
              <div className="main__item-info">
                {mainData?.infos && mainData.infos[0] && mainData.infos[0].info}
                {mainData?.infos && mainData.infos[0]?.check && (
                  <img src={checkIcon} />
                )}
              </div>
              <div className="main__item-info">
                {mainData?.infos && mainData.infos[1] && mainData.infos[1].info}
                {mainData?.infos && mainData.infos[1]?.check && (
                  <img src={checkIcon} />
                )}
              </div>
            </div>
            <div className="main__item-wrapper">
              <span className="main__item-box">
                {launchDate.days}
                <br />
                days
              </span>

              <span className="main__item-box">
                {launchDate.hours}
                <br />
                hours
              </span>

              <span className="main__item-box">
                {launchDate.minutes}
                <br />
                minutes
              </span>
              <span className="main__item-box">
                {launchDate.seconds}
                <br />
                seconds
              </span>
            </div>
          </div>

          <div className="main__item-column-right">
            <span className="main__item-box">View drop</span>
          </div>
        </div>
      </div>
    </main>
  );
}

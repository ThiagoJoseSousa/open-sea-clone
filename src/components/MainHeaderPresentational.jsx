import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "../assets/style/mainheader.css"

export default function MainHeaderPresentational({selectedCategory, handleCheck}) {

    return (
      <header className="landing-categories">
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          className="landing-categories__ul"
        >
          <SwiperSlide>
            <li className="categories__li">
              <input
                type="radio"
                name="landing-category"
                id="landing-category1"
                className="category-radio"
                onChange={handleCheck}
                checked={selectedCategory === "All"}
                value="All"
              />{" "}
              <label htmlFor="landing-category1" className="category-label">
                All
              </label>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="categories__li">
              <input
                type="radio"
                name="landing-category"
                id="landing-category2"
                className="category-radio"
                onChange={handleCheck}
                checked={selectedCategory === "Art"}
                value="Art"
              />{" "}
              <label htmlFor="landing-category2" className="category-label">
                Art
              </label>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="categories__li">
              <input
                type="radio"
                name="landing-category"
                id="landing-category3"
                className="category-radio"
                onChange={handleCheck}
                checked={selectedCategory === "Gaming"}
                value="Gaming"
              />{" "}
              <label htmlFor="landing-category3" className="category-label">
                Gaming
              </label>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="categories__li">
              <input
                type="radio"
                name="landing-category"
                id="landing-category4"
                className="category-radio"
                onChange={handleCheck}
                checked={selectedCategory === "Memberships"}
                value="Memberships"
              />{" "}
              <label htmlFor="landing-category4" className="category-label">
                Memberships
              </label>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="categories__li">
              <input
                type="radio"
                name="landing-category"
                id="landing-category0"
                className="category-radio"
                onChange={handleCheck}
                checked={selectedCategory === "PFPs"}
                value="PFPs"
              />{" "}
              <label htmlFor="landing-category0" className="category-label">
                PFPs
              </label>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="categories__li">
              <input
                type="radio"
                name="landing-category"
                id="landing-category5"
                className="category-radio"
                onChange={handleCheck}
                checked={selectedCategory === "Photography"}
                value="Photography"
              />{" "}
              <label htmlFor="landing-category5" className="category-label">
                Photography
              </label>
            </li>
          </SwiperSlide>
        </Swiper>
      </header>
    );
  }
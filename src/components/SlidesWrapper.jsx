import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";

export default function SlidesWrapper({collectionsSlides, title, categoryFilter}) {
  return (
    <div className="landing-items">
       <div className="section-title">{title? title : `Trending in ${categoryFilter}`}</div>
      <Swiper
        modules={[Navigation]}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        slidesPerView="auto"
        breakpoints={{
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          800: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1200: { slidesPerView: 5, slidesPerGroup: 5 },
        }}
        className="landing-items__ul"
      >

        {/* <SwiperSlide className="landing-items__li">{collectionsSlides && collectionsSlides[0]}</SwiperSlide>  */}
      {
        collectionsSlides &&
        collectionsSlides.map((slide)=> {
          return <SwiperSlide className="landing-items__li" key={v4()}>{slide}</SwiperSlide>
        })
      }
      </Swiper> 
    </div>
  );
}

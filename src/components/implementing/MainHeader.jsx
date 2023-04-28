import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function MainHeader (){

return <header className="landing-categories">
<Swiper className="landing-categories__ul"
slidesPerView='auto'
spaceBetween={16}
>
    <SwiperSlide><li className="categories__li"><input type="radio" name="landing-category" id="landing-category1" className="category-radio" value="1"/> <label htmlFor="landing-category1" className="category-label">Span</label></li></SwiperSlide>
    <SwiperSlide><li className="categories__li"><input type="radio" name="landing-category" id="landing-category2" className="category-radio" value="2"/> <label htmlFor="landing-category2" className="category-label">Span</label></li></SwiperSlide>
    <SwiperSlide><li className="categories__li"><input type="radio" name="landing-category" id="landing-category3" className="category-radio" value="3"/> <label htmlFor="landing-category3" className="category-label">Span</label></li></SwiperSlide>
    <SwiperSlide><li className="categories__li"><input type="radio" name="landing-category" id="landing-category4" className="category-radio" value="4"/> <label htmlFor="landing-category4" className="category-label">Span</label></li></SwiperSlide>
    <SwiperSlide><li className="categories__li"><input type="radio" name="landing-category" id="landing-category0" className="category-radio" value="0"/> <label htmlFor="landing-category0" className="category-label">Span</label></li></SwiperSlide>
    <SwiperSlide><li className="categories__li"><input type="radio" name="landing-category" id="landing-category5" className="category-radio" value="5"/> <label htmlFor="landing-category5" className="category-label">Span</label></li></SwiperSlide>
    <SwiperSlide><li className="categories__li"><input type="radio" name="landing-category" id="landing-category6" className="category-radio" value="6"/> <label htmlFor="landing-category6" className="category-label">Span</label></li></SwiperSlide>
    <SwiperSlide><li className="categories__li"><input type="radio" name="landing-category" id="landing-category7" className="category-radio" value="7"/> <label htmlFor="landing-category7" className="category-label">Span</label></li></SwiperSlide>
</Swiper>
</header>
}
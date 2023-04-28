
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import targetIcon from '../../assets/homepage/big target.png'
import checkIcon from '../../assets/homepage/check-mark.svg'

export default function Slides(){
return <div className="landing-items">
    <div className='section-title'>
                Section Title
            </div>
                <Swiper 
                modules={[Navigation]}
                navigation
                onSwiper={(swiper)=> console.log(swiper)}
                onSlideChange={()=>console.log('slide change')}
                slidesPerView='auto'
                breakpoints={{
                    600:{
                        slidesPerView:2,
                        slidesPerGroup:2
                    },
                    800:{
                        slidesPerView:3,
                        slidesPerGroup:3
                    },
                    1200:{slidesPerView:5,
                    slidesPerGroup:5
                    }
                }}
                className="landing-items__ul">
                    <SwiperSlide className='landing-items__li'>
                            <div className='card'> 
                                <div className="card__img">
                                    <img src={targetIcon} alt="card image"/>
                                </div>
                                <div className='card__text-wrapper'>
                                    <div className='card__text'>
                                        <span className='title'>
                                            TITLE SAMPLE XXXXXXXX    
                                        </span>
                                        <span className="check-icon">
                                            <img src={checkIcon} />
                                        </span>

                                        <div>

                                        </div>
                                    </div>
                                    <div className='card__market'>
                                        <div className='card__market-floor'>
                                            <div className='card__market-sub'>
                                            floor
                                            </div>
                                            <div className='card__market-data'>
                                                Second
                                            </div>
                                        </div>
                                        <div className='card__market-volume'>
                                            <div className='card__market-sub'>
                                            ASSAAS
                                            </div>
                                            <div className='card__market-data'>
                                                Second
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide> 
                    <SwiperSlide className='landing-items__li'>
                            <div className='card'> 
                                <div className="card__img">
                                    <img src={targetIcon} alt="card image"/>
                                </div>
                                <div className='card__text-wrapper'>
                                    <div className='card__text'>
                                        <span className='title'>
                                            TITLE SAMPLE XXXXXXXX    
                                        </span>
                                        <span className="check-icon">
                                            <img src={checkIcon} />
                                        </span>

                                        <div>

                                        </div>
                                    </div>
                                    <div className='card__market'>
                                        <div className='card__market-floor'>
                                            <div className='card__market-sub'>
                                            floor
                                            </div>
                                            <div className='card__market-data'>
                                                Second
                                            </div>
                                        </div>
                                        <div className='card__market-volume'>
                                            <div className='card__market-sub'>
                                            ASSAAS
                                            </div>
                                            <div className='card__market-data'>
                                                Second
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                    <SwiperSlide className='landing-items__li'>
                        Slide 1
                    </SwiperSlide>  
                </Swiper>
</div>}

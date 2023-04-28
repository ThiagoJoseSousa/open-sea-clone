import { useEffect, useState } from 'react'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import targetIcon from '../assets/homepage/big target.png'
import checkIcon from '../assets/homepage/check-mark.svg'
import diamondGif from '../assets/homepage/diamond 3d.gif'
import 'swiper/css';
import 'swiper/css/navigation';

export default function Homepage (){
    const [slideNum, setSlideNum] = useState(calculateSlideNum())
    
    function calculateSlideNum() {
        if (window.innerWidth>=1200) return 5 
        return window.innerWidth < 600 ? 2 : 4
    }

    useEffect(()=>{
        window.addEventListener('resize', ()=> {
            setSlideNum(calculateSlideNum())
        },[])
    })

    return (
        <section className="landing">
            <header className="landing-categories">
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
            <div className="landing-items">
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
                        Slide 2
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

                <section className='query'>
                    <div className='query__filters'>
                        <div className='query__filters-line'>
                            <ul className='query__filters-left'>
                                <li>Trending</li>
                                <li>Top</li>
                            </ul>
                            <ul className='query__filters-right'>
                                <li className='desktop--show'>
                                    <ul className='query__filters-time'>
                                        <li>1h</li>
                                        <li>6h</li>
                                        <li>24h</li>
                                        <li>7d</li>
                                    </ul>
                                </li>
                                <li className='desktop--show'>
                                    <select>
                                        <option>
                                            All chains
                                        </option>
                                    </select>
                                </li>
                                <li className='query__filters-view'>
                                    View all
                                </li>
                            </ul>
                            </div>
                        <div>
                        </div>
                    
                    </div>
                    <div className='query__results-wrapper'>
                        <div className='query__results'>
                            <div className='query__results-left'>
                                <div className='query__results-title'>
                                    <div className='query__results-test query__results-item-left'>
                                        collection
                                    </div>
                                    <div >
                                        volume
                                    </div>
                                    <div >
                                        volume
                                    </div>
                                </div>

                                <div className='query__results-item'>
                                    <div className='query__results-item-column query__results-item-left'>
                                        N
                                        <img src="#" width={50} height={50}/>
                                        Text
                                    </div>
                                    <div className='query__results-item-column '>
                                        valueee
                                    </div>
                                    <div className='query__results-item-column '>
                                        valuee
                                    </div>
                                </div>
                                
                                <div className='query__results-item'>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                                
                                <div className='query__results-item'>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                                
                                <div className='query__results-item'>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                                
                                <div className='query__results-item'>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                                
                            </div>
                            <div className='query__results-right'>
                            <div className='query__results-title'>
                                    <div className='query__results-test query__results-item-left'>
                                        collection
                                    </div>
                                    <div className='query__results-item-right'>
                                        volume
                                    </div>
                                    <div className='query__results-item-right'>
                                        volume
                                    </div>
                                </div>

                                <div className='query__results-item'>
                                    <div className='query__results-item-column query__results-item-left'>
                                        <div className='query__results-text'>
                                            1
                                        </div>
                                        <div>

                                        <img src="#" className='query__results-icon'/>
                                        </div>
                                        <div className='query__results-text'>
                                            <div>Text</div>
                                            <div>Text</div>
                                        </div>
                                    </div>
                                    <div className='query__results-item-right query__results-item-column '>
                                        <div>
                                            valueee
                                        </div>
                                    </div>
                                    <div className='query__results-item-right query__results-item-column '>
                                        <div>
                                            valueee
                                        </div>
                                    </div>
                                </div>
                                
                                </div>
                        </div>
                    </div>
                </section>
                <main className='main__item'>
                    <div className='main__item-img'>
                        <img src={diamondGif} alt="" />
                    </div>
                    <div className='main__item-data'>
                        <div className='main__item-column'>
                            <div className='main__item-column-left'>
                                <img src={targetIcon} alt="" className='main__item-icon query__results-icon'/>
                                <div className='main__item-data-groups'>
                                    <div className='main__item-title'>
                                    GORJS DAO: DREAM VORTEX AAAAAAAAAA
                                            <img src={checkIcon} />
                                    </div>
                                    <div className='main__item-info'>
                                    GORJS DAO: DREAM VORTEX AAAAAAAAAA
                                    <img src={checkIcon} />
                                    </div>
                                    <div className='main__item-info'>
                                    GORJS DAO: DREAM VORTEX AAAAAAAAAA
                                    </div>
                                </div>
                                <div className='main__item-wrapper'>
                                        <span className='main__item-box'>
                                            1
                                            <br />
                                            SEC
                                        </span>
                                        
                                        <span className='main__item-box'>
                                            1
                                            <br />
                                            SEC
                                        </span>

                                        <span className='main__item-box'>
                                            1
                                            <br />
                                            SEC
                                        </span>
                                        <span className='main__item-box'>
                                            1
                                            <br />
                                            SEC
                                        </span>
                                </div>
                            </div>

                            <div className='main__item-column-right'>
                                <span  className='main__item-box'>
                                ASSASAAS
                                </span>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </section>
    )
}
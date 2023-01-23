import React, { useCallback, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import '../Carousel/Carousel.css'

// import required modules
import Individual from "../People/Individual";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

function Carousel({data}) {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);

    return (
        // <Container>
            <div className="swiperWithArrows">
                <Swiper
                    ref={sliderRef}
                    slidesPerView={1}
                    spaceBetween={1}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    className="mySwiper"
                    mouseWheel={true}
                    breakpoints={
                        {
                            "1400": {
                                slidesPerView: 5,
                                spaceBetween: 20
                            },
                            "1085": {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            "800": {
                                slidesPerView: 3,
                                spaceBetween: 5
                            }
                        }
                    }
                >
                    {data.slice(1).map((dataEntry) => (
                        <SwiperSlide>
                            <Individual image={`${dataEntry.node.imageLink}`} name={dataEntry.node.name} position={dataEntry.node.position} companyName={dataEntry.node.company}/>
                        </SwiperSlide>
                    ))}       
                </Swiper>
                <div className="arrows">
                        <div className="prev-arrow" onClick={handlePrev}>
                            <PrevArrow />
                        </div>
                        <div className="next-arrow" onClick={handleNext}>
                            <NextArrow />
                        </div>
                </div>  
            </div>    
        // {/* </Container> */}
    );
}

export default Carousel;

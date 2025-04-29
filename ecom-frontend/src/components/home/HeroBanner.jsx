import { Swiper, SwiperSlide } from "swiper/react";
import ErrorBoundary from "../shared/ErrorBoundary"; 

import "swiper/css";
import "swiper/css/pagination"; 
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from "swiper/modules"; 

import bannerLists from "../../utills";
import { Link } from "react-router-dom";

const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3", "bg-banner-color4","bg-banner-color1","bg-banner-color2","bg-banner-color3","bg-banner-color4","bg-banner-color2"];

const HeroBanner = () => {
  return (
    <div className="py-2 rounded-md w-full h-1/2">
      <ErrorBoundary> {/* Wrap Swiper in ErrorBoundary */}
        <Swiper

        modules={[Pagination, Autoplay]} 
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }} 
        slidesPerView={1}
      >
        {bannerLists.map((item, i) => (
          <SwiperSlide key={i} >
            <div className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}>
                <div className="flex justify-center item-center">
                    <div className="hidden lg:flex justify-center items-start p-8 w-1/2">
                      <div className=" mt-20 text-center">
                          <h1 className="text-3xl text-slate-800 font-bold">{item.title}</h1>
                          <h3 className="text-5xl text-white fold-bold mt-2">{item.subtitle}</h3>
                          <p className="text-white font-bold mt-4">{item.description}</p>
                          <Link to="/products" className="mt-4 inline-block bg-black text-white py-3 px-10 rounded hover:bg-gray-800">Shop</Link>                
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full lg:w-1/2 p-4">
                       <img src={item?.image} alt="" className="w-full sm:h-60 md:h-80 lg:h-[500px] object-cover" />
                    </div>
                </div> 
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </ErrorBoundary>

    </div>
  );
};

export default HeroBanner;

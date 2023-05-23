// slide images
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Category = () => {
  return (
    <section className="my-20 p-3 md:p-0">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-20">
          <img src={slide1} alt="slide-image" />
          <h3 className="slide-text text-lg md:text-3xl -mt-10 md:-mt-16">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide-image" />
          <h3 className="slide-text text-lg md:text-3xl -mt-10 md:-mt-16">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide-image" />
          <h3 className="slide-text text-lg md:text-3xl -mt-10 md:-mt-16">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide-image" />
          <h3 className="slide-text text-lg md:text-3xl -mt-10 md:-mt-16">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide-image" />
          <h3 className="slide-text text-lg md:text-3xl -mt-10 md:-mt-16">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

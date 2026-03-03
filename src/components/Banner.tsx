import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Banner() {
  return (
    <div className="fixed top-18 left-0 w-screen h-100 bg-[#fcd1d1] flex items-center justify-center">
      <Swiper modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-[400px]"
        style={{
        "--swiper-pagination-color": "#7295d6",
        "--swiper-pagination-bullet-inactive-color": "#9ca3af"}} >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
            src="/assets/banner1.jpg"
            className="w-full h-full object-cover"
            />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">
                        Empadinhas
                    </h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
            src="/assets/banner2.jpg"
            className="w-full h-full object-cover"
            />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">
                        Empadas
                    </h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative w-full h-full">
            <img
            src="/assets/banner3.jpg"
            className="w-full h-full object-cover"
            />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">
                        Empadões
                    </h2>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Banner
import type { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { bannersMock } from "../data/mocks";

function Banner() {
  const swiperPaginationStyle = {
    "--swiper-pagination-color": "#7295d6",
    "--swiper-pagination-bullet-inactive-color": "#9ca3af",
  } as CSSProperties;

  return (
    <section className="w-full animate-lilica-in">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-[200px] w-full overflow-hidden rounded-soft shadow-md sm:h-[260px] md:h-[300px] lg:h-[340px]"
        style={swiperPaginationStyle}
        aria-label="Banners em destaque"
      >
        {bannersMock.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full w-full">
              <img
                src={banner.image}
                alt={banner.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 px-4 text-center sm:px-6">
                <h2 className="text-xl font-bold text-white sm:text-3xl">
                  {banner.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-white/95 sm:text-base">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Banner;

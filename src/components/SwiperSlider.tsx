import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

export default function SwiperSlider() {
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(true);

  const updateProgress = (swiper: SwiperType) => {
    const totalSlides = swiper.slides.length;

    let slidesPerView = Number(swiper.params.slidesPerView);

    if (slidesPerView === 0 || Number.isNaN(slidesPerView)) {
      slidesPerView = 1;
    }

    const maxIndex = totalSlides - slidesPerView;

    if (maxIndex <= 0) {
      setShowProgress(false);
      return;
    }

    setShowProgress(true);

    const percentage = (swiper.activeIndex / maxIndex) * 100;

    setProgress(percentage);
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        onSwiper={updateProgress}
        onSlideChange={updateProgress}
        onResize={updateProgress}
        className="w-full"
      >
        <SwiperSlide>
          <div className="p-5 bg-gray-50 rounded-2xl h-75">
            <img src="/dev-icon.png" alt="" />
            <h2 className="my-5">Custom Software Development</h2>
            <p>
              Tailored web and software applications designed to solve unique
              business challenges.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-5 bg-gray-50 rounded-2xl h-75">
            <img src="/edu-icon.png" alt="" />
            <h2 className="my-5">Education Technology Solutions</h2>
            <p>
              Smart digital solutions for schools, colleges, training centers,
              and educational organizations.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-5 bg-gray-50 rounded-2xl h-75">
            <img src="/display-icon.png" alt="" />
            <h2 className="my-5">Digital Display Systems</h2>
            <p>
              Interactive and dynamic digital signage solutions for
              communication, branding, and information management.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-5 bg-gray-50 rounded-2xl h-75">
            <img src="/code-icon.png" alt="" />
            <h2 className="my-5">Web & Mobile Applications</h2>
            <p>
              Modern, scalable, and user-friendly applications for businesses
              and startups.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {showProgress && (
        <div className="custom-progress">
          <div
            className="custom-progress-fill"
            style={{
              width: `${25 + progress * 0.75}%`,
            }}
          />
        </div>
      )}
    </>
  );
}
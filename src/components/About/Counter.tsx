'use client'
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
// import { Navigation } from 'swiper';

interface SlideData {
  img: string;
  target: number;
  text: string;
}

const Counter: React.FC = () => {
  const slidesData: SlideData[] = [
    {
      img: 'https://www.dramynrajani.com/wp-content/uploads/2024/07/knee-icon-img.jpg',
      target: 20,
      text: 'Years of experience in Arthroscopy and Joint Replacement',
    },
    {
      img: 'https://www.dramynrajani.com/wp-content/uploads/2024/07/hip-surgeries-img.jpg',
      target: 5000,
      text: 'Successful knee, shoulder & hip surgeries performed',
    },
    {
      img: 'https://www.dramynrajani.com/wp-content/uploads/2024/07/robotic-img-icon.jpg',
      target: 500,
      text: 'Successful robotic knee & hip surgeries performed',
    },
    {
      img: 'https://www.dramynrajani.com/wp-content/uploads/2024/07/happy-clients-icon.jpg',
      target: 10000,
      text: 'Happy patients',
    },
    {
      img: 'https://www.dramynrajani.com/wp-content/uploads/2024/07/research-img.png',
      target: 25,
      text: 'Publications and Research Done',
    },
    {
      img: 'https://www.dramynrajani.com/wp-content/uploads/2024/07/hospital-affilcations.png',
      target: 4,
      text: 'Hospital Affiliations',
    },
  ];

  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const target = Number(counter.getAttribute('data-target'));
      let currentCount = 0;
      const increment = target / 200;

      const updateCounter = () => {
        if (currentCount < target) {
          currentCount += increment;
          counter.textContent = Math.ceil(currentCount).toString();
          setTimeout(updateCounter, 20);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Swiper
        // modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="counter-box text-center p-8 bg-white rounded-lg shadow-lg">
              <img src={slide.img} alt="counter-icon" className="mx-auto mb-4 w-16 h-16" />
              <div className="text-5xl font-bold">
                <span className="counter" data-target={slide.target}></span>+
              </div>
              <p className="text-gray-700 mt-4">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Counter;

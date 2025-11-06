import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import img from '@/assets/img/male-nurse-reading.jpg';

export default function Carousel() {
  const quotes = [
    '🩺 “A nurse who reads not only heals others but also strengthens her own mind and spirit.”',
    '📚 “Reading expands a nurse’s care — from the patient’s bedside to the boundaries of human understanding.”',
    '💡 “Every page a nurse reads adds wisdom to her practice and compassion to her touch.”',
    '🌱 “Continuous reading turns good nurses into great ones — always learning, always growing.”',
    '💙 “A nurse’s book is more than paper and ink — it’s a bridge between knowledge and healing.”',
  ];
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false, // keeps auto sliding after user interaction
      }}
    >
      {quotes.map((quote, i) => (
        <SwiperSlide key={i}>
          <p className="relative z-10  p-8">{quote}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

{
  /* <div class="bg-[url('/path/to/image.jpg')] bg-cover bg-center bg-no-repeat relative">
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="relative z-10 text-white p-10">
    <h1 class="text-4xl font-bold">Welcome</h1>
    <p class="mt-2">Your overlay text here</p>
  </div>
</div> */
}

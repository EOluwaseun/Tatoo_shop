import React from 'react';

import { testimonialData } from '../data';

// swiper component
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper css
import 'swiper/css';
// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Testimonial = () => {
  return (
    <motion.section
      variants={fadeIn('up')}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className=" py-[40px] lg:pb-[160px]
  lg:pt-0"
    >
      <div className="container mx-auto">
        <Swiper>
          {testimonialData.map((slide, index) => {
            // destructure
            const { quoteImg, message, name, occupation } = slide;

            return (
              <SwiperSlide key={index}>
                <div
                  className="max-w-[1200px]  mx-auto flex
              flex-col items-center lg:flex-row lg:items-start gap-x-[38px]"
                >
                  {/* quote img */}
                  <div className="w-[154px] h-[109px] mb-5">
                    <img src={quoteImg} alt="" />
                  </div>
                  {/* messGE */}
                  <div className="flex-1 lg:mt-[54px]">
                    {/* message */}
                    <div
                      className="lg:text-[36px]
                    leading-normal mb-6 lg:mb-12
                    text-xl lg:text-2xl font-primary"
                    >
                      {message}
                    </div>
                    {/* name */}
                    <div className="font-semibold">{name}</div>
                    <span className="mx-4"></span>
                    {/* ocuppation */}
                    <div className="font-light">{occupation}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonial;

import React, { useState } from 'react';
// import data
import { interviewData } from '../data';

// import modalVideo
import ModalVideo from 'react-modal-video';

// import modal css
import '../modalVideo.scss';
// import framer
import { motion } from 'framer-motion';

// import fadei
import { fadeIn } from '../variants';

const Interview = () => {
  // destructure
  const { title, btnIcon, btnText } = interviewData;
  // state of the video
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      variants={fadeIn('up')}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      id="interview"
      className="bg-pink-200 section bg-interview bg-no-repeat
  bg-cover bg-center lg:h-[812px]"
    >
      <div className="container mx-auto h-full">
        <div className="">
          <div className="flex flex-col items-start max-w-[880px]">
            <motion.h3
              variants={fadeIn('down')}
              className="text-white text-[40px] lg:text-[60px]
          leading-[1.1] font-tetiary -tracking-[1.5px] capitalize mb-8"
            >
              {title}
            </motion.h3>
            <motion.div
              variants={fadeIn('down')}
              onClick={() => setIsOpen(true)}
              className="flex text-white items-center gap-x-5 cursor-pointer
            hover:opacity-80 transition bg-transparent"
            >
              <div
                className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border-white/40
                rounded-full text-dark p-[5px] lg:p-[8px] "
              >
                {/* inner  */}
                <div
                  className="bg-white w-full h-full rounded-full flex
                    justify-center items-center "
                >
                  <div className="pl-1">{btnIcon} </div>
                </div>
                {/* btn text */}
              </div>
              <div className="font-primary uppercase">{btnText}</div>
            </motion.div>
            {/* youtube */}
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="BqDmoFvs2VU"
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Interview;

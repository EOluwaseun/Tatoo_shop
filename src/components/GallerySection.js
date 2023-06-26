// import motion
import { motion } from 'framer-motion';

// import fadein
import { fadeIn } from '../variants';
import { galleryData } from '../data';
import ImageAlbum from './ImageAlbum';

const GallerySection = () => {
  // destructure
  const { title, btnText, btnIcon, images } = galleryData;
  return (
    <section id="gallery" className="bg-[#f9f9f9] relative mt-[40px] lg:mt-0">
      <div className=" mx-auto">
        <motion.h2
          variants={fadeIn('up')}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20 ml-[20px]"
        >
          {title}
        </motion.h2>
      </div>
      {/* photo */}
      <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
      >
        <ImageAlbum galleryImages={images} />
      </motion.div>

      <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center p-6"
      >
        <button className="btn btn-lg btn-dark">
          {btnText}
          <div className="text-xl">{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
};

export default GallerySection;

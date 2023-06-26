import React from 'react';
import { motion } from 'framer-motion';

const Copyright = () => {
  return (
    <div className="bg-dark text-[#dbdbdb] py-6 border-t border-[#2b2b2b]">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: 'tween',
          duration: '0.8',
          delay: 0.2,
        }}
        viewport={{ once: false, amount: 0 }}
        className="container mx-auto"
      >
        <div className="text-base tracking-[0.2em] text-center">
          &copy; 2023 <span>The Void Tatoo</span> All right reserved
        </div>
      </motion.div>
    </div>
  );
};

export default Copyright;

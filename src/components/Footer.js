import React from 'react';
import { footerData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// stagger container

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  const { about, links, program, newsletter } = footerData;
  return (
    <footer className="section bg-black">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="text-white flex flex-col  lg:flex-row lg:justify-between xl:items-center gap-x-5 gap-y-14"
        >
          {/* about */}
          <motion.div
            variants={fadeIn('up')}
            className="flex-1 flex flex-col gap-y-6"
          >
            <div className="font-primary text-xl uppercase tracking-[0.08em]">
              {about.title}
            </div>

            <div className="leading-relaxed text-[#dbdbdb]">
              {about.subtitle}
            </div>

            <div className="flex flex-col gap-y-4 font-semibold text-[#dbdbdb]">
              {/* address */}

              <div className="flex items-center gap-x-[10px]">
                <div>{about.address.icon}</div>
                <div>{about.address.name}</div>
              </div>

              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <div>{about.phone.icon}</div>
                <div>{about.phone.number}</div>
              </div>

              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </motion.div>
          {/* links */}
          <motion.div variants={fadeIn('up')} className="flex-1">
            <div>
              <div>{links.title}</div>
              <ul className="flex flex-col gap-y-4">
                {links.items.map((item, index) => {
                  // destruture
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a className="hover:text-white transition" href={href}>
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* program */}
          <motion.div variants={fadeIn('up')} className="flex-1">
            <div className="font-primary text-xl uppercase tracking-[0.08em]">
              {' '}
              {program.title}
            </div>
            <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
              {program.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </motion.div>

          {/* newsettller */}
          <motion.div variants={fadeIn('up')} className="flex-1">
            <div
              className="font-primary text-xl uppercase tracking-[0.08em] mb-6
            text-[#dbdbdb]"
            >
              {newsletter.title}
            </div>
            <div className="leading-relaxed">{newsletter.subtitle}</div>
            <form className="flex justify-between items-start border-b border-[#dbdbdb]">
              <input
                className="outline-none
                placeholder:text-base italic placeholder:text-capitalized
                bg-transparent pb-2"
                placeholder={newsletter.form.placeholder}
                type="text"
              />
              <button type="submit" className="text-2xl cursor-pointer">
                {newsletter.form.icon}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

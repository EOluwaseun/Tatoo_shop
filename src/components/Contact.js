import React from 'react';

// import contactdat
import { contactData } from '../data';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Contact = () => {
  // destructure
  const { title, info, form } = contactData;
  return (
    <section id="contact" className="section bg-pink">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col flex-1 ">
            {/* text */}
            <h2 className="h2 w-full">{title}</h2>
            {/* info */}
            <div className="flex flex-col flex-1 xl:flex-row justify-around items-center">
              <div className="flex flex-1 flex-col xl:flex-row gap-y-16">
                {info.map((item, index) => {
                  const { title, subtitle, address, phone, email, link } = item;
                  return (
                    <div key={index}>
                      <div className="font-primary uppercase font-medium text-xl">
                        {title}
                      </div>
                      {/* subtitle */}
                      <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02rem]">
                        {subtitle}
                      </div>

                      {/* address phone email */}
                      <div className="mb-6 flex flex-col gap-x-3">
                        <div className="flex items-center gap-[10px]">
                          <div>{address.icon}</div>
                          <div className="font-medium">{address.name}</div>
                        </div>
                        {/* phone */}
                        <div className="flex items-center gap-[10px]">
                          <div>{phone.icon}</div>
                          <div className="font-medium">{phone.number}</div>
                        </div>
                        {/* email */}
                        <div className="flex items-center gap-[10px]">
                          <div>{email.icon}</div>
                          <div>{email.address}</div>
                        </div>
                        {/* links */}
                        <div>
                          <a
                            href="/"
                            className="font-medium border-b border-dark pb-[5px]"
                          >
                            {link}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <motion.div
            className="flex-1"
            variants={fadeIn('left')}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
          >
            <form className="flex flex-col gap-8 ">
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em]"
                placeholder={form.name}
                type="text"
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em]"
                placeholder={form.email}
                type="text"
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em]"
                placeholder={form.message}
                type="text"
              />
              <div className="flex justify-center">
                <button className="btn btn-dark btn-sm lg:btn-lg">
                  {form.btnText}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Skills = () => {
  // destructure inview hook
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  // fully body state
  const [fullBody, setFullBody] = useState(0);
  // state for piercing
  const [peircing, setPiercing] = useState(0);
  // state for tatoo
  const [fullColor, setFullColor] = useState(0);
  // state for tempory
  const [tempory, setTempory] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (peircing < 80) {
          setPiercing(peircing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (tempory < 95) {
          setTempory(tempory + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setFullColor(0);
      setPiercing(0);
      setTempory(0);
    }
    // eslint-disable-next-line no-use-before-define
  }, [inView, fullBody, peircing, fullColor, tempory]);

  // CircularProgressbarstyle
  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#eeeeee",
    },
    text: {
      fill: "#111111",
      fontSize: "24px",
    },
  };
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amout: 0.1 }}
      ref={ref}
      className="section font-primary"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-12">
          {/* circular items */}
          <div
            className="w-[150px] lg:w-[275px] flex flex-col
        items-center gap-y-6"
          >
            <CircularProgressbar
              strokeWidth={1}
              value={fullBody}
              styles={styles}
              text={`${fullBody}%`}
            />

            {/* text */}
            <div
              className="uppercase font-light tracking-[1.2px]
        text-center"
            >
              Full Body Tatoo
            </div>
          </div>
          <div>
            {/* circular items */}
            <div
              className="w-[150px] lg:w-[275px] flex flex-col
        items-center gap-y-6"
            >
              <CircularProgressbar
                strokeWidth={1}
                value={peircing}
                styles={styles}
                text={`${peircing}%`}
              />

              {/* text */}
              <div
                className="uppercase font-light tracking-[1.2px]
        text-center"
              >
                Safely peircing
              </div>
            </div>
          </div>
          <div>
            {/* circular items */}
            <div
              className="w-[150px] lg:w-[275px] flex flex-col
        items-center gap-y-6"
            >
              <CircularProgressbar
                strokeWidth={1}
                value={fullColor}
                styles={styles}
                text={`${fullColor}%`}
              />

              {/* text */}
              <div
                className="uppercase font-light tracking-[1.2px]
        text-center"
              >
                Full Body Color
              </div>
            </div>
          </div>
          <div>
            {/* circular items */}
            <div
              className="w-[150px] lg:w-[275px] flex flex-col
        items-center gap-y-6"
            >
              <CircularProgressbar
                strokeWidth={1}
                value={tempory}
                styles={styles}
                text={`${tempory}%`}
              />

              {/* text */}
              <div
                className="uppercase font-light tracking-[1.2px]
        text-center"
              >
                Temporay Tatoo
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

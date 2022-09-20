import { Fragment } from "react";
import { Text, Card } from "@nextui-org/react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Commerce",
    venue: "Durg University",
    year: "2017 - 2020",
    key: "1",
  },
  {
    degree: "Master of Commerce",
    venue: "Durg University",
    year: "2020 - 2022",
    key: "2",
  },
  {
    degree: "Web Development",
    venue: "Self-taught",
    year: "2020 - Active",
    key: "3",
  },
];

const MotionCard = motion(Card);
const MotionText = motion(Text);
// const MotionButton = motion(Button);

const Education = () => {
  const staggerInput = {
    hidden: { opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
        duration: 1,
      },
    },
  };

  const itemA = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.1,
        type: "spring",
      },
    },
  };

  const itemB = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  };

  return (
    <Fragment>
      <MotionText
        h3
        css={{ fontFamily: "Neon2" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { scale: 0.7, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", duration: 1 },
          },
        }}
      >
        Education &amp; Experience
      </MotionText>
      <div className="edu_show_container">
        <motion.div
          className="edu_show"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerInput}
        >
          {educationData.map((doc) => {
            return (
              <MotionCard
                variant="flat"
                css={{ mw: "550px", p: "10px", cursor: "pointer" }}
                key={doc.key}
                whileHover={{
                  y: "-10%",
                  transition: { duration: 0.1, type: "spring" },
                }}
                variants={itemA}
                className="edu_card"
              >
                <MotionText
                  color="$pink800"
                  css={{ fontFamily: "Neon2" }}
                  variants={itemB}
                >
                  {doc.degree}
                </MotionText>
                <MotionText
                  color="$pink800"
                  css={{ fontFamily: "Neon" }}
                  variants={itemB}
                >
                  {doc.venue}
                </MotionText>
                <MotionText color="$pink700" css={{ fontFamily: "Neon" }} variants={itemB}>
                  {doc.year}
                </MotionText>
              </MotionCard>
            );
          })}
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Education;

import { Text, Card, Button } from "@nextui-org/react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaJs, FaReact, FaPhp, FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiMysql } from "react-icons/si";
import { TbApi, TbBrandNextjs, TbDownload } from "react-icons/tb";

import { Link } from "react-router-dom";

const skillData = [
  {
    name: "ReactJS",
    icon: <FaReact className="icons_skill" size="30px" />,
    key: "1",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs className="icons_skill" size="30px" />,
    key: "2",
  },
  {
    name: "MongoDb",
    icon: <DiMongodb className="icons_skill" size="30px" />,
    key: "3",
  },
  {
    name: "ExpressJS",
    icon: <SiExpress className="icons_skill" size="30px" />,
    key: "4",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="icons_skill" size="30px" />,
    key: "5",
  },
  ,
  {
    name: "RestApi",
    icon: <TbApi className="icons_skill" size="30px" />,
    key: "6",
  },
  {
    name: "Php",
    icon: <FaPhp className="icons_skill" size="30px" />,
    key: "7",
  },
  {
    name: "MySql",
    icon: <SiMysql className="icons_skill" size="30px" />,
    key: "8",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="icons_skill" size="30px" />,
    key: "9",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs className="icons_skill" size="30px" />,
    key: "10",
  },
];

const MotionCardSkill = motion(Card);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const SkillSet = () => {
  const staggerInput = {
    hidden: { opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 1,
      },
    },
  };

  const itemA = {
    hidden: { scale: 0.7, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  return (
    <Fragment>
      <MotionText
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
        h3
        css={{ fontFamily: "Neon2" }}
      >
        My Skills
      </MotionText>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ delay: 2, type: "spring" }}
        className="resume"
      >
        <Link to={require("../../images/nemantaj-resume.pdf")} target="blank">
          <MotionButton
            css={{ fontFamily: "Neon" }}
            flat
            rounded
            auto
            color="success"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1, type: "spring" },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1, type: "spring" },
            }}
          >
            <TbDownload />
            &nbsp;Resume
          </MotionButton>
        </Link>
      </motion.div>
      <div className="skill_show_container">
        <motion.div
          className="skill_show"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerInput}
        >
          {skillData.map((doc) => {
            return (
              <MotionCardSkill
                css={{ w: "100%", minWidth: "100px", bgColor: "$pink100" }}
                className="skill_card"
                whileHover={{
                  y: "-5%",
                  transition: { duration: 0.1, type: "spring", bounce: 1 },
                }}
                key={doc.key}
                variants={itemA}
              >
                {doc.icon}
                <MotionText color="$pink800" css={{ fontFamily: "Neon3" }}>
                  {doc.name}
                </MotionText>
              </MotionCardSkill>
            );
          })}
        </motion.div>
      </div>
    </Fragment>
  );
};

export default SkillSet;

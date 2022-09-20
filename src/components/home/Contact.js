import { Fragment, useState } from "react";
import { Text, Button, Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandInstagram,
  TbMail,
} from "react-icons/tb";
import EmailModal from "../UI/EmailModal";

const MotionText = motion(Text);
const MotionButton = motion(Button);

const Contact = () => {
  const [visible, setVisible] = useState(false);

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
    hidden: { y: "-10%", opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const openEmailHandler = () => {
    setVisible(true);
  };

  const closeEmailHandler = () => {
    setVisible(false);
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
        Contact
      </MotionText>
      <motion.div
        className="contact_actions"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerInput}
      >
        <a
          href="https://www.linkedin.com/in/nemantaj-sahu-196452243"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MotionButton
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1, type: "spring" },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1, type: "spring" },
            }}
            auto
            flat
            rounded
            size="sm"
            css={{ fontFamily: "Neon3" }}
            variants={itemA}
          >
            <TbBrandLinkedin />
            &nbsp;LinkedIn
          </MotionButton>
        </a>
        <a
          href="https://github.com/Nemantaj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MotionButton
            auto
            flat
            rounded
            size="sm"
            color="success"
            css={{ fontFamily: "Neon3" }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1, type: "spring" },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1, type: "spring" },
            }}
            variants={itemA}
          >
            <TbBrandGithub />
            &nbsp;Github
          </MotionButton>
        </a>
        <a
          href="https://www.instagram.com/nemantaj_garg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MotionButton
            auto
            flat
            rounded
            size="sm"
            color="error"
            css={{ fontFamily: "Neon3" }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1, type: "spring" },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1, type: "spring" },
            }}
            variants={itemA}
          >
            <TbBrandInstagram />
            &nbsp;Instagram
          </MotionButton>
        </a>
      </motion.div>
      <motion.div
        className="contact_email"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerInput}
      >
        <MotionText css={{ fontFamily: "Neon3" }} h5 variants={itemA}>
          or contact via email...
        </MotionText>
        <MotionButton
          auto
          rounded
          flat
          css={{ fontFamily: "Neon3", bgColor: "$pink100", color: "$pink800" }}
          onClick={openEmailHandler}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1, type: "spring" },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.1, type: "spring" },
          }}
          variants={itemA}
        >
          <TbMail />
          &nbsp;Email Me
        </MotionButton>
      </motion.div>
      <EmailModal visible={visible} onClose={closeEmailHandler} />
    </Fragment>
  );
};

export default Contact;

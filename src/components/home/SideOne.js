import { Card, Text, useTheme } from "@nextui-org/react";
import { motion } from "framer-motion";
import { TbFolder, TbStack, TbLocation } from "react-icons/tb";

import dummy from "../../images/sideone1.jpg";

const MotionCard = motion(Card);

const SideOne = () => {
  const { type, isDark } = useTheme();

  return (
    <motion.div
      className="header_img"
      initial={{ scale: 0.5, y: "50%", opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1 }}
    >
      <img src={dummy} className={isDark ? "lower_brightness" : ""} />
      <MotionCard
        variant="flat"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        css={{
          mw: "fit-content",
          p: "10px",
          bgBlur: "#ffffff64",
          cursor: "pointer",
        }}
        className="tiny_badge_one disableBlur"
      >
        <Text
          size="14px"
          css={{ fontFamily: "Neon", p: 0, m: 0 }}
          color={isDark ? "black" : "black"}
        >
          <TbFolder className="icons" />
          &nbsp;20+ Projects
        </Text>
      </MotionCard>
      <MotionCard
        variant="flat"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        css={{
          mw: "fit-content",
          p: "10px",
          bgBlur: "#ffffff64",
          cursor: "pointer",
        }}
        className="tiny_badge_two"
      >
        <Text
          size="14px"
          css={{ fontFamily: "Neon", p: 0, m: 0 }}
          color={isDark ? "black" : "black"}
        >
          <TbLocation className="icons" />
          &nbsp;Bemetara, In
        </Text>
      </MotionCard>
      <MotionCard
        variant="flat"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        css={{
          mw: "fit-content",
          p: "10px",
          bgBlur: "#ffffff64",
          cursor: "pointer",
        }}
        className="tiny_badge_three"
      >
        <Text
          size="14px"
          css={{ fontFamily: "Neon", p: 0, m: 0 }}
          color={isDark ? "black" : "black"}
        >
          <TbStack className="icons" />
          &nbsp;Full-Stack Developer
        </Text>
      </MotionCard>
      <motion.div className="gooey"></motion.div>
    </motion.div>
  );
};

export default SideOne;

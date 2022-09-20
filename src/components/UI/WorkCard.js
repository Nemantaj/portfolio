import { Card, Text, Button, useTheme } from "@nextui-org/react";
import { motion } from "framer-motion";
import { TbCode } from "react-icons/tb";
import { Link } from "react-router-dom";

const MotionCard = motion(Card);
const MotionCardBody = motion(Card.Body);
const MotionCardFooter = motion(Card.Footer);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const WorkCard = (props) => {
  const itemA = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
    },
  };

  const { isDark } = useTheme();

  return (
    <MotionCard
      variant="flat"
      css={{ mw: "550px", h: "200px", cursor: "pointer" }}
      variants={itemA}
    >
      <MotionCardBody css={{ textAlign: "center", p: 0 }}>
        <Card.Image
          src={props.image}
          objectFit="cover"
          width="100%"
          height="100%"
          className={isDark ? "lower_brightness" : ""}
        />
      </MotionCardBody>
      <MotionCardFooter
        whileHover={{
          y: "-5%",
          transition: { duration: 0.5, type: "spring" },
        }}
        css={{
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          position: "absolute",
          bgBlur: "#ffffff64",
          bottom: 0,
        }}
      >
        <MotionText
          css={{ fontFamily: "Neon" }}
          color={isDark ? "black" : "black"}
        >
          {props.title}
        </MotionText>
        <MotionText
          css={{ fontFamily: "Neon3" }}
          color={isDark ? "black" : "black"}
        >
          {props.desc}
        </MotionText>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <MotionButton
            auto
            flat
            rounded
            size="sm"
            color="primary"
            css={{ fontFamily: "Neon" }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1, type: "spring" },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1, type: "spring" },
            }}
            on
          >
            <TbCode />
            &nbsp;Browse code
          </MotionButton>
        </a>
      </MotionCardFooter>
    </MotionCard>
  );
};

export default WorkCard;

import { Card, Text, Button, useTheme } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { TbMail } from "react-icons/tb";

const MotionCard = motion(Card);
const MotionCardBody = motion(Card.Body);
const MotionCardFooter = motion(Card.Footer);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <Fragment>
      <MotionText color="$pink800" css={{ fontFamily: "Neon3" }}>
        &copy; 2022 Nemantaj. All Rights Reserved.
      </MotionText>
      <MotionText color="$pink800" css={{ fontFamily: "Neon3" }}>
        <TbMail className="icons" />
        &nbsp;nemantaj@gmail.com
      </MotionText>
    </Fragment>
  );
};

export default Footer;

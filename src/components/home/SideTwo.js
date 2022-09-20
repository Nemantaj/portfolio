import { Text, Button, useTheme } from "@nextui-org/react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { TbMail } from "react-icons/tb";

const MotionText = motion(Text);
const MotionButton = motion(Button);

const SideTwo = (props) => {
  const { type, isDark } = useTheme();

  return (
    <Fragment>
      <MotionText
        color={isDark ? "$pink500" : "black"}
        h3
        css={{ fontFamily: "Neon2", p: 0, textAlign: "center" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        Hi, i'm Nemantaj Sahu.
      </MotionText>
      <MotionText
        color={isDark ? "$pink600" : "black"}
        css={{
          fontFamily: "Neon3",
          mw: "400px",
          p: 0,
          mb: "10px",
          textAlign: "center",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, type: "spring" }}
      >
        Throughout my professional experiences, i have used Web Development to
        express my creative side and work with others on engaging projects. I
        hope to share my skills and experience with your organization and
        clients.
      </MotionText>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <MotionButton
          rounded
          auto
          flat
          css={{ fontFamily: "Neon", bgColor: "$pink200", color: "$pink800" }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1, type: "spring" },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.1, type: "spring" },
          }}
          onClick={() => {
            props.contactRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          <TbMail />
          &nbsp;Contact
        </MotionButton>
      </motion.div>
    </Fragment>
  );
};

export default SideTwo;

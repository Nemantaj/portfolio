import { Fragment } from "react";
import { Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import Carousel from "react-grid-carousel";
import WorkCard from "../UI/WorkCard";

import bg1 from "../../images/special-delivery.jpg";
import bg2 from "../../images/science.png";
import bg3 from "../../images/flowers.jpg";
import bg4 from "../../images/cocina.gif";

const projectsData = [
  {
    title: "Realtime Social App",
    desc: "Built with MERN stack and Socket.IO.",
    url: "https://github.com/Nemantaj/socialfeeds_app",
    image: bg1,
    key: "1",
  },
  {
    title: "Social Media Website (PHP)",
    desc: "Built with PHP and jQuery.",
    url: "https://github.com/Nemantaj/socialfeeds_PHP_version",
    image: bg2,
    key: "2",
  },
  {
    title: "ReactJS Weather App",
    desc: "Built with ReactJS and Accuweather APIs.",
    url: "https://github.com/Nemantaj/Weather_react",
    image: bg3,
    key: "3",
  },
  {
    title: "Recipes Website",
    desc: "Built with Node and ExpressJS.",
    url: "https://github.com/Nemantaj/Recipe",
    image: bg4,
    key: "4",
  },
];

const MotionText = motion(Text);
const MotionCarousel = motion(Carousel);
const MotionItem = motion(Carousel.Item);

const Projects = () => {
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
        Recent Work
      </MotionText>
      <motion.div
        className="projects_container"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerInput}
      >
        <Carousel
          cols={4}
          rows={1}
          gap={5}
          responsiveLayout={[
            { breakpoint: 1920, cols: 3 },
            { breakpoint: 1200, cols: 3 },
            { breakpoint: 990, cols: 2 },
          ]}
          mobileBreakpoint={670}
          loop
          scrollSnap={true}
          autoplay={5000}
          showDots={true}
          dotColorInactive="#FFA3E5"
          dotColorActive="#FF4ECD"
        >
          {projectsData.map((doc) => {
            return (
              <Carousel.Item key={doc.key}>
                <WorkCard
                  title={doc.title}
                  desc={doc.desc}
                  image={doc.image}
                  url={doc.url}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </motion.div>
    </Fragment>
  );
};

export default Projects;

import { Fragment, useRef } from "react";
import { Row, Col } from "react-grid-system";
import { useTheme } from "@nextui-org/react";

import SideOne from "../components/home/SideOne";
import SideTwo from "../components/home/SideTwo";
import SkillSet from "../components/home/SkillSet";
import Education from "../components/home/Edu.js";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";

import "./Home.css";

const Homepage = (props) => {
  const { isDark } = useTheme();

  return (
    <Fragment>
      <div className="main_parent">
        <Row
          className={
            isDark ? "homepage_background_night" : "homepage_background"
          }
        ></Row>
        <Row
          className="homepage_main"
          direction="row-reverse"
          ref={props.aboutRef}
        >
          <Col sm={6} className="header_home_2">
            <SideOne />
          </Col>
          <Col className="header_home" sm={6}>
            <SideTwo contactRef={props.contactRef} />
          </Col>
        </Row>
      </div>
      <Row className="homepage_skills" ref={props.skillsRef}>
        <Col>
          <SkillSet />
        </Col>
      </Row>
      <Row className="homepage_edu" ref={props.eduRef}>
        <Col>
          <Education />
        </Col>
      </Row>
      <Row className="homepage_projects" ref={props.workRef}>
        <Col>
          <Projects />
        </Col>
      </Row>
      <Row className="homepage_contact" ref={props.contactRef}>
        <Col>
          <Contact />
        </Col>
      </Row>
      <Row className={isDark ? "footer footer_dark" : "footer footer_light"}>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Homepage;

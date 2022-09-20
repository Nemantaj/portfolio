import { Navbar, Text, Switch, useTheme } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import {
  TbSun,
  TbMoon,
  TbUser,
  TbChartBar,
  TbBook,
  TbStack,
  TbMail,
} from "react-icons/tb";

import "./Navbar.css";

const NavMenu = (props) => {
  const darkMode = useDarkMode(false);
  const { type, isDark } = useTheme();

  const aboutScroll = (event) => {
    const element = props.aboutRef;
    if (element) {
      element.current.scrollIntoView({ block: "center", behavior: "smooth" });
      console.log(props.aboutRef.current);
    }
  };

  const skillScroll = (event) => {
    const element = props.skillRef;
    if (element) {
      element.current.scrollIntoView({ block: "center", behavior: "smooth" });
      console.log(props.skillRef.current);
    }
  };

  const eduScroll = (event) => {
    const element = props.eduRef;
    if (element) {
      element.current.scrollIntoView({ block: "center", behavior: "smooth" });
      console.log(props.eduRef.current);
    }
  };

  const worksScroll = (event) => {
    const element = props.worksRef;
    if (element) {
      element.current.scrollIntoView({ block: "center", behavior: "smooth" });
      console.log(props.worksRef.current);
    }
  };

  const contactScroll = (event) => {
    const element = props.contactRef;
    if (element) {
      element.current.scrollIntoView({ block: "center", behavior: "smooth" });
      console.log(props.contactRef.current);
    }
  };

  return (
    <Navbar
      shouldHideOnScroll
      variant="floating"
      isCompact
      css={{ zIndex: 9999 }}
    >
      <Navbar.Brand>
        <Text css={{ fontFamily: "Neon" }}>NS</Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="sm" enableCursorHighlight>
        <Navbar.Link css={{ fontFamily: "Neon" }} onClick={aboutScroll}>
          about
        </Navbar.Link>
        <Navbar.Link css={{ fontFamily: "Neon" }} onClick={skillScroll}>
          Skills
        </Navbar.Link>
        <Navbar.Link css={{ fontFamily: "Neon" }} onClick={eduScroll}>
          Education
        </Navbar.Link>
        <Navbar.Link css={{ fontFamily: "Neon" }} onClick={worksScroll}>
          works
        </Navbar.Link>
        <Navbar.Link css={{ fontFamily: "Neon" }} onClick={contactScroll}>
          contact
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content showIn="sm" enableCursorHighlight>
        <Navbar.Link css={{ fontFamily: "Neon" }} onClick={aboutScroll}>
          <TbUser />
        </Navbar.Link>
        <Navbar.Link css={{ fontFamily: "Neon" }} onClick={skillScroll}>
          <TbChartBar />
        </Navbar.Link>
        <Navbar.Link css={{ fontFamily: "Neon" }} onClick={eduScroll}>
          <TbBook />
        </Navbar.Link>
        <Navbar.Link css={{ fontFamily: "Neon" }} onClick={worksScroll}>
          <TbStack />
        </Navbar.Link>
        <Navbar.Link css={{ fontFamily: "Neon" }} onClick={contactScroll}>
          <TbMail />
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Switch
          checked={darkMode.value}
          iconOn={<TbMoon />}
          iconOff={<TbSun />}
          color="secondary"
          bordered
          onChange={() => darkMode.toggle()}
        />
      </Navbar.Content>
    </Navbar>
  );
};

export default NavMenu;

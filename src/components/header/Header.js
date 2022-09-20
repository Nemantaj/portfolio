import { Fragment } from "react";
import NavMenu from "../navbar/Navbar";

const Header = (props) => {
  return (
    <Fragment>
      <NavMenu
        contactRef={props.contactRef}
        aboutRef={props.aboutRef}
        skillRef={props.skillRef}
        eduRef={props.eduRef}
        worksRef={props.worksRef}
      />
      <div className="app_body">{props.children}</div>
    </Fragment>
  );
};

export default Header;

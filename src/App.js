import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-grid-system";

import Header from "./components/header/Header";
import Homepage from "./pages/Home";

import "./App.css";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const eduRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header
        contactRef={contactRef}
        aboutRef={aboutRef}
        skillRef={skillsRef}
        eduRef={eduRef}
        worksRef={workRef}
      >
        <Container fluid>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  aboutRef={aboutRef}
                  skillsRef={skillsRef}
                  eduRef={eduRef}
                  workRef={workRef}
                  contactRef={contactRef}
                />
              }
            />
          </Routes>
        </Container>
      </Header>
    </div>
  );
}

export default App;

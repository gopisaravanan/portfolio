import Hero from "../components/Hero.tsx";
// import About from '../components/About';
// import Projects from '../components/Projects';
// import Contact from '../components/Contact';

import { FunctionComponent } from "react";
import Sidenav from "../components/Sidenav.tsx";
import Work from "../components/Work/Work.tsx";

const Home: FunctionComponent = () => {
  return (
    <div>
      <Sidenav />
      <Hero />
      <Work />
      {/*<Projects />
      <Contact /> */}

      {/* <About />
      <Projects />
      <Contact />  */}
    </div>
  );
};

export default Home;

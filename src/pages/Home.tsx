import Hero from "../components/Hero.tsx";
import Projects from '../components/Project/Projects.tsx';
import Contact from '../components/Contact';

import { FunctionComponent } from "react";
import Sidenav from "../components/Sidenav.tsx";
import Work from "../components/Work/Work.tsx";

const Home: FunctionComponent = () => {
  return (
    <div>
      <Sidenav />
      <Hero />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

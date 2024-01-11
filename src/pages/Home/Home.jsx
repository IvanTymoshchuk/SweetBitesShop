import { Donuts } from "../../components/Donuts/Donuts";
import { About } from "../../components/About/About";
import { Hero } from "../../components/Hero/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <Donuts />
      <About />
    </>
  );
};

export default Home;

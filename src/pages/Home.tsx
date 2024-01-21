import Background from "../components/home/background";
import NavBar from "../components/home/navbar";
import Hero from "../components/home/hero/Hero";
import Search from "../components/home/search/Search";
import { useState } from "react";
import Filter from "../components/home/upcomin_events/Filter";
import Cards from "../components/home/cards/Cards";
import CreateEvents from "../components/home/events/CreateEvents";

const Home = () => {
  const [state, setState] = useState("CROSS-RIVER");

  const stateHandler = (theState: string) => {
    setState(theState);
  };

  return (
    <>
      <Background>
        <div className="h-[700px] md:h-[360px] xl:h-[420px] relative">
          <NavBar />
          <Hero />
          <Search stateParser={stateHandler} />
        </div>
      </Background>
      <Filter />
      <Cards />
      <CreateEvents />
    </>
  );
};

export default Home;

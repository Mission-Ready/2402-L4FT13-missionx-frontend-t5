import HomeFooter from "../../common/HomeFooter";
import HomeNavbar from "../../common/HomeNavbar";
import Hero from "./components/Hero/Hero";
import OfferSection from "./components/OfferSection/OfferSection";
import Skills from "./components/skills/Skills";

function Home() {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <OfferSection />
      <Skills />
      <HomeFooter />
    </>
  );
}

export default Home;

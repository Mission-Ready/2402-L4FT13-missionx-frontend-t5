import HomeFooter from "../../common/HomeFooter";
import HomeNavbar from "../../common/HomeNavbar";
import Faq from "./components/Faq/Faq";
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
      <Faq />
      <HomeFooter />
    </>
  );
}

export default Home;

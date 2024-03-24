import HomeFooter from "../../common/HomeFooter";
import HomeNavbar from "../../common/HomeNavbar";
import Hero from "./components/Hero/Hero";
import OfferSection from "./components/OfferSection/OfferSection";

function Home() {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <OfferSection />
      <HomeFooter />
    </>
  );
}

export default Home;

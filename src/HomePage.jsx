import "./homepage.css";
import NavBar from "./assets/components/navbar";
import HeroSection from "./assets/components/herosection";
import Stats from "./assets/components/stats";
import Expertise from "./assets/components/expertise";
import Clients from "./assets/components/clients";
import Footer from "./assets/components/footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <Stats />
        <Expertise />
        <Clients />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;

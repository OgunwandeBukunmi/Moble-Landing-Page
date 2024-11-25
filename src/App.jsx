import Hero from "./components/Hero";
import designer from "./assets/designer.svg";
import Section1 from "./components/section1";
import ReSection from "./components/ReSection";
import influencer from "./assets/socialInfluencer.svg";
import HappyNews from "./assets/HappyNews.png";
import Mention from "./assets/Mention.png";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
const App = () => {
  return (
    <>
      <Hero />
      <img src={designer} className="designer" />
      <Section1 />
      <ReSection image={influencer} />
      <ReSection image={HappyNews} />
      <ReSection image={Mention} show={true} />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;

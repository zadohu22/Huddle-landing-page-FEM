import AppWrap from "./components/AppWrap";
import ContentContainer from "./components/ContentContainer";
import LogoImage from "./components/LogoImage";
import HeroImage from "./components/HeroImage";
import InfoContainer from "./components/InfoContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AppWrap>
      <LogoImage />
      <HeroImage />

      <ContentContainer>
        <InfoContainer />
        <Footer />
      </ContentContainer>
    </AppWrap>
  );
};

export default App;

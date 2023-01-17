import Header from "./components/Header";
import ImageBg from "./components/ImageBg";
import CurrentCards from "./components/CurrentCards";
import NewsEvents from "./components/NewsEvents";
import CardsOpst from "./components/CardsOpst";
import CardWithImage from "./components/CardWithImage";
import StudyUs from "./components/StudyUs";
import MultiSearch from "./components/MultiSearch";
import Diverse from "./components/Diverse";
import Footer from "./components/Footer";
import Mob_Header from "./components/Mob_Header";
function App() {
  return (
    <div>
      <Header />
      <Mob_Header />
      <ImageBg />
      <CurrentCards />
      <NewsEvents />
      <CardsOpst />
      <CardWithImage />
      <StudyUs />
      <MultiSearch />
      <Diverse />
      <Footer />
    </div>
  );
}

export default App;

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Division from "../components/Division";
import Facilities from "../components/Facilities";
import PhotoGallery from "../components/PhotoGallery";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Welcome />
      <Division />
      <Facilities />
      <CallToAction />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

export default Home;

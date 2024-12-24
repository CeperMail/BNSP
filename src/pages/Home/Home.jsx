import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardDetail from "../../components/CardDetail/CardDetail";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Card />
        <CardDetail />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default Home;

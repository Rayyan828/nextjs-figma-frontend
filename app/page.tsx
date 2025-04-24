import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Header />
      <HeroSection />
      <CardGrid />
      <Footer />
    </main>
  );
}

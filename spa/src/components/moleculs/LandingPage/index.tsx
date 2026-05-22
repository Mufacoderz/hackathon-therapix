import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import CardSpaList from "@/components/moleculs/SpaCardList";
import ServiceSelector from "@/components/moleculs/ServiceSelector";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import Reservasi from "@/components/sections/Reservasi";
import Lokasi from "@/components/sections/Lokasi";
import Unggulan from "@/components/sections/Unggulan";
import Testimoni from "@/components/sections/Testimoni";
import FAQ from "@/components/sections/FAQ";


export default function LandingPage() {

  return (
    <>
    <Navbar />
    <Hero />
    <WhyChooseUs/>
    <About/>
    <Lokasi/>
    <Unggulan/>
    <Testimoni/>
    <Reservasi/>
    <FAQ/>
    <ServiceSelector />
    <CardSpaList />
    <Footer />
    </>
  );
}

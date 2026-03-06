import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <Faq />
      <Footer />
    </>
  );
}

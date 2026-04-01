import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BrandValues from "@/components/BrandValues";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-hc-white">
      <Navbar />
      <Hero />
      <About isTeaser={true} />
      <BrandValues />
      <FeaturedProjects />
      <Footer />
    </main>
  );
}

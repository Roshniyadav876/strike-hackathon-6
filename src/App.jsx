import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SaleExperience from "./components/SaleExperience/SaleExperience";
import Membership from "./components/Membership";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Companies from "./components/Companies";
import Mentors from "./components/Mentors";
import Reviews from "./components/Reviews";
import FAQ from "./components/Faq";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <SaleExperience />

        <Membership />
        <Courses />
        <Features />
        <Companies />
        <Mentors />
        <Reviews />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;

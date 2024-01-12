import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrimaryButton from "./components/PrimaryButton";
import BlogCard from "./components/BlogCard";
import BlackLine from "./components/BlackLine";
import SectionHeader from "./components/SectionHeader";
import Faq from "./components/Faq";

function App() {
  return (
    <div>
      <Navbar />

      <Faq />

      {/* <br /> */}
      <BlackLine />
      {/* <br /> */}

      <BlogCard />

      <Footer />
    </div>
  );
}

export default App;

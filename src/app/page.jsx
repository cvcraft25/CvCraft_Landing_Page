"use client";

import { useState } from "react";
import { Header } from "../components/landing/Header";
import { Background } from "../components/landing/Background";
import { HeroSection } from "../components/landing/HeroSection";
import { FeaturesSection } from "../components/landing/FeaturesSection";
import { HowItWorksSection } from "../components/landing/HowItWorksSection";
import { SamplesSection } from "../components/landing/SamplesSection";
import { TeamSection } from "../components/landing/TeamSection";
import { CtaSection } from "../components/landing/CtaSection";
import { FeedbackSection } from "../components/landing/FeedbackSection";
import { Footer } from "../components/landing/Footer";
import { GlobalStyles } from "../components/landing/GlobalStyles";


export default function CvCraftLanding() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? "dark" : ""}`}>
      <Header />
      <Background />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SamplesSection />
        <TeamSection />
        <CtaSection />
        <FeedbackSection />
      </main>
      <Footer />
      <GlobalStyles />
    </div>
  );
}

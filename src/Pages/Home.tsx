import { StarBackground } from "../Components/StarBackground"
import { Navbar } from "@/Components/Navbar"
import { HeroSection } from "@/Components/HeroSection"
import { AboutSection } from "@/Components/AboutSection"
import { SkillsSection } from "@/Components/SkillsSection"
import { Projects } from "@/Components/Projects"
import { ContactSection } from "@/Components/ContactSection"
import Footer from "@/Components/Footer"
import { ScrollTimeline } from "@/Components/ui/ScrollTimeline"
import { useEffect, useState, useRef } from "react"
import { SkyBackground } from "@/Components/SkyBackground"
import { ClockTransition } from "@/Components/ClockTransition"

const events = [
  {
    year: "2027",
    title: "End of Bachelor's Degree",
  },
  {
    year: "Present",
    title: "Full Stack Developer Internship",
    subtitle: "Hexoforge LLC",
    description: "Working on a full stack client project using React, FastAPI, and PostgreSQL."
  },
  {
    year: "2023",
    title: "Bachelor of Technology in Computer Science",
    subtitle: "JSS Academy of Technical Education, Noida, UP, India",
    description: "Pursuing a degree in Computer Science with a focus on software development and web technologies."
  },
  {
    year: "2022",
    title: "High School Graduation",
    subtitle: "Little Flower School, Gorakhpur, UP, India",
    description: "Completed high school with a focus on science and mathematics, laying the foundation for a career in technology."
  },
]

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionFromDark, setTransitionFromDark] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    // Only initialize once
    if (!initialized.current) {
      const storedTheme = localStorage.getItem("theme");
      const isDark = !storedTheme || storedTheme === "dark";
      setIsDarkMode(isDark);
      initialized.current = true;
    }
    
    const observer = new MutationObserver(() => {
      const newIsDark = document.documentElement.classList.contains('dark');
      
      // Detect theme change
      if (isDarkMode !== null && newIsDark !== isDarkMode && !isTransitioning) {
        // Store which theme we're transitioning FROM
        setTransitionFromDark(isDarkMode);
        
        // Start transition
        setIsTransitioning(true);
        
        // Wait 1 second before actually changing the theme
        setTimeout(() => {
          setIsDarkMode(newIsDark);
        }, 1000);
        
        // End transition after 2 seconds total
        setTimeout(() => {
          setIsTransitioning(false);
        }, 2000);
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, [isDarkMode, isTransitioning]);

  // Don't render until we know the theme
  if (isDarkMode === null) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background */}
      {!isTransitioning && (
        <div 
          key={isDarkMode ? 'dark-bg' : 'light-bg'}
          className="animate-in fade-in duration-500"
        >
          {isDarkMode ? <StarBackground /> : <SkyBackground />}
        </div>
      )}

      {/* Clock Transition Overlay */}
      <ClockTransition 
        isTransitioning={isTransitioning} 
        transitionFromDark={transitionFromDark}
      />

      {/* Main Content */}
      <div
        className="relative z-10 transition-opacity duration-500"
        style={{
          opacity: isTransitioning ? 0 : 1,
        }}
      >
        <Navbar />

        <main>
          <HeroSection />
          <AboutSection />
          <Projects />
          <ScrollTimeline
            events={events}
            title="My Journey"
            progressIndicator={true}
            cardAlignment="alternating"
            revealAnimation="fade"
          />
          <SkillsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}
import { ThemeToggle } from "../Components/ThemeToggle"
import { StarBackground } from "../Components/StarBackground"
import { Navbar } from "@/Components/Navbar"
import { HeroSection } from "@/Components/HeroSection"
import { AboutSection } from "@/Components/AboutSection"
import { SkillsSection } from "@/Components/SkillsSection"
import { Projects } from "@/Components/Projects"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        <ThemeToggle />

        <StarBackground />

        <Navbar />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <Projects />
        </main>
    </div>
  )
}

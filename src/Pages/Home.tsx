import { StarBackground } from "../Components/StarBackground"
import { Navbar } from "@/Components/Navbar"
import { HeroSection } from "@/Components/HeroSection"
import { AboutSection } from "@/Components/AboutSection"
import { SkillsSection } from "@/Components/SkillsSection"
import { Projects } from "@/Components/Projects"
import { ContactSection } from "@/Components/ContactSection"
import Footer from "@/Components/Footer"
import { ScrollTimeline } from "@/Components/ui/ScrollTimeline"

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
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


      <StarBackground />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ScrollTimeline
          events={events}
          title="My Journey"
          progressIndicator={true}
          cardAlignment="alternating"
          revealAnimation="fade"
        />
        <SkillsSection />
        <Projects />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

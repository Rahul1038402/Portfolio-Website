import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
    //Frontend
    { name: "HTML/CSS", level: 5, category: "frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", level: 4, category: "frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", level: 4, category: "frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "NextJS", level: 4, category: "frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", level: 4.5, category: "frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", level: 5, category: "frontend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

    //Backend
    { name: "Node.js", level: 4, category: "backend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", level: 3.5, category: "backend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Flask", level: 3, category: "backend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", level: 3, category: "backend", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },

    //Deployment
    { name: "AWS", level: 3, category: "deployment", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Docker", level: 3, category: "deployment", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },

    //Tools
    { name: "Git/GitHub", level: 4.5, category: "tools", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", level: 4.5, category: "tools", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "VS Code", level: 4.5, category: "tools", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
]

const categories = ["all", "frontend", "backend", "deployment", "tools"]

interface SkillCardProps {
    name: string
    logoUrl: string
}

const SkillCard = ({ name, logoUrl }: SkillCardProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Asteroid background with irregular shape */}
            <div
                className={cn(
                    "relative p-8 transition-all duration-300",

                )}
            >

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[140px]">
                    {/* Tech Logo */}
                    <div className={cn("mb-3 bg-gray-300 dark:bg-primary/60 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-purple-500/30", isHovered && "transition-all scale-105 shadow-purple-500/40 duration-200")}>
                        <img
                            src={logoUrl}
                            alt={`${name} logo`}
                            className="w-16 h-16 object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6)) brightness(1.2) contrast(1.1)'
                            }}
                        />
                    </div>

                    {/* Tech Name */}
                    <h3 className="text-skill-color font-bold text-xl mb-2 text-center drop-shadow-lg">
                        {name}
                    </h3>

                </div>
            </div>
        </div>
    )
}

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState<string>("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return (
        <section
            id="skills"
            className="py-24 px-4 relative overflow-hidden"
        >

            <div className="container mx-auto">
                <h2 className="text-5xl mb-12 text-center">
                    My<span className="text-primary"> Skills</span>
                </h2>

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize",
                                activeCategory === category
                                    ? "text-white bg-primary shadow-lg shadow-purple-500/50"
                                    : "text-skill-color hover:bg-gray-700/70 backdrop-blur-sm border border-primary/70"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {filteredSkills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            name={skill.name}
                            logoUrl={skill.logoUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
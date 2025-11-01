import { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

const skills = [
    //Frontend
    { name: "HTML/CSS", level: 5, category: "frontend" },
    { name: "JavaScript", level: 4, category: "frontend" },
    { name: "React", level: 4, category: "frontend" },
    { name: "NextJS", level: 4, category: "frontend" },
    { name: "TypeScript", level: 4.5, category: "frontend" },
    { name: "Tailwind CSS", level: 5, category: "frontend" },

    //Backend
    { name: "Node.Js", level: 4, category: "backend" },
    { name: "Python", level: 3.5, category: "backend" },
    { name: "Flask", level: 3, category: "backend" },
    { name: "Fast API", level: 3, category: "backend" },

    //Deployment
    { name: "AWS", level: 3, category: "deployment" },
    { name: "Docker", level: 3, category: "deployment" },

    //Tools
    { name: "Git/GitHub", level: 4.5, category: "tools" },
    { name: "VS Code", level: 4.5, category: "tools" },

    //DSA
    { name: "DSA", level: 2.5, category: "dsa" },
]

const categories = ["all", "frontend", "backend", "deployment", "tools", "dsa"]

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => {
                const filled = rating >= star
                const halfFilled = rating >= star - 0.5 && rating < star
                
                return (
                    <div key={star} className="relative">
                        {halfFilled ? (
                            <>
                                <Star className="w-5 h-5 text-muted-foreground/30" fill="currentColor" />
                                <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                                    <Star className="w-5 h-5 text-primary" fill="currentColor" />
                                </div>
                            </>
                        ) : (
                            <Star 
                                className={cn(
                                    "w-5 h-5",
                                    filled ? "text-primary" : "text-muted-foreground/30"
                                )} 
                                fill="currentColor" 
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState<string>("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-5xl mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                ?  "bg-primary text-primary-foreground"
                                :  "bg-secondary/70 text-foreground hover:bg-secondary"
                                )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <span className="text-sm text-muted-foreground">{skill.level}/5</span>
                            </div>
                            <StarRating rating={skill.level} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
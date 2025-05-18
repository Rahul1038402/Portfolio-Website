
const projects = [
    {
        id: 1,
        title: "1 Calc",
        description: "One Stop Destination For Various kinds of Calculators",
        image: "/projects/1calc_ss.png",
        tags: ["HTML", "Tailwind", "JavaScript"],
        githuburl: "https://github.com/Rahul1038402/_1-Calc",
    },

    {
        id: 2,
        title: "Mealify",
        description: "Simple UI Design for Food Ordering",
        image: "/projects/mealify_ss.png",
        tags: ["HTML", "Tailwind", "JavaScript"],
        githuburl: "https://github.com/Rahul1038402/Mealify",
    },

]

export const Projects = () => {
    return (
        <section
            id="projects"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured<span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm passionate about creating elegant solutions to complex
                    problems, and I'm constantly learning new teachnologies and
                    techniques to stay updated and ever-evolving in field of
                    web development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-64 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <h3 className="text-xl font-semibold mt-3 text-primary">{project.title}</h3>
                            <p className="text-muted-foreground">{project.description}</p>


                            <div className="py-6">
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="bg-primary/10 font-medium text-secondary-foreground px-2 py-1 text-sm border rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

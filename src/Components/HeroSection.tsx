export const HeroSection = () => {
    return (
        <section id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:mt-0 mt-12"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl  tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Rahul Kumar</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">Mall</span>
                    </h1>

                    <div className="space-y-4 mx-auto opacity-0 animate-fade-in-delay-3">
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto opacity-0 animate-fade-in-delay-3">
                            As a fullstack developer, I specialize in building responsive and
                            user-friendly websites using <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">TypeScript</span>, and <span className="text-primary font-medium">Tailwind CSS</span>.
                            On the backend, I craft robust logic with <span className="text-primary font-medium">Flask</span> and <span className="text-primary font-medium">FastAPI</span>,
                            using <span className="text-primary font-medium">PostgreSQL</span> for database management.
                            I deploy scalable applications with <span className="text-primary font-medium">AWS</span> and <span className="text-primary font-medium">Docker</span>,
                            ensuring reliable and efficient infrastructure.
                        </p>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            I enjoy turning complex problems into clean, efficient solutions with a focus on
                            performance and design. Always eager to learn and grow, I strive to stay up-to-date
                            with the latest trends in web development.
                        </p>
                    </div>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 text-lg">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

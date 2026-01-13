import ShinyText from "./ui/ShinyText"

export const HeroSection = () => {
    return (
        <section id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center sm:mt-0 mt-12"
        >
            <div className="containermx-0 text-center z-10">
                <div className="space-y-6">
                    <h1 className="max-w-8xl text-5xl md:text-6xl lg:text-8xl tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Rahul Kumar</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">Mall</span>
                    </h1>
                    <ShinyText text="Fullstack Developer" disabled={false} speed={5} className="text-3xl" />

                    <div className="max-w-4xl space-y-4 mx-auto opacity-0 animate-fade-in-delay-3 pt-8">
                        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed mx-auto opacity-0 animate-fade-in-delay-3">
                            Building responsive web apps with <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">TypeScript</span>, and <span className="text-primary font-medium">Tailwind CSS</span>.
                            Backend expertise in <span className="text-primary font-medium">Flask</span>, <span className="text-primary font-medium">FastAPI</span>, and <span className="text-primary font-medium">PostgreSQL</span>.
                            Deploying with <span className="text-primary font-medium">AWS</span> and <span className="text-primary font-medium">Docker</span>.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12 opacity-0 animate-fade-in-delay-4 text-lg mx-8 sm:mx-0">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>

                        <a href="#contact" className="cosmic-button bg-transparent border border-primary text-primary">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

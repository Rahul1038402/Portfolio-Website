import { Briefcase, Check, Code, User, X } from "lucide-react"

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex flex-col justify-center items-center">
              <div className="flex items-center gap-2 mb-2">
                <X className="text-red-500" size={28} />
                <span>Coder</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Check className="text-green-500" size={28} />
                <span>Developer</span>
              </div>
            </h3>

            <p className="text-muted-foreground">
              I enjoy creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay updated and ever-evolving in field of
              web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/rahul_resume.pdf"
                download
                className="cosmic-button bg-transparent border border-primary text-primary"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-col-1 gap-6">
            <div className="bg-transparent backdrop-blur-xl border-[1px] border-primary/40 p-6 rounded-[2.5rem]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-primary font-semibold text-xl pb-2">Web Development</h4>
                  <p>
                    Creating responsive websites and web applications with interactive UI/UX using
                    mordern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-transparent backdrop-blur-xl border-[1px] border-primary/40 p-6 rounded-[2.5rem]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-primary font-semibold text-xl pb-2">Problem Solving</h4>
                  <p>
                    I solve problems efficiently with what I know and learn fast when something new is needed.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-transparent backdrop-blur-xl border-[1px] border-primary/40 p-6 rounded-[2.5rem]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-primary font-semibold text-xl pb-2">Project Management</h4>
                  <p>
                    Leading projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

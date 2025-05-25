import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 flex flex-col items-center md:flex-row md:justify-between md:items-center bg-gray-900">
      {/* Left Section */}
      <div className="flex flex-col items-center md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
                <a className="text-xl text-primary flex items-centre">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Rahul's </span> Portfolio
                    </span>
                </a>
        <p className="text-lg text-gray-200">| 2025 Copyright</p>
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center mt-4 md:mt-0">
        <section className="w-80">
          <div className="flex justify-center space-x-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ig__rahul70/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
            >
                <Instagram size={30}/>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rahul-malll-85989327b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
            >
                <Linkedin size={30}/>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Rahul1038402"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-400 transition-colors duration-300"
            >
                <Github size={30}/>
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

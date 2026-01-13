import { Github, Instagram, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-transparent w-full px-4 py-6 flex flex-col items-center md:flex-row md:justify-between md:items-center text-[hsl(var(--foreground))]">
      {/* Left Section */}
      <div className="flex flex-col items-center md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
        <a className="text-xl text-primary flex items-centre">
          <span className="">
            <span className="text-glow text-foreground"> Rahul's </span> Portfolio
          </span>
        </a>
        <p className="text-lg text-[hsl(var(--foreground))]"><span className="md:visible invisible">|</span> 2026 Copyright</p>
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center mt-4 md:mt-0">
        <section className="w-80">
          <div className="flex justify-center space-x-6">
            {/* X (Twitter) */}
            <a
              href="https://x.com/Rahul_Kr_Mall"
              target="_blank"
              rel="noopener noreferrer">
              <FaXTwitter size={30} className="text-gray-500 hover:text-blue-400 transition-colors duration-300" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ig__rahul70/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
            >
              <Instagram size={30} />
            </a>

            {/* Gmail */}
            <a
              href="mailto:rahul1038402@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 transition-colors duration-300"
            >
              <Mail size={30} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Rahul1038402"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-400 transition-colors duration-300"
            >
              <Github size={30} />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

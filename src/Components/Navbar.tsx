import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

type NavItem = {
    name: string;
    href: string;
};

const navItems: NavItem[] = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isDarkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Check if dark mode is already enabled
        const theme = document.documentElement.classList.contains("dark");
        setDarkMode(theme);
        
        // If no theme is set, default to dark
        if (!theme && !document.documentElement.classList.contains("light")) {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        // Prevent body scroll when menu is open
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed w-full z-40 transition-all duration-300",
                    isScrolled ? "py-4 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <a href="#hero" className="text-xl font-medium text-primary flex items-center">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground"> Rahul's </span> Portfolio
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full transition-all duration-300 hover:bg-foreground/10 focus:outline-none"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <Sun className="h-6 w-6 text-yellow-300" />
                            ) : (
                                <Moon className="h-6 w-6 text-blue-900" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation Buttons */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full transition-all duration-300 hover:bg-foreground/10 focus:outline-none"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5 text-yellow-300" />
                            ) : (
                                <Moon className="h-5 w-5 text-blue-900" />
                            )}
                        </button>
                        <button 
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="p-2 text-foreground relative z-50"
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Outside navbar, sibling element */}
            <div 
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                {/* Close button inside overlay */}
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 p-2 text-foreground"
                    aria-label="Close Menu"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={handleMenuItemClick}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
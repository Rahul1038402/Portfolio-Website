import { ArrowRight, ExternalLink, Github, X, Check } from "lucide-react";
import { useEffect, useState } from "react";

type WorkflowImage = {
    id: number;
    src: string;
    description: string;
};

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demourl: string;
    githuburl: string;
    detailedDescription?: string;
    features?: string[];
    workflowImages?: WorkflowImage[];
};

const projects: Project[] = [
    {
        id: 1,
        title: "Resume AI - Smart Resume Analyzer & Builder (Saas)",
        description: "Comprehensive AI-powered platform for resume analysis, ATS optimization, professional resume building, and job application tracking with Google authentication",
        image: "/projects/resume_ai/img1.png",
        tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Flask", "Cohere AI", "Supabase", "Google OAuth"],
        demourl: "https://resume-ai-rework.vercel.app/",
        githuburl: "https://github.com/Rahul1038402/resume-ai-rework.git",
        detailedDescription: "A comprehensive platform that leverages AI to help job seekers optimize their resumes. Features include intelligent resume analysis, ATS score calculation, professional resume building with templates, and a complete job application tracking system. Built with modern tech stack ensuring scalability and performance.",
        features: [
            "AI-powered resume analysis with detailed insights",
            "ATS score calculation and optimization suggestions",
            "Professional resume templates for various industries",
            "Job application tracking and management system",
            "Google OAuth authentication for secure access",
            "PDF resume parsing and export functionality"
        ],
        workflowImages: [
            { id: 1, src: "/projects/resume_ai/img2.png", description: "Upload your resume for Analysis" },
            { id: 2, src: "/projects/resume_ai/img3.png", description: "Hit Analyze and get AI generated report" },
            { id: 3, src: "/projects/resume_ai/img4.png", description: "Need a ATS friendly template? I got you ;)" },
            { id: 4, src: "/projects/resume_ai/img5.png", description: "Keep a centralized track your Job Applications" },
        ]
    },
    {
        id: 2,
        title: "Posture AI - Rule-Based Bad Posture Detector",
        description: "Full-stack posture detection app leveraging MediaPipe and OpenCV to flag incorrect sitting or exercise posture using rule-based analysis.",
        image: "/projects/posture_ai/img1.png",
        tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "FastAPI", "OpenCV", "MediaPipe"],
        demourl: "https://posture-detection-main.vercel.app/",
        githuburl: "https://github.com/Rahul1038402/Posture-detection-main",
        detailedDescription: "Real-time posture detection system using computer vision and machine learning. The application uses MediaPipe for pose estimation and applies rule-based logic to detect poor posture during work or exercise. Provides instant feedback to help users maintain proper posture and prevent health issues.",
        features: [
            "Real-time pose estimation using MediaPipe",
            "Rule-based posture analysis algorithm",
            "Support for both webcam and video file analysis",
            "Frame-by-frame analysis with visual feedback",
            "Posture correction recommendations",
            "Exercise form validation"
        ],
        workflowImages: [
            { id: 1, src: "/projects/posture_ai/img2.png", description: "Choose between Video/Webcam Analysis" },
            { id: 2, src: "/projects/posture_ai/img3.png", description: "Get the frame by frame analysis report with fix recommendations" },
        ]
    },
    {
        id: 3,
        title: "TeamCamp Lite",
        description: "A Simplified Project Management Tool for Teams",
        image: "/projects/teamcamp_lite/img1.png",
        tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "FastAPI", "Supabase", "Google OAuth"],
        demourl: "#",
        githuburl: "https://github.com/Rahul1038402/TeamCamp-Lite",
        detailedDescription: "A clean and intuitive project management platform designed for small to medium-sized teams. Features comprehensive project tracking, team collaboration tools, and detailed analytics to keep everyone aligned and productive.",
        features: [
            "Centralized project dashboard with overview",
            "Team member management and role assignment",
            "Task creation, assignment, and tracking",
            "File sharing and document management",
            "Detailed project statistics and analytics",
            "Google OAuth for seamless authentication"
        ],
        workflowImages: [
            { id: 1, src: "/projects/teamcamp_lite/img2.png", description: "Login Using your Gmail" },
            { id: 2, src: "/projects/teamcamp_lite/img3.png", description: "All Projects Dashboard (Create new or Access previous ones)" },
            { id: 3, src: "/projects/teamcamp_lite/img4.png", description: "Individual Project Management (Overview, Team Members, Tasks, Files) with Deatiled Stats" },
        ]
    },
    {
        id: 4,
        title: "1 Calc",
        description: "One Stop Destination For Various kinds of Calculators",
        image: "/projects/1calc/img1.png",
        tags: ["HTML", "Tailwind", "JavaScript"],
        demourl: "#",
        githuburl: "https://github.com/Rahul1038402/_1-Calc",
        detailedDescription: "A comprehensive calculator application featuring multiple calculator types in one place. Includes scientific calculator, unit converter, BMI calculator, and more. Built with vanilla JavaScript for optimal performance.",
        features: [
            "Multiple calculator types in one platform",
            "Scientific calculator with advanced functions",
            "Unit converter for various measurements",
            "BMI and health calculators",
            "Internet and network calculators",
            "Fast and responsive vanilla JavaScript implementation"
        ],
        workflowImages: [
            { id: 1, src: "/projects/1calc/img2.png", description: "Choose from categories (Math, Health, Internet)" },
            { id: 2, src: "/projects/1calc/img3.png", description: "Select the required calculator" },
            { id: 3, src: "/projects/1calc/img4.png", description: "Enter the values and hit Solve to get your answer" },
        ]
    },
];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
    return (
        <div
            className="fixed inset-0 bg-black/80 h-screen backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-background rounded-lg max-w-4xl w-full my-8 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 transition-colors z-10"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {/* Modal Content */}
                <div className="p-8">
                    {/* Header */}
                    <h2 className="text-3xl font-bold mb-4 text-primary">{project.title}</h2>

                    {/* Links */}
                    <div className="flex justify-center items-center gap-4 pt-4">
                        {project.demourl !== "#" && (
                            <a
                                href={project.demourl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                <ExternalLink size={18} />
                                <span>Live Demo</span>
                            </a>
                        )}
                        <a
                            href={project.githuburl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-foreground/5 transition-colors"
                        >
                            <Github size={18} />
                            <span>View Code</span>
                        </a>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-16 mb-6 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-primary/10 font-medium text-secondary-foreground px-3 py-1.5 text-sm border rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Description */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Project Details</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.detailedDescription || project.description}
                        </p>
                    </div>

                    {/* Features Section */}
                    {project.features && project.features.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-3 bg-card border rounded-lg"
                                    >
                                        <div className="mt-0.5 flex-shrink-0">
                                            <Check size={18} className="text-primary" />
                                        </div>
                                        <span className="text-muted-foreground text-sm leading-relaxed">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Workflow Section */}
                    {project.workflowImages && project.workflowImages.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-6 text-primary">Workflow</h3>
                            <div className="relative pl-12">
                                {project.workflowImages
                                    .sort((a, b) => a.id - b.id)
                                    .map((workflow, index) => (
                                        <div key={workflow.id} className="relative mb-6">
                                            {/* Step Number */}
                                            <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold z-10">
                                                {workflow.id}
                                            </div>

                                            {/* Horizontal Line to Content */}
                                            <div className="absolute -left-8 top-4 w-8 h-0.5 bg-primary" />

                                            {/* Vertical Line (only if not last item) */}
                                            {project.workflowImages && index < project.workflowImages.length - 1 && (
                                                <div className="absolute -left-8 top-8 w-0.5 h-[calc(100%+1.5rem)] bg-primary" />
                                            )}

                                            {/* Content */}
                                            <div className="bg-card rounded-lg p-4 border">
                                                <div className="w-full aspect-[478/228] overflow-hidden rounded mb-3">
                                                    <img
                                                        src={workflow.src}
                                                        alt={workflow.description}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p className="text-foreground font-medium">{workflow.description}</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <>
            <section id="projects" className="py-24 px-4 relative">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-5xl mb-12 text-center">
                        Featured<span className="text-primary"> Projects</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        I'm passionate about creating elegant solutions to complex
                        problems, and I'm constantly learning new technologies and
                        techniques to stay updated and ever-evolving in field of
                        web development.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-12 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer transition-colors duration-200"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="w-full aspect-[478/228] overflow-hidden rounded mb-3">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4">{project.description}</p>

                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-primary/10 font-medium text-secondary-foreground px-2 py-1 text-sm border rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="bg-primary/10 font-medium text-secondary-foreground px-2 py-1 text-sm border rounded-full">
                                                +{project.tags.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex justify-center items-center text-primary hover:text-primary/70 transition-colors duration-200 gap-3">
                                        View Details
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            className="cosmic-button inline-flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Rahul1038402"
                        >
                            <span>My Github Profile</span>
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}
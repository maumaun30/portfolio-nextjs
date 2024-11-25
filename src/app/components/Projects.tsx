interface Project {
    name: string;
    description: string;
    image: string;
    liveLink?: string;
    repoLink?: string;
}

const projects: Project[] = [
    {
        name: "Portfolio Website",
        description: "A personal portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.",
        image: "/images/portfolio.png",
        liveLink: "https://myportfolio.com",
        repoLink: "https://github.com/myportfolio",
    },
    {
        name: "E-Commerce Platform",
        description: "A full-stack e-commerce application with Laravel backend and React frontend.",
        image: "/images/ecommerce.png",
        liveLink: "https://myecommerce.com",
        repoLink: "https://github.com/myecommerce",
    },
    {
        name: "Blog CMS",
        description: "A custom CMS for managing blogs, featuring a rich text editor and image upload functionality.",
        image: "/images/blogcms.png",
        liveLink: "https://myblogcms.com",
        repoLink: "https://github.com/myblogcms",
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Projects</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        A selection of projects I’ve worked on recently. Click to learn more or view the code.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {project.repoLink && (
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

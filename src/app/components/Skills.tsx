// src/app/components/Skills.tsx

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Skills</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        A collection of the tools and technologies I use to build amazing web experiences.
                    </p>
                </div>

                {/* Skill Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Frontend Skills */}
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Frontend Development</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">React</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">Next.js</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">TailwindCSS</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">JavaScript (ES6+)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Backend Development</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">Node.js</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">Express.js</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">Laravel</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">MySQL / PostgreSQL</span>
                            </li>
                        </ul>
                    </div>

                    {/* Design Skills */}
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Design & Tools</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">Figma</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">Adobe XD</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">Git / GitHub</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="font-semibold">Docker</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

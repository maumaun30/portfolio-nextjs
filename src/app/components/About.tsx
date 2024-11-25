const About: React.FC = () => {
    return (
      <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">A passionate web developer with a focus on creating impactful and accessible web experiences.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Image or Personal Info */}
            <div className="w-full md:w-1/3 flex justify-center">
              <img 
                src="/path/to/your/image.jpg" 
                alt="Your Name" 
                className="rounded-full w-40 h-40 object-cover border-4 border-blue-500" 
              />
            </div>
  
            {/* Description */}
            <div className="w-full md:w-2/3 space-y-4">
              <p className="text-lg leading-relaxed">
                Hi, I'm Maurico Maun, a web developer passionate about building clean, efficient, and user-friendly websites and applications. 
                I specialize in front-end development, using technologies like React, TailwindCSS, and JavaScript to create seamless user experiences. 
                I'm also highly interested in UX/UI design and strive to bring a thoughtful, intuitive approach to the projects I work on.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good game of chess. 
                I'm always eager to learn new skills and push the boundaries of what I can create.
              </p>
  
              {/* Skills List */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Skills & Technologies</h3>
                <ul className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="font-semibold">Frontend:</span>
                    <span>React, Next.js, TailwindCSS, JavaScript</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="font-semibold">Backend:</span>
                    <span>Node.js, Express</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="font-semibold">Design Tools:</span>
                    <span>Figma, Adobe XD</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="font-semibold">Version Control:</span>
                    <span>Git, GitHub</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  
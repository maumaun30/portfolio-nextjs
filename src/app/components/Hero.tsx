// src/app/components/Hero.tsx

const Hero: React.FC = () => {
    return (
      <section className="relative bg-gray-800 text-white h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}></div>
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-6">I'm Maurico Maun, a passionate web developer crafting elegant and functional digital experiences.</p>
          <a
            href="/projects"
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            See My Work
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
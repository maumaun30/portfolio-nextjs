// src/app/components/CTA.tsx

const CTA: React.FC = () => {
    return (
        <section className="py-16 bg-blue-600 text-white text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6">
                    Ready to bring your ideas to life?
                </h2>
                <p className="text-lg mb-8">
                    I’m available for freelance projects and full-time work. Let’s create
                    something amazing together!
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="#contact"
                        className="bg-white text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                        Contact Me
                    </a>
                    <a
                        href="#projects"
                        className="bg-transparent border border-white py-3 px-6 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                    >
                        View My Work
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;

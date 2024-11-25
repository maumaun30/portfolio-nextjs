// src/app/components/Contact.tsx

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Have a project in mind or just want to say hi? Let’s connect!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <strong>Email:</strong> <a href="mailto:hello@example.com" className="text-blue-500 hover:underline">hello@example.com</a>
                            </li>
                            <li>
                                <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123 456 7890</a>
                            </li>
                            <li>
                                <strong>Location:</strong> Your City, Country
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
                                    placeholder="Write your message here..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

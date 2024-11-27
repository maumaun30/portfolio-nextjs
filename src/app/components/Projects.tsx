"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Project {
    name: string;
    description: string;
    featured_image: number; // ID of the Media model
    liveLink?: string;
    repoLink?: string;
    imageUrl?: string; // Holds the resolved media URL
}

interface ProjectsProps {
    itemCount?: number; // Optional prop to specify item count
}

const Projects: React.FC<ProjectsProps> = ({ itemCount }) => {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Helper function to fetch media URL by ID
    const fetchMediaUrl = async (mediaId: number): Promise<string | null> => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/media/${mediaId}`);
            if (!res.ok) throw new Error('Failed to fetch media');

            const relativePath = await res.text(); // e.g., "/storage/media/54824e5f-730f-47e9-9c83-3f97501ec4a4.png"

            // Combine with base URL
            return `${process.env.NEXT_PUBLIC_API_URL}${relativePath}`;
        } catch (err) {
            console.error(`Error fetching media for ID ${mediaId}:`, err);
            return null;
        }
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
                    cache: 'no-store',
                    headers: { 'Content-Type': 'application/json' },
                });
                if (!res.ok) throw new Error('Failed to fetch projects');

                const data: Project[] = await res.json();

                // Fetch media URLs for each project
                const updatedProjects = await Promise.all(
                    data.map(async (project) => {
                        const mediaUrl = await fetchMediaUrl(project.featured_image);
                        return { ...project, imageUrl: mediaUrl };
                    })
                );

                // Apply itemCount to limit the number of projects
                setProjects(itemCount ? updatedProjects.slice(0, itemCount) : updatedProjects);
            } catch (err) {
                setError((err as Error).message);
            }
        };

        fetchProjects();
    }, [itemCount]);

    if (error) {
        return <p className="text-red-500 text-center">Error: {error}</p>;
    }

    if (!projects) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <section id="projects" className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Projects</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        A selection of projects I’ve worked on recently. Click to learn more or view the code.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            {project.imageUrl ? (
                                <Image
                                    src={project.imageUrl}
                                    alt={project.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-300 rounded-md mb-4 flex items-center justify-center">
                                    <span className="text-gray-500">No Image Available</span>
                                </div>
                            )}
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

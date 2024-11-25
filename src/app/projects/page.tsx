import React from 'react';

export default async function ProjectsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    cache: 'no-store', // Avoid caching during development
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  const projects = await res.json();

  console.log(projects);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <div>{project.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

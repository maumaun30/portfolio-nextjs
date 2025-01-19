'use client';

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo or title */}
          <h1 className="text-xl font-semibold">My Portfolio</h1>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-blue-500">Home</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-500">Projects</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

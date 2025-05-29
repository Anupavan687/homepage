import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center text-white">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-5xl font-bold mb-4">John Doe</h1>
          <p className="text-xl mb-8">Full Stack Developer & Tech Enthusiast</p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
            <p className="text-lg leading-relaxed">
              I'm a passionate developer with 5 years of experience building web applications.
              Specialized in React, Node.js, and cloud technologies. Always learning and
              exploring new technologies to create better user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p>React, Vue, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p>Node.js, Python, PostgreSQL, MongoDB</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <p>Git, Docker, AWS, CI/CD</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <FaTwitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
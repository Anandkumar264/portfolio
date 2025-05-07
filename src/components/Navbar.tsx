import React from 'react';

const Navbar = () => (
  <nav className= "bg-black text-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className='w-full flex flex-col justify-center items-center text-center gap-4'>
      <div>
      <h2 className="text-2xl font-bold">Anand Kumar Korkanti</h2>
      </div>
      <div>
      <ul className="flex space-x-4 text-lg font-medium">
        <li><a href="/personalprofile" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/projects" className="hover:underline">Projects</a></li>
        <li><a href="/skills" className="hover:underline">Skills</a></li>
        <li><a href="/education" className="hover:underline">Education</a></li>
        <li><a href="/experience" className="hover:underline">Experience</a></li>
        <li><a href="/achievement" className="hover:underline">Achievements</a></li>
      </ul>
        </div>
        </div>
    </div>
  </nav>
);

export default Navbar;

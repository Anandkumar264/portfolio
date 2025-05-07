import React from "react";

const Achievements = () => (
  <section id="achievements">
    <div className='items-center justify-center flex mt-10'>
      <div className='flex flex-col shadow-md w-[60%] p-6 border border-gray-100 rounded-lg text-left gap-4'>
        <h2 className='font-bold text-3xl text-center'>Achievements & Certifications</h2>
        <ul className='list-disc pl-6 space-y-2 text-gray-800'>
          <li>Certified in Python Fundamentals, Web Technologies, Generative AI</li>
          <li>Developed a full-stack e-commerce platform using React, Node.js, and MongoDB, supporting 1,000+ daily users.</li>
          <li>Achieved 95% test coverage across frontend and backend using Jest, Mocha, and Selenium.</li>
          <li>Designed and implemented responsive UI using Tailwind CSS and integrated SEO best practices.</li>
          <li>Integrated Stripe payment gateway and reduced cart abandonment rate by 20%.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Achievements;

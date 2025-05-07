const Skills = () => (
    <section id="skills">
      <div className='items-center justify-center flex mt-10'>
    <div className='flex flex-col shadow-md w-[60%] h-140 p-4 border border-gray-100 rounded-lg text-center justify-center items-center gap-3'>
        <div className=''></div>
        <h1 className='flex items-center font-bold text-3xl'>My Skills</h1>

        <h2 className="font-bold"> Frontend Development</h2>
        <ul className='list-disc pl-6 space-y-2 text-gray-800'>
            <li>HTML, CSS, Bootstrap, TailwindCSS, React.js, Next.js</li>
        </ul>

        <h2 className="font-bold"> Backend Development</h2>
        <ul className='list-disc pl-6 space-y-2 text-gray-800'>
            <li>C, Python(Django), Node.js, Express.js</li>
        </ul>

        <h2 className="font-bold"> Database Management</h2>
        <ul className='list-disc pl-6 space-y-2 text-gray-800'>
            <li>SQL,MySQL,MongoDB,PostgreSQL</li>
        </ul>

        <h2 className="font-bold">Tools</h2>
        <ul className='list-disc pl-6 space-y-2 text-gray-800'>
            <li>Git,GitHub and Postman</li>
        </ul>

        <h2 className="font-bold"> Soft Skills</h2>
        <ul className='list-disc pl-6 space-y-2 text-gray-800'>
            <li>Problem Solving, Team Collaboration, Communication, Time Management </li>
        </ul>
        </div>
        </div>
    </section>
  );
  
  export default Skills;
  
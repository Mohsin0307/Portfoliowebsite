'use client';
import { useEffect } from 'react';

const About = () => {
 useEffect(() => {
  const circles = document.querySelectorAll('.skill-circle');
  circles.forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (parseInt(percent || '0') / 100) * circumference;
    
    const progressCircle = circle.querySelector('.progress') as SVGCircleElement | null;
    if (progressCircle) {
      progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
      progressCircle.style.strokeDashoffset = `${offset}`;
    }
  });
}, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#044E83] mb-4">About Me</h2>
          <p className="text-xl text-gray-600">Who I Am</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              With a Master's in Arts and a passion for technology, I've combined creativity 
              with technical expertise to build innovative solutions for businesses of all sizes. 
              Whether it's a fully functional e-commerce store or a tailored proposal to secure 
              funding, I provide quality solutions that meet your goals.
            </p>
            
            <div>
              <h3 className="text-2xl font-bold text-[#044E83] mb-4">Project Count</h3>
              <p className="text-gray-700">Over 100 completed</p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#044E83] mb-6 text-center">Skills at a Glance</h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { name: 'HTML', percent: '80' },
                { name: 'CSS', percent: '70' },
                { name: 'JavaScript', percent: '60' },
                { name: 'TypeScript', percent: '80' },
              ].map((skill, index) => (
                <div key={index} className="text-center">
                  <div className="skill-circle relative w-24 h-24 mx-auto" data-percent={skill.percent}>
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="48"
                        cy="48"
                      />
                      <circle
                        className="progress text-[#044E83]"
                        strokeWidth="8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="48"
                        cy="48"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-[#044E83]">
                      {skill.percent}%
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind", "SCSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "PHP", "SQL", "APIs"]
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "Agile", "Figma", "Swagger"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading numbered-heading">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 bg-light-navy rounded-lg hover:bg-light-navy/70 transition-colors"
            >
              <h3 className="text-xl font-semibold text-light-slate mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-navy text-primary font-mono text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';

export default function Education() {
  const education = [
    {
      degree: "Master Sociologie politique",
      institution: "Université Paris 8 Vincennes",
      period: "01/2019 - 01/2021",
      specialization: "Sociologie politique de l'international"
    },
    {
      degree: "Formation Concepteur Développeur d'Applications",
      institution: "Ecole o'clock",
      period: "2022 - 2023"
    },
    {
      degree: "Développeur d'application JavaScript React",
      institution: "OpenClassrooms",
      period: "2022 - 2023"
    }
  ];

  return (
    <section id="education" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading numbered-heading">Education</h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="group p-6 bg-light-navy rounded-lg hover:bg-light-navy/70 transition-colors"
            >
              <h3 className="text-xl font-semibold text-light-slate mb-2">{edu.degree}</h3>
              <p className="text-primary font-mono text-sm">{edu.institution}</p>
              <p className="text-slate mt-2">{edu.period}</p>
              {edu.specialization && (
                <p className="text-slate mt-2">{edu.specialization}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
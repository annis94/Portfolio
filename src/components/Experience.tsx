import React, { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Boostili",
      title: "Stage - développeur web",
      period: "06/2023 - 08/2023",
      location: "Paris",
      duties: [
        "Participation active au développement de projets web avec React Javascript",
        "Collaboration à la réalisation de designs responsifs utilisant Tailwind",
        "Implication dans le processus d'intégration des méthodes agiles"
      ]
    },
    {
      company: "Freelance",
      title: "Intégrateur CMS",
      period: "02/2020 - 01/2022",
      location: "Remote",
      duties: [
        "Déploiement de solutions de sites web clés en main via WordPress et Shopify",
        "En accord avec les objectifs commerciaux des clients",
        "Gestion autonome des projets et relation client"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading numbered-heading">Experience</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-32 flex md:flex-col overflow-x-auto">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 font-mono text-sm text-left border-l-2 focus:outline-none whitespace-nowrap
                  ${activeTab === idx
                    ? 'border-primary text-primary bg-light-navy/50'
                    : 'border-light-navy text-slate hover:bg-light-navy/30 hover:text-primary'
                  }`}
                onClick={() => setActiveTab(idx)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          <div className="flex-1 min-h-[320px]">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`space-y-4 ${activeTab === idx ? 'block' : 'hidden'}`}
              >
                <h3 className="text-xl text-light-slate">
                  {exp.title} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-slate">{exp.period} | {exp.location}</p>
                <ul className="space-y-2">
                  {exp.duties.map((duty, i) => (
                    <li key={i} className="flex items-start text-slate">
                      <span className="text-primary mr-2">▹</span>
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
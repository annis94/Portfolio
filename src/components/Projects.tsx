import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Tableau de bord d'analytics",
      description: "Création d'un tableau de bord de coaching sportif avec intégration de graphiques interactifs pour visualiser les données d'analyse. Documentation complète avec JSDoc et PropTypes.",
      tech: ["React", "Recharts", "Axios", "Node.js"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Application bancaire",
      description: "Interface utilisateur dynamique et responsive avec intégration API pour une application bancaire. Utilisation de Redux pour la gestion d'état global et Swagger pour la documentation.",
      tech: ["React", "Redux", "REST API", "Swagger"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Migration jQuery vers React",
      description: "Conversion d'un plugin jQuery en composant React pour une application financière. Analyse de performance et documentation technique détaillée.",
      tech: ["React", "jQuery", "Performance"],
      links: { github: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading numbered-heading">Quelques-unes de mes Réalisations</h2>
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div key={idx} className="relative grid md:grid-cols-12 gap-4 items-center">
              <div className={`md:col-span-7 ${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'}`}>
                <div className="relative rounded-lg overflow-hidden">
                  
                  <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              <div className={`md:col-span-7 md:col-start-${idx % 2 === 0 ? '6' : '1'} z-10`}>
                <div className="bg-light-navy p-6 rounded-lg">
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-xl font-semibold text-light-slate mb-4">{project.title}</h3>
                  <p className="text-slate mb-4">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 mb-4 font-mono text-sm text-slate">
                    {project.tech.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a href={project.links.github} className="text-light-slate hover:text-primary">
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} className="text-light-slate hover:text-primary">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
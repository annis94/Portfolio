import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Site E-commerce pour Pizzeria O'Humm",
      description: "Développement d'une application web moderne pour la pizzeria O'Humm, permettant aux clients de consulter un menu toujours à jour et de simuler un processus de commande. Ce projet met en œuvre une récupération dynamique des données du menu depuis le site existant du client via une solution de web scraping éthique (avec son autorisation), exposée par une API Next.js interne avec mise en cache.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Scraping", "API Routes"],
      links: { github: "https://github.com/annis94/ohumm-pizza", demo: "https://ohumm-pizza.vercel.app" },
      image: "https://raw.githubusercontent.com/annis94/ohumm-pizza/main/public/og.png"
    },
    {
      title: "Tableau de bord d'analytics",
      description: "Création d'un tableau de bord de coaching sportif avec intégration de graphiques interactifs pour visualiser les données d'analyse. Documentation complète avec JSDoc et PropTypes.",
      tech: ["React", "Recharts", "Axios", "Node.js"],
      links: { github: "https://github.com/annis94/SportSee", demo: "#" }
    },
    {
      title: "Application bancaire",
      description: "Interface utilisateur dynamique et responsive avec intégration API pour une application bancaire. Utilisation de Redux pour la gestion d'état global et Swagger pour la documentation.",
      tech: ["React", "Redux", "REST API", "Swagger"],
      links: { github: "https://github.com/annis94/Argent-Bank", demo: "#" }
    },
    {
      title: "Migration jQuery vers React",
      description: "Conversion d'un plugin jQuery en composant React pour une application financière. Analyse de performance et documentation technique détaillée.",
      tech: ["React", "jQuery", "Performance"],
      links: { github: "#" }
    }
  ];

  return (
    <section id="projets" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading numbered-heading">Quelques-unes de mes Réalisations</h2>
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div key={idx} className="relative grid md:grid-cols-12 gap-4 items-center">
              <div className={`md:col-span-7 ${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'}`}>
                <div className="relative rounded-lg overflow-hidden">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              <div className={`md:col-span-7 md:col-start-${idx % 2 === 0 ? '6' : '1'} z-10`}>
                <div className="bg-light-navy p-6 rounded-lg">
                  <p className="font-mono text-primary text-sm mb-2">Projet Mis en Avant</p>
                  <h3 className="text-xl font-semibold text-light-slate mb-4">{project.title}</h3>
                  <p className="text-slate mb-4">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 mb-4 font-mono text-sm text-slate">
                    {project.tech.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-primary">
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-primary">
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
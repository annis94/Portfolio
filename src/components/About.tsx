import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading numbered-heading">L’histoire derrière l’écran</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4 text-slate">
          <p>
          Développeur Full Stack, j’ai envie d’un nouveau chapitre pro qui a du sens. Pas juste un poste, mais un environnement où je peux vraiment m’investir, apprendre, partager, et construire des projets concrets avec une équipe qui aime ce qu’elle fait.          </p>
          <p>
          J’aime le code, mais ce que je cherche, c’est aussi une vraie dynamique : des idées qui fusent, des défis à relever, et l’envie de faire les choses bien, ensemble. Si je peux apporter ma pierre à l’édifice tout en continuant à évoluer, alors c’est tout ce que je demande.          </p>

            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">JavaScript</li>
              <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">React Js</li>
              <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">Node.js</li>
              <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">Tailwind CSS</li>
              <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">CMS</li>
              <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">SQL</li>
            </ul>
          </div>
          <div className="relative group">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                alt="Profile"
                className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
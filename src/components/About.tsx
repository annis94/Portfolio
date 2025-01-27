import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading numbered-heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4 text-slate">
          <p>
            Développeur Full Stack avec un penchant pour le front-end, je suis en quête d'une nouvelle aventure professionnelle où je pourrais mettre en jeu mon savoir-faire et mon enthousiasme.
          </p>
          <p>
            Attiré par les projets à la fois exigeants et novateurs, je souhaite rejoindre une équipe où je pourrais évoluer et apporter une valeur authentique dans une dynamique créative et stimulante.
          </p>

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
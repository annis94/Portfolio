import React from 'react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center py-32">
      <div className="space-y-5">
        <p className="font-mono text-primary">Salut, moi c'est</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4">
          Anis Moulfi
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6">
          Je crée des solutions pour le web...
        </h2>
        <p className="max-w-2xl text-slate leading-relaxed mb-12">
          Développeur full-stack spécialisé dans la création d'expériences numériques modernes<br /> 
          je m'engage à concevoir des produits performants et accessibles.
        </p>
        <a
          href="#projets"
          className="inline-block px-8 py-4 border border-primary text-primary font-mono rounded hover:bg-primary/10 transition-colors"
        >
          Jetez un œil à mes projets !
        </a>
      </div>
    </div>
  );
}
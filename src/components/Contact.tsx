import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading numbered-heading justify-center">Get In Touch</h2>
        <p className="text-slate mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="space-y-4">
          <p className="text-light-slate">
            <span className="font-mono text-primary">Email:</span> Anis561@gmail.com
          </p>
          <p className="text-light-slate">
            <span className="font-mono text-primary">Phone:</span> +33 753 122 409
          </p>
          <p className="text-light-slate">
            <span className="font-mono text-primary">Location:</span> Clichy, France
          </p>
        </div>
        <a
          href="mailto:Anis561@gmail.com"
          className="inline-block mt-12 px-8 py-4 border-2 border-primary text-primary font-mono rounded hover:bg-primary/10 transition-colors"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
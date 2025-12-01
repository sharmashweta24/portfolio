import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Shweta Sharma
              </span>
            </h1>
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl text-gray-300 font-semibold">
                Python Developer & AI Engineer
              </p>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                Building intelligent systems with Machine Learning, LLMs, and algorithmic trading
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shwetasharma57957@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              <span>Get in Touch</span>
            </a>
            <a
              href="https://github.com/Shwetas0207"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/shwetas0207"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="tel:8879809280"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-blue-400 hover:text-blue-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

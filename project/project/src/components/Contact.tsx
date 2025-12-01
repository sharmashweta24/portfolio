import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shwetasharma57957@gmail.com',
      href: 'mailto:shwetasharma57957@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '8879809280',
      href: 'tel:8879809280'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shwetas0207',
      href: 'https://linkedin.com/in/shwetas0207'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Shwetas0207',
      href: 'https://github.com/Shwetas0207'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-3 p-6 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Icon className="text-blue-400" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-white font-medium text-sm">{info.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 text-center text-gray-400">
          <p>© 2025 Shweta Sharma. Built with React & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}

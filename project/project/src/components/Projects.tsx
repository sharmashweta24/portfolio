import { ExternalLink, Github, TrendingUp, FileText } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Smart AlgoTrading Platform',
      icon: TrendingUp,
      description: 'Real-time multi-exchange trading platform with async trading bots and high-frequency data handling',
      tech: ['FastAPI', 'MongoDB', 'Redis', 'WebSocket', 'AsyncIO', 'Trading APIs', 'Docker', 'JWT Auth'],
      features: [
        'Real-time multi-exchange trading (Binance/Bybit/Gate.io)',
        'Async trading bots (RSI, EMA, SMA, MACD)',
        'Caching, rate limiting, alerts, background tasks',
        'High-frequency data handling & scalable backend architecture'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'ChatGPT-Powered PDF Insights Tool',
      icon: FileText,
      description: 'AI-powered document analysis tool using LangChain for contextual Q&A from PDF documents',
      tech: ['Python', 'FastAPI', 'MongoDB', 'LangChain'],
      features: [
        'Upload PDFs and perform Q&A',
        'Embedding-based contextual responses',
        'Stores all PDFs, logs & queries in MongoDB',
        'Clean API design for document insights'
      ],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-blue-400" size={32} />
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-slate-700 text-gray-300 border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 text-sm">
                      <Github size={16} />
                      <span>View Code</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-300 text-sm">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

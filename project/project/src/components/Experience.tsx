import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Python Engineer',
      company: 'Earnestroi LLP',
      period: 'Oct 2024 – Present',
      responsibilities: [
        'Built scalable APIs with FastAPI using MongoDB & Redis',
        'Processed large-scale trading data for algorithmic trading bots',
        'Built real-time dashboards using Streamlit',
        'Integrated LLMs via Ollama and built LangChain agents for trading insights',
        'Developed real-time systems for low-latency trading'
      ]
    },
    {
      title: 'Python Developer',
      company: 'Riyo Advertising',
      period: 'Aug 2023 – Sep 2024',
      responsibilities: [
        'Wrote reusable Python modules & automation scripts',
        'Assisted in backend improvements with Python & SQL',
        'Worked on file handling, data processing & logical workflows',
        'Helped test, debug, and optimize Python scripts'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-700/30 p-6 sm:p-8 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                    <Briefcase size={24} />
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-300 mt-1">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={18} />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

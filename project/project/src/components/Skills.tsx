import { Server, Brain, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Server,
      title: 'Backend Development',
      color: 'blue',
      skills: ['FastAPI', 'REST APIs', 'MongoDB', 'Redis', 'Git']
    },
    {
      icon: Brain,
      title: 'AI/ML & LLMs',
      color: 'cyan',
      skills: ['LangChain', 'LLM Integration (Ollama)', 'AI Trading Bots']
    },
    {
      icon: Database,
      title: 'Data & Trading Systems',
      color: 'purple',
      skills: ['Algorithmic Trading', 'Real-Time Market Data', 'Streamlit Dashboards']
    },
    {
      icon: Wrench,
      title: 'Tools & Collaboration',
      color: 'green',
      skills: ['Git', 'Agile Workflow', 'Cross-functional Collaboration']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'border-blue-500 text-blue-400',
      cyan: 'border-cyan-500 text-cyan-400',
      purple: 'border-purple-500 text-purple-400',
      green: 'border-green-500 text-green-400'
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={getColorClasses(category.color)} size={28} />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-sm rounded-full border ${getColorClasses(category.color)} bg-slate-700/50`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

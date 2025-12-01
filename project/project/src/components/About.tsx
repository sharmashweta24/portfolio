import { Code2, Brain, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800/50 to-slate-900">
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="space-y-16">
          <div className="space-y-8 text-center">
            <p className="text-2xl sm:text-3xl text-gray-200 leading-relaxed font-medium max-w-4xl mx-auto">
              Shweta Sharma is a Python Developer passionate about Machine Learning, LLMs, AI agents,
              and algorithmic trading systems. She specializes in backend development, FastAPI,
              LangChain workflows, and real-time trading data pipelines.
            </p>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
              With a strong foundation in building scalable systems and integrating cutting-edge AI
              technologies, I create solutions that bridge the gap between data science and production-ready
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <Code2 className="text-blue-400 mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-3">Backend Development</h3>
              <p className="text-gray-400 text-lg">
                Building robust APIs and scalable systems with FastAPI, MongoDB, and Redis
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <Brain className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400 text-lg">
                Integrating LLMs, building AI agents with LangChain, and creating intelligent systems
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <TrendingUp className="text-blue-400 mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-3">Algorithmic Trading</h3>
              <p className="text-gray-400 text-lg">
                Developing real-time trading bots and high-frequency data processing systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

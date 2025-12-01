import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-blue-400">Shweta Sharma</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-700 rounded-md transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

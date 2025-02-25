import { Trans } from "@lingui/react/macro";
import {
  Github,
  Code,
  GitBranch,
  Package,
  LayoutDashboard,
  Terminal,
} from "lucide-react";
import LanguageSwitcher from "~/components/LanguageSwitcher";
import ThemeToggle from "~/components/ThemeToggle";

export default function Home() {
  const features = [
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: <Trans>Modular Architecture</Trans>,
      description: (
        <Trans>
          Clean separation of client/server concerns with SSR support
        </Trans>
      ),
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: <Trans>Production Grade</Trans>,
      description: (
        <Trans>Optimized builds with Tree-shaking & Code splitting</Trans>
      ),
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: <Trans>Git Ready</Trans>,
      description: <Trans>Pre-configured hooks and commit conventions</Trans>,
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: <Trans>Type Safe</Trans>,
      description: (
        <Trans>Full TypeScript integration with strict checks</Trans>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen font-lucida antialiased overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer">
                Reactham
              </span>
              <span className="text-xs text-purple-600 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                v1.0.0
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
              <a
                href="https://github.com/AdhamALmeklhafi/"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-20 animate-gradient-flow" />
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 animate-fade-in">
        <div className="text-center space-y-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            <span className="block mb-4">Modern React Stack</span>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <Trans>Enterprise Ready Foundation</Trans>
            </span>
          </h1>
          <p className="text-xl font-mono text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <Trans>
              A meticulously crafted template for building production-grade
              applications with TypeScript, React Router, and modern tooling.
            </Trans>
          </p>
          <div className="pt-8 flex justify-center gap-6">
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-xl font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Trans>Get Started</Trans>
            </button>
            <a
              href="https://github.com/AdhamALmeklhafi/reactham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-10 py-4 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                <Github className="w-5 h-5" />
                <Trans>View on GitHub</Trans>
              </button>
            </a>
          </div>
        </div>

        <div className="mt-28 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-mono dark:text-gray-400 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-28 bg-gray-50 dark:bg-gray-800 rounded-2xl p-10 animate-fade-in delay-200 shadow-inner border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
              terminal
            </span>
            <button className="text-gray-400 hover:text-indigo-500 transition-colors">
              <Terminal className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <code className="block font-mono text-gray-900 dark:text-gray-100">
              <span className="text-indigo-500">pnpm</span> create
              reactham@latest
            </code>
            <code className="block font-mono text-gray-500 dark:text-gray-400">
              <span className="text-green-600">✔</span> Scaffolding project in
              ./reactham
            </code>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-28 animate-fade-in delay-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              <Trans>
                © {new Date().getFullYear()} Reactham. MIT License.
              </Trans>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 text-sm transition-colors"
              >
                <Trans>Changelog</Trans>
              </a>
              <a
                href="https://github.com/AdhamALmeklhafi/reactham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 text-sm transition-colors"
              >
                <Trans>GitHub</Trans>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

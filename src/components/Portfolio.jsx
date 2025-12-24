import React, { useState, useEffect } from "react";
import TosinImage from "../Images/Tosin.png";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Menu,
  X,
  ChevronDown,
  Star,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UPDATED: All 6 projects with complexity levels
  const projects = [
    // Advanced Projects
    {
      id: 4,
      title: "AI Chat Assistant",
      description:
        "Intelligent chat application featuring real-time AI responses powered by Claude AI. Demonstrates advanced API integration with message history, export functionality, and modern chat interface.",
      image: "🤖",
      tech: ["React", "Claude API", "Tailwind CSS", "LocalStorage"],
      liveUrl: "https://ai-chat-assistant-orcin.vercel.app/",
      githubUrl: "https://github.com/TPADEJUWON/ai-chat-assistant",
      features: [
        "AI Responses",
        "Message History",
        "Export Chat",
        "Real-time Updates",
      ],
      category: "advanced",
      complexity: "Advanced",
    },
    {
      id: 5,
      title: "Finance Dashboard",
      description:
        "Comprehensive finance tracker with interactive charts, budget management, and detailed expense analysis. Features pie charts, line graphs, and 6-month trend analysis with CSV export.",
      image: "💰",
      tech: ["React", "Recharts", "Tailwind CSS", "Data Viz"],
      liveUrl: "https://finance-dashboard-blush-delta.vercel.app/",
      githubUrl: "https://github.com/TPADEJUWON/finance-dashboard",
      features: [
        "Interactive Charts",
        "Budget Tracking",
        "CSV Export",
        "Trend Analysis",
      ],
      category: "advanced",
      complexity: "Advanced",
    },
    {
      id: 6,
      title: "Crypto Tracker",
      description:
        "Real-time cryptocurrency tracker with live prices, portfolio management, and market analytics. Tracks top 100 cryptos with auto-refresh, favorites, and profit/loss calculations.",
      image: "📈",
      tech: ["React", "CoinGecko API", "Recharts", "Real-time Data"],
      liveUrl: "https://crypto-tracker-theta-drab.vercel.app/",
      githubUrl: "https://github.com/TPADEJUWON/crypto-tracker",
      features: [
        "Live Prices",
        "Portfolio Tracking",
        "Market Analytics",
        "7d Charts",
      ],
      category: "advanced",
      complexity: "Advanced",
    },
    // Intermediate Projects
    {
      id: 1,
      title: "Task Manager Pro",
      description:
        "Modern task management application with priority levels, smart filtering, and local data persistence. Features real-time statistics dashboard and full CRUD operations.",
      image: "📝",
      tech: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
      liveUrl: "https://task-manager-app-rzwp.vercel.app/",
      githubUrl: "https://github.com/TPADEJUWON/task-manager-app",
      features: [
        "Priority Management",
        "Smart Filtering",
        "Data Persistence",
        "Real-time Stats",
      ],
      category: "intermediate",
      complexity: "Intermediate",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "Real-time weather application providing current conditions and 5-day forecasts for cities worldwide. Features dynamic backgrounds that adapt to weather conditions.",
      image: "🌤️",
      tech: ["React", "REST API", "Tailwind CSS", "Open-Meteo API"],
      liveUrl: "https://weather-dashboard-lac-tau.vercel.app/",
      githubUrl: "https://github.com/TPADEJUWON/weather-dashboard",
      features: [
        "Global Coverage",
        "5-Day Forecast",
        "Dynamic UI",
        "Real-time Data",
      ],
      category: "intermediate",
      complexity: "Intermediate",
    },
    {
      id: 3,
      title: "ShopHub E-commerce",
      description:
        "Full-featured product gallery with advanced filtering, shopping cart, and favorites functionality. Demonstrates complex state management and user interactions.",
      image: "🛒",
      tech: ["React", "JavaScript", "Tailwind CSS", "State Management"],
      liveUrl: "https://ecommerce-gallery-rho.vercel.app/",
      githubUrl: "https://github.com/TPADEJUWON/ecommerce-gallery",
      features: ["Smart Search", "Cart System", "Multi-filter", "Wishlist"],
      category: "intermediate",
      complexity: "Intermediate",
    },
  ];

  const skills = {
    Frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
    "Data & APIs": [
      "REST APIs",
      "Recharts",
      "Data Visualization",
      "Real-time Data",
      "API Integration",
    ],
    "Tools & Others": [
      "Git & GitHub",
      "React Hooks",
      "State Management",
      "VS Code",
      "npm/yarn",
    ],
    "Currently Learning": [
      "TypeScript",
      "Next.js",
      "Redux",
      "Testing (Jest)",
      "Node.js",
    ],
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const advancedProjects = projects.filter((p) => p.complexity === "Advanced");
  const intermediateProjects = projects.filter(
    (p) => p.complexity === "Intermediate"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold transition-colors ${
                  scrolled ? "text-blue-600" : "text-white"
                }`}
              >
                TA
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize font-medium transition-colors ${
                      scrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-white hover:text-blue-200"
                    } ${activeSection === section ? "text-blue-600" : ""}`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
            >
              {mobileMenuOpen ? (
                <X
                  className={scrolled ? "text-gray-700" : "text-white"}
                  size={24}
                />
              ) : (
                <Menu
                  className={scrolled ? "text-gray-700" : "text-white"}
                  size={24}
                />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              {["home", "about", "projects", "skills", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 capitalize"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-6xl shadow-2xl">
              <img
                src={TosinImage}
                alt="Tosin"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-300">Tosin Adejuwon</span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            React & JavaScript Developer
          </p>

          <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-2xl mx-auto">
            Building modern web applications with clean code, from task managers
            to AI-powered chatbots
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2"
            >
              View My Work
              <ExternalLink size={18} />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/TPADEJUWON"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/tosin-adejuwon-08507b110/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:tosin0601@gmail.com"
              className="hover:text-yellow-300 transition"
            >
              <Mail size={28} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">💼</div>
                  <p className="text-xl font-semibold text-gray-700">
                    Frontend Developer
                  </p>
                  <p className="text-gray-600">
                    Specialized in React & JavaScript
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate <strong>Frontend Developer</strong>{" "}
                specializing in building modern web applications with{" "}
                <strong>React</strong> and <strong>JavaScript</strong>. From
                simple task managers to complex AI-powered applications, I love
                turning ideas into reality.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My portfolio highlights practical, problem-solving projects that
                showcase my ability to work with APIs, data visualization,
                real-time updates, and complex state management. I continuously
                refine my skills and take on more challenging builds.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">
                    Problem-Solving Focus
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-600">
                    Continuous Improvement
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Dedication</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/TPADEJUWON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition text-center font-semibold"
                >
                  GitHub Profile
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-center font-semibold"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Showcasing my growth through increasingly complex, real-world builds
          </p>

          {/* Advanced Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
                <span className="text-white font-bold">⚡Projects</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-purple-300 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-200"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-48 flex items-center justify-center text-8xl relative">
                    {project.image}
                    {/*<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-purple-600">
                        ADVANCED
                      </span>
                    </div>*/}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 space-y-1">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Star
                            size={14}
                            className="text-purple-500 fill-purple-500"
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 font-semibold"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition flex items-center justify-center gap-2 font-semibold"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intermediate Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-full">
                <span className="text-white font-bold">🚀 Projects</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-300 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {intermediateProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-48 flex items-center justify-center text-8xl">
                    {project.image}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 space-y-1">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition flex items-center justify-center gap-2 font-semibold"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/TPADEJUWON"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition font-semibold"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Technologies I use to build amazing applications
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <Code size={20} className="text-blue-600" />
                  {category}
                </h3>
                <div className="space-y-2">
                  {items.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-12 text-blue-100">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:tosin0601@gmail.com"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition"
            >
              <Mail size={32} className="mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-100 text-sm">tosin0601@gmail.com</p>
            </a>

            <a
              href="https://github.com/TPADEJUWON"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition"
            >
              <Github size={32} className="mx-auto mb-3" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-blue-100 text-sm">@TPADEJUWON</p>
            </a>

            <a
              href="https://www.linkedin.com/in/tosin-adejuwon-08507b110/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition"
            >
              <Linkedin size={32} className="mx-auto mb-3" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-blue-100 text-sm">Connect with me</p>
            </a>
          </div>

          <a
            href="mailto:tosin0601@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition"
          >
            <Mail size={24} />
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Tosin Adejuwon. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Real-world Projects • React • JavaScript • Tailwind CSS • Built with
            ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}

import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Database,
  Users,
  ChevronDown,
  // MapPin,
  Phone,
  Download,
} from "lucide-react";
import enterpriseImg from "../src/images/enterprise-data-visualization-platform.jpg";
import hospitalImg from "../src/images/hospital-management-system.jpg";
import genAiImg from "../src/images/genai-app.jpg";
import migrationImg from "../src/images/js-to-ts-migration.jpg";
import picOfMe from "../src/images/picofme.png";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const skills = [
  //   { name: "Angular", level: 95, color: "bg-red-500" },
  //   { name: "TypeScript", level: 90, color: "bg-blue-500" },
  //   { name: "JavaScript ES6+", level: 95, color: "bg-yellow-500" },
  //   { name: "HTML5/CSS3", level: 98, color: "bg-orange-500" },
  //   { name: "Plotly.js", level: 88, color: "bg-purple-500" },
  //   { name: "Testing (Jasmine/Playwright)", level: 90, color: "bg-teal-500" },
  //   { name: "Node.js/ASP.NET", level: 85, color: "bg-green-500" },
  //   { name: "SQL", level: 80, color: "bg-blue-600" },
  // ];

  const experiences = [
    {
      title: "Senior Project Engineer",
      company: "Soliton Technologies",
      duration: "Sep 2023 - Present",
      location: "Coimbatore, IN",
      achievements: [
        "Led micro front-end architecture development, reducing integration time by 10%",
        "Converted 2+ epics into reusable feature modules, designed HLDs, and architected shared UI components used by 3+ product teams, resulting in 30% code reuse.",
        "Built 100+ test cases, increasing coverage from 40% to 85%",
        "Delivered 10+ data visualization features, reducing report delivery time by 50%",
        "Mentored 4+ junior developers and conducted 4+ tech sessions",
        "Led Gen AI POCs demonstrating 70% automation potential",
      ],
    },
    {
      title: "Project Engineer",
      company: "Soliton Technologies",
      duration: "Sep 2022 - Sep 2023",
      location: "Coimbatore, IN",
      achievements: [
        "Delivered 10+ Angular application features with reusable architecture",
        "Optimized SQL queries, reducing execution time by 20%",
        "Migrated ReactJS project to TypeScript for enhanced type safety",
        "Met 100% sprint goals across 6 sprints",
      ],
    },
    {
      title: "Engineer",
      company: "Tata Elxsi Ltd.",
      duration: "Aug 2021 - Sep 2022",
      location: "Bangalore, IN",
      achievements: [
        "Built Angular components for real-time hospital monitoring systems",
        "Created interactive data visualization tools for medical staff",
        "Collaborated on REST API implementation using C# ASP.NET",
      ],
    },
  ];

  const projects = [
    {
      title: "Enterprise Data Visualization Platform",
      description:
        "Micro front-end architecture with Angular, featuring advanced data visualization using Plotly.js and Monaco Editor",
      image: enterpriseImg,
      tech: [
        "Angular",
        "TypeScript",
        "Plotly.js",
        "Monaco Editor",
        "Micro Frontend",
      ],
      details:
        "Reduced integration time by 10% and improved deployment modularity",
    },
    {
      title: "Hospital Management System",
      description:
        "Real-time patient data tracking system with live database integration and interactive dashboards",
      image: hospitalImg,
      tech: ["Angular", "C# ASP.NET", "MSSQL", "Real-time Data"],
      details: "Enabled medical staff to track live patient data efficiently",
    },
    {
      title: "Gen AI Specification Compliance Assistant",
      description:
        "AI-powered Specification Compliance Assistant, for analyzing product specifications and their compliance",
      image: genAiImg,
      tech: ["Gen AI", "Python", "Document Processing", "Automation"],
      details: "App helps move from a traditional automated app to an AI-powered conversational one. Also, teams can focus less on crunching data and more on improving product quality.",
      github: "https://github.com/ParamasivamGnanasekaran/scm.ai",
      // demo: 'https://data-viz-enterprise.netlify.app'
    },
    {
      title: 'React TypeScript Migration',
      description: 'Successfully migrated legacy ReactJS application to TypeScript for enhanced type safety and developer experience',
      image: migrationImg,
      tech: ['React', 'TypeScript', 'Migration', 'Code Refactoring'],
      details: 'Improved code reliability and reduced runtime errors by 40%',
    },
  ];

  const technologies = [
                  "Angular",
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Plotly.js",
                  "Monaco Editor",
                  "C#",
                  "Node.js",
                  "ASP.NET Web API",
                  "MSSQL",
                  "Jasmine",
                  "Playwright",
                  "Gen AI",
                  "Azure DevOps",
                  "Git",
                  "Data Visualization Tools", 
                  "Responsive Web Design", 
                  "Agile Development"
                ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  // const AnimatedSkillBar = ({ skill, index }) => {
  //   const [width, setWidth] = useState(0);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setWidth(skill.level);
  //     }, index * 200);
  //     return () => clearTimeout(timer);
  //   }, [skill.level, index]);

  //   return (
  //     <div className="mb-4 sm:mb-6">
  //       <div className="flex justify-between mb-2">
  //         <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
  //           {skill.name}
  //         </span>
  //         <span className="text-sm text-gray-600 dark:text-gray-400">
  //           {skill.level}%
  //         </span>
  //       </div>
  //       <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3">
  //         <div
  //           className={`h-2 sm:h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
  //           style={{ width: `${width}%` }}
  //         />
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Paramasivam Gnanasekaran
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-600 text-sm lg:text-base ${
                    activeSection === item ? "text-blue-600" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
              <div className="px-4 py-4 space-y-2">
                {[
                  "home",
                  "about",
                  "experience",
                  "skills",
                  "projects",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-3 px-2 capitalize hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-4 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Paramasivam Gnanasekaran
              </span>
            </h1>
            {/* <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              Software Developer
            </h2> */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              4+ years of experience building scalable, data-driven web applications.
              Skilled in Angular, React, and modern frontend architectures, delivering high-performance and user-centric solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                View My Work
              </button>
              <a
                href="https://drive.google.com/file/d/1oPjS2b5g-WgGfuORHshKGxfkLVwk8gw4/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
                download="Paramasivam_Gnanasekaran_Resume.pdf"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>

            {/* <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/in/paramasivam-gnanasekaran-51681918b/"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:paramasivamingur07@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/paramasivam-g"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div> */}

            {/* Contact Info */}
            {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-8148776477</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Erode, Tamil Nadu, IN</span>
              </div>
            </div> */}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
              About Me
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-1 lg:order-1">
                <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
                  {/* <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <Code
                      size={60}
                      className="sm:w-20 sm:h-20 text-gray-600 dark:text-gray-400"
                    />
                  </div> */}
                  <img
                  src={picOfMe}
                  alt="Paramasivam-Gnanasekaran"
                  className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center"
                />
                  </div>
              </div>

              <div className="order-2 lg:order-2">
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Passionate software developer with 4+ years of experience
                  building scalable, data-driven web applications. I specialize
                  in developing modular front-end architectures, integrating
                  advanced visualization tools, and driving Gen AI-based
                  solutions.
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  My expertise spans Angular, React, TypeScript, and modern
                  testing frameworks. I'm experienced in Agile Scrum practices,
                  requirement analysis, and cross-functional collaboration, with
                  a proven track record of mentoring junior developers and
                  delivering customer-focused features.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                    <Database
                      className="mx-auto mb-2 text-blue-500"
                      size={20}
                    />
                    <h3 className="font-semibold text-sm sm:text-base">
                      Data Visualization
                    </h3>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                    <Code className="mx-auto mb-2 text-green-500" size={20} />
                    <h3 className="font-semibold text-sm sm:text-base">
                      Micro Frontend
                    </h3>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                    <Users className="mx-auto mb-2 text-purple-500" size={20} />
                    <h3 className="font-semibold text-sm sm:text-base">
                      Team Leadership
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
              Professional Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
              Technical Skills
            </h2>

            {/* <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {skills.map((skill, index) => (
                <AnimatedSkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div> */}

            <div className="mt-8 sm:mt-12 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Technologies & Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3">
                    {project.description}
                  </p>
                  <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-4">
                    {project.details}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.github || project.demo) && (
                    <div className="flex space-x-4 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Github size={16} className="mr-1" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed">
              Interested in collaborating or have a project in mind? I'd love to
              discuss how we can work together to create something amazing.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 rounded-2xl text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Get In Touch
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <a
                  href="mailto:paramasivamingur07@gmail.com"
                  className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Mail size={20} className="sm:w-6 sm:h-6 mb-2" />
                  <span className="text-sm sm:text-base">Email</span>
                  {/* <span className="text-xs mt-1 opacity-90">paramasivamingur07@gmail.com</span> */}
                </a>
                <a
                  href="https://www.linkedin.com/in/paramasivam-gnanasekaran-51681918b/"
                  className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={20} className="sm:w-6 sm:h-6 mb-2" />
                  <span className="text-sm sm:text-base">LinkedIn</span>
                  {/* <span className="text-xs mt-1 opacity-90">Connect with me</span> */}
                </a>
                <a
                  href="tel:+918148776477"
                  className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Phone size={20} className="sm:w-6 sm:h-6 mb-2" />
                  <span className="text-sm sm:text-base">Phone</span>
                  {/* <span className="text-xs mt-1 opacity-90">+91-8148776477</span> */}
                </a>
                <a
                  href="https://drive.google.com/file/d/1oPjS2b5g-WgGfuORHshKGxfkLVwk8gw4/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                  download="Paramasivam_Gnanasekaran_Resume.pdf"
                  className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Download size={20} className="sm:w-6 sm:h-6 mb-2" />
                  <span className="text-sm sm:text-base">Resume</span>
                  {/* <span className="text-xs mt-1 opacity-90">Download PDF</span> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-6 sm:py-8 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base">
            &copy; 2025 Paramasivam Gnanasekaran.
          </p>
          <p className="text-xs sm:text-sm mt-2 text-gray-400">
            Software Developer | 4+ Years Experience
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

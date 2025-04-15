import {
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X
} from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Nikhil-Mishra-Resume.pdf";
    link.download = "Nikhil-Mishra-Resume.pdf";
    link.click();
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <span className="text-xl font-bold">Nikhil Mishra</span> */}
            <a
  href="#about"
  className="inline-flex items-center gap-2 text-xl font-bold"
>Nikhil Mishra</a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="hover:text-gray-600 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-gray-600 transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="hover:text-gray-600 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-gray-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-gray-600 transition-colors"
              >
                Contact
              </a>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
              <a
  href="/Nikhil-Mishra-Resume.pdf"
  download
  className="inline-flex items-center gap-2 "
>
  Resume
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
    />
  </svg>
</a>

                {/* <Download size={16}  onClick={handleDownload}/>
                Resume*/}
              </button> 
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="px-4 py-2 space-y-1">
              <a href="#about" className="block py-2">
                About
              </a>
              <a href="#skills" className="block py-2">
                Skills
              </a>
              <a href="#experience" className="block py-2">
                Experience
              </a>
              <a href="#projects" className="block py-2">
                Projects
              </a>
              <a href="#contact" className="block py-2">
                Contact
              </a>
              <button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 justify-center">
                <Download size={16} onClick={handleDownload}/>
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Hi, I'm Nikhil Mishra
              <br />
              <span className="text-gray-600">Full Stack Developer</span>
            </h1>
            <p className="text-gray-600 text-lg">
              With 3+ years of experience, I’ve built scalable, high-performance
              web applications using Java, Spring Boot, Angular, and PostgreSQL.
              At TCS, I’ve led API development, boosted system efficiency by
              20%, and implemented real-time data processing with Kafka. I
              specialize in CI/CD pipelines (Jenkins, Maven), secure
              microservices, and writing clean, testable code using JUnit and
              Mockito. Grounded in Agile methodologies, I thrive in
              collaborative environments, consistently delivering reliable and
              impactful solutions. I’m driven by continuous learning,
              performance optimization, and crafting technology that solves
              real-world problems.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              >
                Contact Me
                <ChevronRight size={16} />
              </a>
              <a
                href="#projects"
                className="border border-black px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img
              src="/Image OF ME.jpg"
              alt="NikhilKumar Mishra"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li>Angular.js</li>
                <li>HTML</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4">DevOps</h3>
              <ul className="space-y-2">
                <li>Jenkins</li>
                <li>CI/CD</li>
                <li>Linux</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4">Tools</h3>
              <ul className="space-y-2">
                <li>Git</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-[200px,1fr] gap-8">
              <div>
                <p className="text-gray-600">2021 - Present</p>
                <p className="font-bold">Tata Consultancy Services</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Senior Software Engineer
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Wrote unit and integration tests with JUnit and Mockito,
                    increasing test coverage by 30%
                  </li>
                  <li>
                    Used Git for version control and team collaboration,
                    streamlining development workflows
                  </li>
                  <li>
                    Set up and maintained CI/CD pipelines using Jenkins and
                    Maven for faster, reliable deployments
                  </li>
                  <li>
                    Developed REST APIs using Spring Boot and Angular for
                    seamless backend-frontend integration
                  </li>
                  <li>
                    Improved system performance by 20% through optimized backend
                    development with Java, Spring Boot, and PostgreSQL
                  </li>
                  <li>
                    Designed and implemented Kafka-based messaging for real-time
                    data streaming, boosting processing speed by 25%
                  </li>
                  <li>
                    Collaborated with Agile teams, consistently achieving 100%
                    sprint completion for key deliverables
                  </li>
                  <li>
                    Built and maintained RESTful APIs serving 5,000+ daily users
                    across web applications
                  </li>
                  <li>
                    Led a team of 10 engineers, managing requirements, code
                    quality, and project delivery
                  </li>
                  <li>
                    Reduced post-deployment issues by 15% through best practices
                    and thorough testing
                  </li>
                  <li>
                    Engaged with clients to understand needs and deliver
                    innovative, user-focused solutions
                  </li>
                </ul>
              </div>
            </div>

          
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1].map((project) => (
              <div
                key={project}
                className="bg-white rounded-xl overflow-hidden shadow-sm group"
              >
                <div className="aspect-video bg-gray-100">
                <img
              src="../Project.png"
              alt="NikhilKumar Mishra"
              className="object-cover w-full h-full"
            />
                </div>
                <div className="p-6">
                  {/* <h3 className="font-bold text-xl mb-2">Project {project}</h3> */}
                  <h3 className="font-bold text-xl mb-2">Resourcing</h3>
                  <p className="text-gray-600 mb-4">
                    • Created a full-stack web application using with Java serving a REST API with Angular as the frontend
  <br />• Led the development of a resource allocation platform where associates could select projects based on their skill
  sets, improving project-team matching
  <br />• Designed and implemented a resource management system that empowered associates to choose projects based on
  their competencies, streamlining the assignment process for project managers and ensuring the right skills were
  applied to each project, enhancing team performance and project outcomes
                  </p>
                  {/* <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-sm flex items-center gap-1 hover:underline"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href="#"
                      className="text-sm flex items-center gap-1 hover:underline"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:john@example.com"
                  className="flex items-center gap-2 hover:text-gray-600"
                >
                  <Mail size={20} />
                  nikhilmishra218@gmail.com
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-gray-600"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-gray-600"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          © {new Date().getFullYear()} Nikhil Mishra. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;

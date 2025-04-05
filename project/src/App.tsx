import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Award, Star, Calendar, MapPin, Building2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 transform-origin-0"
        style={{ scaleX: scaleProgress }}
      />
      
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-sm"
      >
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold"
          >
            Nikhil Mishra
          </motion.h1>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex gap-6"
          >
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
          </motion.div>
        </nav>
      </motion.header>

      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={staggerContainer}
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="max-w-6xl mx-auto px-4 py-20">
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.img 
                variants={fadeIn}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop"
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover mx-auto shadow-xl"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h2 variants={fadeIn} className="text-5xl font-bold mb-4">
                Nikhil Mishra
              </motion.h2>
              <motion.h3 variants={fadeIn} className="text-2xl text-blue-400 mb-6">
                System Engineer at TCS
              </motion.h3>
              <motion.div variants={fadeIn} className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <Mail size={18} className="text-blue-400" />
                <span>nikhilmishra218@gmail.com</span>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center gap-2 justify-center md:justify-start mb-6">
                <MapPin size={18} className="text-blue-400" />
                <span>Thane, Maharashtra</span>
              </motion.div>
              <motion.div variants={fadeIn} className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/nikhil-mishra-5b6336173/" target="_blank" rel="noopener noreferrer" 
                   className="p-2 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="tel:+917219687774" className="p-2 hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="/resume.pdf" download className="p-2 hover:text-blue-400 transition-colors">
                  <Download size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <AwardsSection />
      <SkillsSection />

      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Nikhil Mishra. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-gray-800/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center">
          Professional Experience
        </motion.h2>
        <div className="grid gap-8">
          <ExperienceCard 
            title="System Engineer"
            company="Tata Consultancy Services"
            period="Oct 2022 - Present"
            location="Thane, TH"
            description={[
              "Developed REST APIs using Spring Boot and Angular for efficient data transfer",
              "Enhanced system efficiency by 20% through optimized database queries",
              "Designed and implemented Kafka-based messaging systems",
              "Led a team of 10 software engineers",
              "Created and maintained RESTful APIs supporting 5,000+ daily users"
            ]}
          />
          <ExperienceCard 
            title="Graduate Engineer"
            company="Tata Consultancy Services"
            period="Oct 2021 - Oct 2022"
            location="Thane, TH"
            description={[
              "Worked on SAST and DAST security testing tools",
              "Updated technology stack to Angular 15 and latest Spring Boot versions",
              "Managed 4 microservices with robust security measures",
              "Participated in code reviews and best practices implementation"
            ]}
          />
        </div>
      </div>
    </motion.section>
  );
}

function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center">
          Projects
        </motion.h2>
        <motion.div variants={fadeIn} className="grid gap-8">
          <ProjectCard 
            title="Resourcing Platform"
            technologies="Java, Angular, PostgreSQL"
            period="Oct 2021 - Present"
            description={[
              "Created a full-stack web application with Java REST API and Angular frontend",
              "Led development of resource allocation platform",
              "Implemented skill-based project matching system",
              "Streamlined project assignment process"
            ]}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="education"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-gray-800/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center">
          Education
        </motion.h2>
        <div className="grid gap-8">
          <EducationCard 
            degree="Bachelor of Science in Computer Science"
            institution="Mumbai University, Viva College"
            period="July 2017 - October 2020"
            location="Mumbai, MH"
          />
          <EducationCard 
            degree="Higher Secondary Certificate"
            institution="Maharashtra State Board, Adarsh Education Society"
            period="July 2015 - October 2017"
            location="Mumbai, MH"
          />
        </div>
      </div>
    </motion.section>
  );
}

function AwardsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="awards"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center">
          Awards & Recognition
        </motion.h2>
        <div className="grid gap-8">
          <AwardCard 
            title="Service and Commitment Award"
            period="Oct 2024 - Oct 2026"
            description="Dedicated 3 years to TCS, demonstrating strong passion for coding and continuous learning"
          />
          <AwardCard 
            title="Star of the Month"
            period="Dec 2023 - Present"
            description="Successfully deployed project live, earning recognition for outstanding performance"
          />
        </div>
      </div>
    </motion.section>
  );
}

function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = {
    "Languages": ["Java", "SQL (Postgres)", "HTML/CSS"],
    "Frameworks": ["Angular", "JUnit", "Spring Boot"],
    "Developer Tools": ["Git", "VS Code", "IntelliJ", "Eclipse"],
    "Others": ["Agile", "Jenkins", "Maven", "Burp Suite", "REST API", "Microservices"]
  };

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-gray-800/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center">
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={fadeIn}
              className="bg-gray-900/50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
              <ul className="space-y-2">
                {skillList.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ExperienceCard({ title, company, period, location, description }) {
  return (
    <motion.div 
      variants={slideIn}
      className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900/70 transition-colors"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Building2 size={18} className="text-blue-400" />
          <span className="text-blue-400">{company}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-gray-400" />
          <span className="text-gray-400">{period}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-gray-400" />
          <span className="text-gray-400">{location}</span>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ title, technologies, period, description }) {
  return (
    <motion.div 
      variants={fadeIn}
      className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900/70 transition-colors"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={18} className="text-gray-400" />
        <span className="text-gray-400">{period}</span>
      </div>
      <p className="text-blue-400 mb-4">{technologies}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function EducationCard({ degree, institution, period, location }) {
  return (
    <motion.div 
      variants={fadeIn}
      className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900/70 transition-colors"
    >
      <h3 className="text-xl font-bold mb-2">{degree}</h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Building2 size={18} className="text-blue-400" />
          <span className="text-blue-400">{institution}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-gray-400" />
          <span className="text-gray-400">{period}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-gray-400" />
          <span className="text-gray-400">{location}</span>
        </div>
      </div>
    </motion.div>
  );
}

function AwardCard({ title, period, description }) {
  return (
    <motion.div 
      variants={fadeIn}
      className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900/70 transition-colors"
    >
      <div className="flex items-center gap-3 mb-4">
        {title.includes("Star") ? (
          <Star size={24} className="text-yellow-400" />
        ) : (
          <Award size={24} className="text-blue-400" />
        )}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={18} className="text-gray-400" />
        <span className="text-gray-400">{period}</span>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

export default App;
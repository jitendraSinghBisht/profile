import { useLocation } from 'react-router-dom';

interface StructuredDataProps {
  type: 'person' | 'about' | 'projects' | 'skills' | 'contact';
}

export const StructuredData = ({ type }: StructuredDataProps) => {
  const location = useLocation();
  
  const getStructuredData = () => {
    const baseUrl = 'https://your-domain.com';
    
    switch (type) {
      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jitendra Singh Bisht",
          "jobTitle": "Backend Engineer & Cloud Architect",
          "description": "Backend Engineer and Cloud Architect specializing in scalable APIs, microservices, and cloud infrastructure.",
          "url": baseUrl,
          "sameAs": [
            "https://github.com/jitendraSinghBisht",
            "https://linkedin.com/in/jitendra-singh-bisht",
            "https://twitter.com/jitendra_bisht"
          ],
          "knowsAbout": [
            "Backend Development",
            "Cloud Architecture", 
            "API Development",
            "Microservices",
            "Node.js",
            "Express.js",
            "JavaScript",
            "TypeScript",
            "Database Design",
            "System Architecture"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Backend Engineer",
            "description": "Building scalable backend systems and cloud infrastructure"
          },
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance/Contract"
          }
        };
        
      case 'about':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jitendra Singh Bisht",
          "description": "Passionate backend developer with expertise in scalable systems and clean code practices.",
          "url": `${baseUrl}/about`,
          "knowsAbout": [
            "Backend Development",
            "Clean Code",
            "Continuous Learning",
            "Problem Solving",
            "System Architecture",
            "API Design"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Backend Developer",
            "description": "Building scalable backend systems with clean, maintainable code"
          },
          "alumniOf": {
            "@type": "Organization",
            "name": "Software Development Community"
          }
        };
        
      case 'projects':
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": "Backend & Full-Stack Development Portfolio",
          "description": "Collection of backend and full-stack development projects showcasing expertise in Node.js, React.js, and modern web technologies.",
          "url": `${baseUrl}/projects`,
          "author": {
            "@type": "Person",
            "name": "Jitendra Singh Bisht"
          },
          "creator": {
            "@type": "Person",
            "name": "Jitendra Singh Bisht"
          },
          "about": [
            {
              "@type": "Thing",
              "name": "Backend Development"
            },
            {
              "@type": "Thing", 
              "name": "Full-Stack Development"
            },
            {
              "@type": "Thing",
              "name": "Web Development"
            }
          ],
          "hasPart": [
            {
              "@type": "SoftwareApplication",
              "name": "Web Coding Playground",
              "description": "Interactive web-based coding playground built with TypeScript",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web Browser"
            },
            {
              "@type": "SoftwareApplication", 
              "name": "Backend JavaScript Applications",
              "description": "Server-side JavaScript applications and APIs built with Node.js",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Server"
            },
            {
              "@type": "SoftwareApplication",
              "name": "React.js Applications", 
              "description": "Modern React.js applications showcasing component-based architecture",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Web Browser"
            }
          ]
        };
        
      case 'skills':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jitendra Singh Bisht",
          "description": "Backend Engineer with comprehensive technical skills in modern web technologies.",
          "url": `${baseUrl}/skills`,
          "knowsAbout": [
            "JavaScript",
            "TypeScript", 
            "Node.js",
            "React.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "AWS",
            "Docker",
            "Git"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Backend Engineer",
            "description": "Specializing in backend development and cloud architecture"
          },
          "skill": [
            {
              "@type": "Thing",
              "name": "Programming Languages",
              "description": "JavaScript, TypeScript, HTML, CSS"
            },
            {
              "@type": "Thing",
              "name": "Frontend Development", 
              "description": "React.js, Tailwind CSS, Figma"
            },
            {
              "@type": "Thing",
              "name": "Backend Development",
              "description": "Node.js, Express.js"
            },
            {
              "@type": "Thing",
              "name": "Databases",
              "description": "MongoDB, PostgreSQL"
            },
            {
              "@type": "Thing",
              "name": "Cloud & DevOps",
              "description": "AWS, Docker"
            }
          ]
        };
        
      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Jitendra Singh Bisht",
          "description": "Get in touch with Jitendra Singh Bisht for backend development and cloud architecture opportunities.",
          "url": `${baseUrl}/contact`,
          "mainEntity": {
            "@type": "Person",
            "name": "Jitendra Singh Bisht",
            "jobTitle": "Backend Engineer & Cloud Architect",
            "email": "jitendra.singh@example.com",
            "telephone": "+1 (555) 123-4567",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Remote",
              "addressCountry": "Worldwide"
            },
            "sameAs": [
              "https://github.com/jitendraSinghBisht",
              "https://linkedin.com/in/jitendra-singh-bisht",
              "https://twitter.com/jitendra_bisht"
            ]
          },
          "potentialAction": {
            "@type": "ContactAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/contact`,
              "inLanguage": "en-US",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "result": {
              "@type": "ContactPage"
            }
          }
        };
        
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}; 
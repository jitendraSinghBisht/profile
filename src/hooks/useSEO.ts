import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Jitendra Singh Bisht - Backend Engineer & Cloud Architect | Portfolio',
    description: 'Backend Engineer and Cloud Architect specializing in scalable APIs, microservices, and cloud infrastructure. Expert in Node.js, Express, and modern backend technologies.',
    keywords: 'backend engineer, cloud architect, node.js, express, microservices, API development, cloud infrastructure, software engineer, full-stack developer',
    ogTitle: 'Jitendra Singh Bisht - Backend Engineer & Cloud Architect',
    ogDescription: 'Backend Engineer and Cloud Architect specializing in scalable APIs, microservices, and cloud infrastructure.',
    ogImage: 'https://your-domain.com/og-home.jpg',
    twitterTitle: 'Jitendra Singh Bisht - Backend Engineer & Cloud Architect',
    twitterDescription: 'Backend Engineer and Cloud Architect specializing in scalable APIs, microservices, and cloud infrastructure.',
    twitterImage: 'https://your-domain.com/og-home.jpg'
  },
  '/about': {
    title: 'About Jitendra Singh Bisht - Backend Engineer & Developer Journey',
    description: 'Learn about Jitendra Singh Bisht, a passionate backend developer with expertise in scalable systems, clean code, and continuous learning. Discover my journey in software development.',
    keywords: 'about backend developer, software engineer journey, clean code, continuous learning, backend development experience, Jitendra Singh Bisht',
    ogTitle: 'About Jitendra Singh Bisht - Backend Engineer & Developer Journey',
    ogDescription: 'Learn about Jitendra Singh Bisht, a passionate backend developer with expertise in scalable systems and clean code.',
    ogImage: 'https://your-domain.com/og-about.jpg',
    twitterTitle: 'About Jitendra Singh Bisht - Backend Engineer & Developer Journey',
    twitterDescription: 'Learn about Jitendra Singh Bisht, a passionate backend developer with expertise in scalable systems and clean code.',
    twitterImage: 'https://your-domain.com/og-about.jpg'
  },
  '/projects': {
    title: 'Projects by Jitendra Singh Bisht - Backend & Full-Stack Development Portfolio',
    description: 'Explore my portfolio of backend and full-stack projects including Node.js applications, React.js projects, and interactive web development. View code samples and live demos.',
    keywords: 'backend projects, full-stack projects, node.js projects, react.js projects, portfolio, web development projects, API projects',
    ogTitle: 'Projects by Jitendra Singh Bisht - Backend & Full-Stack Development Portfolio',
    ogDescription: 'Explore my portfolio of backend and full-stack projects including Node.js applications, React.js projects, and interactive web development.',
    ogImage: 'https://your-domain.com/og-projects.jpg',
    twitterTitle: 'Projects by Jitendra Singh Bisht - Backend & Full-Stack Development Portfolio',
    twitterDescription: 'Explore my portfolio of backend and full-stack projects including Node.js applications, React.js projects, and interactive web development.',
    twitterImage: 'https://your-domain.com/og-projects.jpg'
  },
  '/skills': {
    title: 'Skills & Expertise - Jitendra Singh Bisht | Backend Development & Cloud Technologies',
    description: 'Comprehensive overview of my technical skills including JavaScript, TypeScript, Node.js, React.js, MongoDB, PostgreSQL, AWS, and cloud deployment expertise.',
    keywords: 'backend skills, JavaScript, TypeScript, Node.js, React.js, MongoDB, PostgreSQL, AWS, cloud deployment, technical skills, programming languages',
    ogTitle: 'Skills & Expertise - Jitendra Singh Bisht | Backend Development & Cloud Technologies',
    ogDescription: 'Comprehensive overview of my technical skills including JavaScript, TypeScript, Node.js, React.js, MongoDB, PostgreSQL, AWS, and cloud deployment expertise.',
    ogImage: 'https://your-domain.com/og-skills.jpg',
    twitterTitle: 'Skills & Expertise - Jitendra Singh Bisht | Backend Development & Cloud Technologies',
    twitterDescription: 'Comprehensive overview of my technical skills including JavaScript, TypeScript, Node.js, React.js, MongoDB, PostgreSQL, AWS, and cloud deployment expertise.',
    twitterImage: 'https://your-domain.com/og-skills.jpg'
  },
  '/contact': {
    title: 'Contact Jitendra Singh Bisht - Backend Engineer & Cloud Architect',
    description: 'Get in touch with Jitendra Singh Bisht for backend development, cloud architecture, and software engineering opportunities. Available for remote work and collaborations.',
    keywords: 'contact backend engineer, hire backend developer, cloud architect contact, software engineer contact, remote work, collaboration opportunities',
    ogTitle: 'Contact Jitendra Singh Bisht - Backend Engineer & Cloud Architect',
    ogDescription: 'Get in touch with Jitendra Singh Bisht for backend development, cloud architecture, and software engineering opportunities.',
    ogImage: 'https://your-domain.com/og-contact.jpg',
    twitterTitle: 'Contact Jitendra Singh Bisht - Backend Engineer & Cloud Architect',
    twitterDescription: 'Get in touch with Jitendra Singh Bisht for backend development, cloud architecture, and software engineering opportunities.',
    twitterImage: 'https://your-domain.com/og-contact.jpg'
  }
};

export const useSEO = () => {
  const location = useLocation();
  
  useEffect(() => {
    const config = seoConfigs[location.pathname] || seoConfigs['/'];
    
    // Update document title
    document.title = config.title;
    
    // Update meta tags
    updateMetaTag('name', 'description', config.description);
    updateMetaTag('name', 'keywords', config.keywords);
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', config.ogTitle || config.title);
    updateMetaTag('property', 'og:description', config.ogDescription || config.description);
    updateMetaTag('property', 'og:image', config.ogImage || 'https://your-domain.com/og-default.jpg');
    updateMetaTag('property', 'og:url', `https://your-domain.com${location.pathname}`);
    
    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', config.twitterTitle || config.title);
    updateMetaTag('name', 'twitter:description', config.twitterDescription || config.description);
    updateMetaTag('name', 'twitter:image', config.twitterImage || config.ogImage || 'https://your-domain.com/og-default.jpg');
    
    // Update canonical URL
    updateCanonicalUrl(`https://your-domain.com${location.pathname}`);
    
  }, [location.pathname]);
};

const updateMetaTag = (attribute: string, value: string, content: string) => {
  let meta = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
};

const updateCanonicalUrl = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
}; 
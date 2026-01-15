import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import { siteConfig } from "./config/site";

// Dynamic imports for below-the-fold sections
// These load on-demand, reducing initial bundle size
const About = dynamic(() => import("./components/About"));
const Timeline = dynamic(() => import("./components/Timeline"));
const Skills = dynamic(() => import("./components/Skills"));
const Projects = dynamic(() => import("./components/Projects"));
const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Digital Commerce Consultant & Project Manager",
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.image}`,
  email: siteConfig.email,
  sameAs: [siteConfig.social.twitterUrl, siteConfig.social.linkedin],
  worksFor: {
    "@type": "Organization",
    name: siteConfig.employer.name,
    url: siteConfig.employer.url,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: siteConfig.location.countryCode,
  },
  knowsAbout: [
    "Digital Commerce",
    "E-commerce",
    "Adobe Commerce",
    "Next.js",
    "Project Management",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Timeline />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

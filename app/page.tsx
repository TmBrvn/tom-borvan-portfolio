import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { siteConfig } from "./config/site";

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

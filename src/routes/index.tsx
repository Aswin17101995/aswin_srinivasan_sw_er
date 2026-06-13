import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Pricing from "@/components/portfolio/Pricing";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Hire Full Stack Software Engineer | Next.js, React, Node.js, Java | Aswin Srinivasan",
      },

      {
        name: "description",
        content:
          "Hire Aswin Srinivasan, a Full Stack Software Engineer from India with 4+ years of experience building scalable, high-performance web applications using Next.js, React, Node.js, Java, Spring Boot, TypeScript, PostgreSQL, MongoDB, Socket.IO, WebRTC, and cloud technologies.",
      },

      {
        name: "keywords",
        content:
          "Aswin Srinivasan, software engineer, full stack software engineer, hire software engineer, freelance software engineer, software engineer India, full stack developer, Next.js developer, React developer, Node.js developer, Java developer, Spring Boot developer, TypeScript developer, MongoDB developer, PostgreSQL developer, Socket.IO developer, WebRTC developer, REST API developer, backend developer, frontend developer, SaaS developer, cloud developer, remote software engineer",
      },

      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      {
        name: "author",
        content: "Aswin Srinivasan",
      },

      {
        name: "creator",
        content: "Aswin Srinivasan",
      },

      {
        name: "publisher",
        content: "Aswin Srinivasan",
      },

      {
        name: "theme-color",
        content: "#0f172a",
      },

      {
        property: "og:title",
        content: "Hire Full Stack Software Engineer | Next.js, React, Node.js, Java | Aswin Srinivasan",
      },

      {
        property: "og:description",
        content:
          "Experienced Full Stack Software Engineer specializing in Next.js, React, Node.js, Java, Spring Boot, TypeScript, scalable web applications, APIs, real-time systems, and cloud deployment.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:url",
        content: "https://www.adstechnology.online",
      },

      {
        property: "og:site_name",
        content: "Aswin Srinivasan",
      },

      {
        property: "og:locale",
        content: "en_US",
      },

      {
        property: "og:image",
        content: "https://www.adstechnology.online/logo.png",
      },

      {
        property: "og:image:width",
        content: "1200",
      },

      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "Aswin Srinivasan - Full Stack Software Engineer",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Hire Full Stack Software Engineer | Next.js, React, Node.js, Java | Aswin Srinivasan",
      },
      {
        name: "twitter:description",
        content:
          "Full Stack Software Engineer with 4+ years of experience building scalable web applications using Next.js, React, Node.js, Java, Spring Boot, TypeScript, and modern cloud technologies.",
      },
      {
        name: "twitter:image",
        content: "https://www.adstechnology.online/logo.png",
      },
      {
        name: "twitter:image:alt",
        content: "Aswin Srinivasan - Full Stack Software Engineer",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aswin Srinivasan",
          url: "https://www.adstechnology.online/",
          jobTitle: "Software Engineer",
          description:
            "Full-stack software engineer with 4+ years of experience in Next.js, React, Node.js, Java, and real-time systems.",
          knowsAbout: [
            "Next.js",
            "React",
            "Node.js",
            "Java",
            "Spring Boot",
            "TypeScript",
            "PostgreSQL",
            "MongoDB",
            "Software Engineering",
            "Full-Stack Development",
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Aswin Srinivasan — Software Engineering Services",
          description:
            "Freelance software engineering services by Aswin Srinivasan: UI development and full-stack development for web applications.",
          url: "https://www.adstechnology.online/",
          areaServed: "Worldwide",
          provider: {
            "@type": "Person",
            name: "Aswin Srinivasan",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Software Engineering Services",
            itemListElement: [
              {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "15",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "15",
                  priceCurrency: "USD",
                  unitCode: "HUR",
                  referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "HUR" },
                },
                itemOffered: {
                  "@type": "Service",
                  name: "UI Development",
                  description:
                    "Responsive UI development with React, Next.js, and TypeScript, including code reviews and component architecture.",
                  serviceType: "Front-End Development",
                },
              },
              {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "20",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "20",
                  priceCurrency: "USD",
                  unitCode: "HUR",
                  referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "HUR" },
                },
                itemOffered: {
                  "@type": "Service",
                  name: "Full-Stack Development",
                  description:
                    "End-to-end full-stack development with Node.js, Java, Spring Boot, database design, authentication, CI/CD, and deployment.",
                  serviceType: "Full-Stack Development",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

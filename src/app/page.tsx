"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { CheckCircle, Heart, Mail, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="medium"
      background="floatingGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Clean Design Starts Here"
          description="Experience the power of minimalist design. Simple, elegant, and focused on what matters most."
          tag="Minimal Design"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore Now", href: "#features" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="blur-reveal"
          background={{ variant: "plain" }}
          carouselItems={[
            {
              id: "carousel-1",              imageSrc: "http://img.b2bpic.net/free-photo/desk-arrangement-with-tablet-rulers_23-2148766924.jpg",              imageAlt: "minimal clean workspace design"
            },
            {
              id: "carousel-2",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-desk-minimal-pile-agendas_23-2148748606.jpg",              imageAlt: "clean workspace organization desk"
            },
            {
              id: "carousel-3",              imageSrc: "http://img.b2bpic.net/free-photo/minimalistic-arranged-workplace-desk-with-laptop-notes-wall_23-2148225532.jpg",              imageAlt: "modern minimal interior design"
            },
            {
              id: "carousel-4",              imageSrc: "http://img.b2bpic.net/free-photo/alarm-clock-near-notebook-laptop_23-2147929685.jpg",              imageAlt: "minimalist clean workspace aesthetic"
            },
            {
              id: "carousel-5",              imageSrc: "http://img.b2bpic.net/free-photo/workplace-office_1098-16223.jpg",              imageAlt: "clean modern workspace environment"
            },
            {
              id: "carousel-6",              imageSrc: "http://img.b2bpic.net/free-photo/serious-busy-woman-working-laptop-office-interior-copyspace_1163-4328.jpg",              imageAlt: "minimal clean office environment"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={5000}
          ariaLabel="Hero carousel section"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="About Our Approach"
          description="We believe in the power of simplicity. Every element has a purpose, every design choice is intentional. Our clean aesthetic translates complex ideas into elegant, understandable solutions."
          tag="Our Philosophy"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/positive-business-team-discussing-report-sitting-meeting-table-with-monitor-holding-looking-documents-business-meeting-teamwork-concept_74855-11909.jpg"
          imageAlt="team collaboration workspace modern"
          useInvertedBackground={false}
          buttons={[
            { text: "Discover More", href: "#features" }
          ]}
          buttonAnimation="blur-reveal"
          ariaLabel="About section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFour
          title="Why Choose Clean Design"
          description="Simplicity creates clarity. Our design principles focus on removing distractions and highlighting what truly matters."
          tag="Key Features"
          tagIcon={Star}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "feature-1",              title: "Minimal Interface",              author: "Design Team",              description: "Intuitive layouts with zero unnecessary elements. Every pixel serves a purpose in creating a seamless user experience.",              tags: ["Interface", "UX"],
              imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150104502.jpg",              imageAlt: "clean interface design"
            },
            {
              id: "feature-2",              title: "Consistent Design System",              author: "Design Team",              description: "Unified components and patterns ensure coherence across all touchpoints. Consistency builds trust and usability.",              tags: ["System", "Components"],
              imageSrc: "http://img.b2bpic.net/free-vector/web-designer-template-design_23-2150359823.jpg",              imageAlt: "minimalist design system components"
            },
            {
              id: "feature-3",              title: "Clear Information Architecture",              author: "Design Team",              description: "Logical organization and hierarchy guide users effortlessly through content. Information finds its way to those who need it.",              tags: ["Structure", "Navigation"],
              imageSrc: "http://img.b2bpic.net/free-vector/balanced-business-scorecard-coherent-project-harmonious-company-development-optimized-workflow-skillful-business-management-expert_335657-2408.jpg",              imageAlt: "clean workflow process design"
            }
          ]}
          buttons={[
            { text: "Explore All Features", href: "#testimonials" }
          ]}
          buttonAnimation="blur-reveal"
          ariaLabel="Features section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          cardTitle="Loved by Teams"
          cardTag="Customer Reviews"
          cardTagIcon={Heart}
          cardAnimation="slide-up"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "testimonial-1",              name: "Sarah Johnson",              imageSrc: "http://img.b2bpic.net/free-photo/young-man-with-beard-wearing-business-shirt-skeptic-nervous-disapproving-expression-face-with-crossed-arms-negative-person_839833-22530.jpg",              imageAlt: "professional portrait headshot man"
            },
            {
              id: "testimonial-2",              name: "Emily Chen",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-professional-businesswoman-indoors_23-2148824827.jpg",              imageAlt: "professional woman headshot portrait"
            },
            {
              id: "testimonial-3",              name: "Michael Rivera",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg",              imageAlt: "professional man business headshot"
            },
            {
              id: "testimonial-4",              name: "Jessica Martinez",              imageSrc: "http://img.b2bpic.net/free-photo/positive-businesswoman-work_1098-3861.jpg",              imageAlt: "professional woman business headshot"
            },
            {
              id: "testimonial-5",              name: "David Thompson",              imageSrc: "http://img.b2bpic.net/free-photo/proud-entrepreneur-with-employees-background_1098-3585.jpg",              imageAlt: "professional business man portrait"
            },
            {
              id: "testimonial-6",              name: "Amanda Foster",              imageSrc: "http://img.b2bpic.net/free-photo/blond-business-woman-sitting-couch-smiling_23-2148095699.jpg",              imageAlt: "professional woman corporate portrait"
            }
          ]}
          ariaLabel="Testimonials section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get in Touch"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Let's Create Something Clean Together"
          description="Ready to transform your vision into clean, elegant design? Reach out and let's start a conversation about what's possible."
          buttons={[
            { text: "Contact Us", href: "mailto:hello@webild.com" },
            { text: "Schedule a Call", href: "#" }
          ]}
          buttonAnimation="blur-reveal"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          ariaLabel="Contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Webild"
          columns={[
            {
              items: [
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Features", href: "#features" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            },
            {
              items: [
                { label: "Twitter", href: "https://twitter.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Instagram", href: "https://instagram.com" }
              ]
            }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}

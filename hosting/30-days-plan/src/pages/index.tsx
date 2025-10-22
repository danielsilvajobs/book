import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { useState, useEffect } from 'react';
import { BookOpen, Target, Clock, Send, CheckCircle, XCircle, Users } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { StaticImage } from "gatsby-plugin-image"
import BookSection from "../components/BookSection";
import Menu from "../components/Menu";

// Content Definitions (Based on previous request)
const BOOK_TITLE = "30 Days Plan";
const BOOK_SUBTITLE = "Your Guide from Dream to Reality";


function MetaTags() {
  return (
    <>
      <title>30 Days Plan: Your Guide from Dream to Reality</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#4f46e5" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <meta name="description" content="Stop dreaming and start finishing with the 30 Days Plan. A strategic intervention against procrastination and burnout. Transform your goals into reality with focused consistency over thirty manageable days." />
      <meta name="keywords" content="goal setting, productivity, self-help, 30 day challenge, habit formation, procrastination, motivation, personal development, achievement, success, accountability, consistency" />
      <meta name="author" content="30 Days Plan" />
      <meta name="creator" content="30 Days Plan" />
      <meta name="publisher" content="30 Days Plan" />
      <meta name="format-detection" content="telephone=no, address=no, email=no" />
      <link rel="canonical" href="https://30daysplan.com/" />

      <meta property="og:title" content="30 Days Plan: Your Guide from Dream to Reality" />
      <meta property="og:description" content="Transform your goals into reality with focused consistency over thirty manageable days. Stop dreaming and start finishing with proven strategies." />
      <meta property="og:url" content="https://30daysplan.com" />
      <meta property="og:site_name" content="30 Days Plan" />
      <meta property="og:image" content="https://30daysplan.com/30-days-plan-book-cover.png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="450" />
      <meta property="og:image:alt" content="30 Days Plan Book Cover" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="30 Days Plan: Your Guide from Dream to Reality" />
      <meta name="twitter:description" content="Transform your goals into reality with focused consistency over thirty manageable days." />
      <meta name="twitter:image" content="https://30daysplan.com/30-days-plan-book-cover.png" />
      {/* <meta name="twitter:creator" content="@30daysplan" /> */}

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      <meta name="yandex-verification" content="8cdae014d4adbe9a" />

      {/* <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="y_key" content="your-yahoo-verification-code" /> */}
    </>
  );
}

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>, title: string, description: string }) => (
  <article className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:shadow-2xl transition duration-300">
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 rounded-full bg-indigo-100 text-indigo-600" aria-hidden="true">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </article>
);

const FeaturesSection = () => (
  <section className="py-20 bg-gray-50" aria-labelledby="features-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="features-heading" className="text-4xl font-extrabold text-center text-gray-900 mb-4">The Blueprint of Achievement</h2>
      <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">How the 30 Days Plan helps you succeed where motivation fails.</p>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Target}
          title="The Unbreakable 'Why'"
          description="It's your anchor. We guide you to define a core, personal motivation (transformation, pain relief) that makes showing up non-negotiable."
        />
        <FeatureCard
          icon={Users}
          title="Leverage Accountability"
          description="Convert loose aspiration into commitment. External support and scheduled reviews conquer procrastination and prevent standards from drifting."
        />
        <FeatureCard
          icon={BookOpen}
          title="Consistent, Tiny Action"
          description="Master the three daily tasks (Must-Do, Ready-Up, Level-Up). This creates habitual momentum and builds the resilience muscle needed to finish."
        />
      </div>
    </div>
  </section>
);



const Header = () => (
  <header className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-2xl" role="banner">

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight mb-4" itemProp="name">
        {BOOK_TITLE}
      </h1>
      <p className="text-2xl sm:text-3xl font-medium text-indigo-300 mb-8" itemProp="description">
        {BOOK_SUBTITLE}
      </p>
      <a
        href="https://www.amazon.com/dp/B0FWKQRFY9" target='_blank' rel="noopener noreferrer"
        className="inline-flex items-center px-10 py-4 text-lg font-bold rounded-xl shadow-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        aria-label="Start your 30 day plan today by contacting us"
      >
        Start Your 30 Days Today
      </a>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} The 30 Days Plan. All rights reserved.</p>
      <div className="mt-2 text-gray-400">
        <a href="#hero" className="hover:text-white mx-2">Home</a>
        <a href="#resources" className="hover:text-white mx-2">Resources</a>
        <a href="#contact" className="hover:text-white mx-2">Contact</a>
      </div>
    </div>
  </footer>
);

// This component uses standard Tailwind colors (Indigo, White) for contrast
const DiscordCommunityBanner = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" id="resources">
      <div className="p-8 rounded-xl shadow-2xl mx-auto max-w-4xl bg-indigo-700 text-white">
        <Users className="w-12 h-12 mx-auto mb-4 text-white" />
        <h2 className="text-3xl font-extrabold mb-3 text-white">
          Join the 30 Days Accountability Community
        </h2>
        <p className="text-xl mb-6 text-indigo-100">
          Consistency thrives in company. Get daily check-ins, direct support, and celebrate your milestones with others on the same journey.
        </p>
        <a
          href="https://discord.com/invite/Aur5EkkPwz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-bold rounded-xl shadow-lg transition duration-300 transform hover:scale-105 bg-white text-indigo-700 hover:bg-gray-200"
        >
          {/* Discord Icon SVG using Indigo color */}
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ color: '#4f46e5' }}>
            <path d="M21.05 0c1.07 0 1.95.89 1.95 2v15.93c0 1.07-.88 1.94-1.95 1.94H6.2l-3.23 3.03V2c0-1.11.88-2 1.95-2h16.13zm-5.9 14.28h-1.39v-4.83h1.39v4.83zm-3.9 0h-1.39v-4.83h1.39v4.83zm6.65-8.03c-2.34-.4-4.83-.4-7.2 0-.27.05-.53-.17-.58-.45v-.43c.05-.27.3-.45.58-.4c2.6.45 5.2.45 7.8 0 .28-.05.53.13.58.4v.43c-.05.28-.3.47-.58.45z" />
          </svg>
          Join the Discord Server
        </a>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => (
  <div className="border border-gray-200 rounded-lg mb-4">
    <button
      className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg hover:bg-gray-50 transition duration-200"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <XCircle className="w-5 h-5 text-indigo-600" />
          ) : (
            <CheckCircle className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>
    </button>
    {isOpen && (
      <div className="px-6 pb-4">
        <div className="text-gray-600 leading-relaxed">{answer}</div>
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes the 30 Days Plan different from other goal-setting books?",
      answer: "The 30 Days Plan focuses on strategic intervention against procrastination rather than relying on willpower alone. It provides a concrete three-action daily framework (Must-Do, Ready-Up, Level-Up) and emphasizes the power of accountability and your 'Unbreakable Why' to create lasting change. Unlike generic motivation books, this system is designed for people who start strong but struggle to finish."
    },
    {
      question: "How long does it take to see results with the 30 Days Plan?",
      answer: "Many people report feeling more focused and motivated within the first week of implementing the daily three-action system. However, the full transformation typically becomes evident around day 21-30 as new habits solidify and compound effects become visible. The key is consistent daily action rather than expecting immediate dramatic changes."
    },
    {
      question: "Can I use this method for any type of goal?",
      answer: "Yes, the 30 Days Plan methodology works for virtually any goal - whether it's starting a business, learning a new skill, improving health, writing a book, or developing better relationships. The three-action framework (Must-Do, Ready-Up, Level-Up) is adaptable to any objective and scales from small personal improvements to major life transitions."
    },
    {
      question: "What if I miss a day or fall behind in my 30-day plan?",
      answer: "The book addresses this common concern by teaching you how to build resilience into your plan. Missing one day doesn't ruin your progress - the system is designed with flexibility in mind. The key is getting back on track immediately rather than using a missed day as an excuse to quit entirely. Your accountability system and 'Unbreakable Why' help you bounce back quickly."
    },
    {
      question: "Do I need any special tools or apps to follow the 30 Days Plan?",
      answer: "No special tools are required. The 30 Days Plan emphasizes simplicity and can be tracked in the book. The book, and a pen are the only things that you need. However, I recommend joining an accountability community for additional support."
    },
    {
      question: "Is this book suitable for people who have tried and failed at goals before?",
      answer: "Absolutely - this book is specifically designed for people who have experienced the frustration of starting strong but not finishing. The author addresses the psychology of why most goal-setting approaches fail and provides a strategic alternative that works even when motivation wanes. It's particularly valuable for 'chronic starters' who need a different approach."
    },
    {
      question: "How is accountability incorporated into the 30 Days Plan?",
      answer: "Accountability is a core pillar of the system. The book teaches you how to leverage external support through scheduled check-ins, community involvement (like the Discord server), and structured reporting to prevent standards from drifting. This isn't just about telling someone your goal - it's about creating systematic external pressure that supports your internal commitment."
    },
    {
      question: "What's the difference between Must-Do, Ready-Up, and Level-Up actions?",
      answer: "These are the three daily action categories that make up the core system: Must-Do actions are the non-negotiable daily minimums that maintain momentum. Ready-Up actions prepare you for bigger steps and remove obstacles. Level-Up actions push you beyond your comfort zone toward mastery. This framework ensures balanced progress while preventing overwhelm."
    }
  ];

  const toggleFAQ = (index: number | null) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about the 30 Days Plan methodology and how it can transform your approach to achieving goals.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              />
              <div itemProp="name" className="hidden">{faq.question}</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer" className="hidden">
                <div itemProp="text">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to stop dreaming and start finishing?
          </p>
          <a
            href="https://www.amazon.com/dp/B0FWKQRFY9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-bold rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Get the 30 Days Plan Book
          </a>
        </div>
      </div>
    </section>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "30 Days Plan: Your Guide from Dream to Reality",
    "author": {
      "@type": "Person",
      "name": "Mark Thin"
    },
    "description": "Stop dreaming and start finishing with the 30 Days Plan. A strategic intervention against procrastination and burnout that proves you don't need endless willpower or 'perfect' days to succeed. Transform your goals into reality with focused consistency over thirty manageable days.",
    "isbn": "B0FWKQRFY9",
    "url": "https://www.amazon.com/dp/B0FWKQRFY9",
    "genre": "Self-Help",
    "numberOfPages": "Unknown",
    "inLanguage": "en-US",
    "datePublished": "2024",
    "publisher": {
      "@type": "Organization",
      "name": "Independent Publisher"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.amazon.com/dp/B0FWKQRFY9",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased" id='hero' style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Menu />
      <Header />
      <main role="main" itemScope itemType="https://schema.org/Book">
        <BookSection />
        <FeaturesSection />
        <DiscordCommunityBanner />
        <FAQSection />
        <section className="py-20 bg-indigo-600 text-white" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="contact-heading" className="text-4xl font-extrabold text-center mb-12">Ready to Commit?</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <MetaTags />
);

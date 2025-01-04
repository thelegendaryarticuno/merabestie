import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 50
    });
  }, []);

  const SectionCard = ({ title, children, className = "", dataAos = "" }) => (
    <div
      data-aos={dataAos}
      className={`bg-gray-900 rounded-3xl p-8 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl shadow-lg ${className}`}
      style={{
        background: "linear-gradient(145deg, #1a1a1a 0%, #2c2c2c 100%)",
      }}
    >
      <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-red-700 pb-2">
        {title}
      </h2>
      {children}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>About Us | Urban Edge</title>
        <meta name="description" content="Learn about Urban Edge's journey, vision, and mission in the world of fashion." />
      </Helmet>
      <Navbar />    
      <div className="min-h-screen bg-black mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                About Urban Edge
              </span>
              <span className="text-gray-300 block text-3xl mt-2">Redefining Fashion, Empowering Style</span>
            </h1>
          </div>

          {/* About Sections */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* About Our Company Section */}
            <SectionCard 
              title="About Our Brand" 
              dataAos="fade-right"
            >
              <p className="text-gray-300 mb-4 leading-relaxed">
                At Urban Edge, we are more than just a clothing brand. We are a fashion revolution dedicated to empowering individuals through bold, innovative designs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our journey is driven by creativity, sustainability, and a commitment to pushing the boundaries of contemporary fashion.
              </p>
            </SectionCard>

            {/* Why Choose Us Section */}
            <SectionCard 
              title="Why Choose Urban Edge?" 
              dataAos="fade-left"
            >
              <p className="text-gray-300 mb-4 leading-relaxed">
                We stand out through our unique blend of urban aesthetics and cutting-edge design, coupled with our unwavering commitment to quality and customer satisfaction.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team brings together diverse fashion expertise, innovative thinking, and a genuine passion for creating clothing that makes a statement.
              </p>
            </SectionCard>

            {/* Objective Section */}
            <SectionCard 
              title="Our Objectives" 
              dataAos="fade-right"
              className="lg:col-span-2"
            >
              <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                <li>Drive innovation in fashion design and sustainable practices</li>
                <li>Empower individuals to express their unique style confidently</li>
                <li>Create eco-friendly, high-quality garments that stand the test of time</li>
                <li>Build a community of fashion-forward, conscious consumers</li>
                <li>Continuously push the boundaries of urban fashion</li>
              </ul>
            </SectionCard>

            {/* Vision Section */}
            <SectionCard 
              title="Our Vision" 
              dataAos="fade-right"
            >
              <p className="text-gray-300 leading-relaxed">
                To be the leading urban fashion brand that inspires confidence, promotes sustainability, and sets new standards in the industry.
              </p>
            </SectionCard>

            {/* Mission Section */}
            <SectionCard 
              title="Our Mission" 
              dataAos="fade-left"
            >
              <p className="text-gray-300 leading-relaxed">
                Our mission is to create bold, sustainable fashion that empowers individuals to express their unique identity while promoting responsible consumption and production.
              </p>
            </SectionCard>
          </div>

          {/* Image Section */}
          <div className="mt-16 text-center">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Urban Edge Collection"
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl h-auto transform transition duration-500 hover:scale-[1.01]"
            />
          </div>

          {/* Footer Text */}
          <div className="text-center mt-16 bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                Join the Urban Edge Movement
              </span>
              <span className="text-gray-300 block text-2xl mt-2">Where Style Meets Substance</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              At Urban Edge, every piece of clothing is an opportunity to make a statement, express your individuality, and contribute to a more sustainable future. Be part of our fashion revolution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
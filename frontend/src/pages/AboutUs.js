import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero-bg">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Long Live Our Dogs</h1>
            <p className="subtitle">
              We're on a mission to revolutionize veterinary medicine through the power of data and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-bg">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              Every year, millions of dogs visit veterinarians, generating invaluable medical data that could unlock breakthrough discoveries in canine health. Yet most of this data remains isolated in individual practice records, limiting our collective understanding of canine diseases, treatments, and outcomes.
            </p>
            <p>
              Long Live Our Dogs bridges this gap by creating the world's largest open database of canine health records, enabling researchers to identify patterns, develop better treatments, and ultimately help dogs live longer, healthier lives.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="how-we-work-bg">
        <div className="container">
          <div className="how-we-work-content">
            <h2>How We Work</h2>
            <div className="work-grid">
              <div className="work-item">
                <div className="work-icon">🐕</div>
                <h3>Pet Owner Driven</h3>
                <p>Dog owners voluntarily share their pets' medical records, knowing they're contributing to life-saving research that could help future generations of dogs.</p>
              </div>
              
              <div className="work-item">
                <div className="work-icon">🤖</div>
                <h3>AI-Powered Processing</h3>
                <p>Our advanced AI systems extract medical data from documents while completely removing all personal identifying information to protect privacy.</p>
              </div>
              
              <div className="work-item">
                <div className="work-icon">🔬</div>
                <h3>Open Research</h3>
                <p>Qualified researchers gain access to anonymized data to study everything from breed-specific diseases to treatment effectiveness across populations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="impact-vision-bg">
        <div className="container">
          <div className="impact-vision-content">
            <h2>Our Vision for Impact</h2>
            <div className="vision-grid">
              <div className="vision-item">
                <h3>Earlier Disease Detection</h3>
                <p>By analyzing patterns across thousands of cases, we can help identify early warning signs of diseases like cancer, heart disease, and genetic conditions.</p>
              </div>
              
              <div className="vision-item">
                <h3>Personalized Treatment</h3>
                <p>Understanding how different breeds, ages, and health profiles respond to treatments will enable more personalized veterinary care.</p>
              </div>
              
              <div className="vision-item">
                <h3>Drug Development</h3>
                <p>Real-world data on treatment outcomes can accelerate the development of new medications and therapies for canine diseases.</p>
              </div>
              
              <div className="vision-item">
                <h3>Preventive Care</h3>
                <p>Insights from large datasets can inform better preventive care guidelines, helping dogs stay healthier throughout their lives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY COMMITMENT */}
      <section className="privacy-commitment-bg">
        <div className="container">
          <div className="privacy-commitment-content">
            <h2>Our Privacy Commitment</h2>
            <p>
              We understand that your dog's medical records contain sensitive information. That's why privacy and security are built into every aspect of our platform:
            </p>
            <div className="commitment-grid">
              <div className="commitment-item">
                <div className="commitment-icon">🔒</div>
                <h3>Complete Anonymization</h3>
                <p>All names, addresses, phone numbers, and identifying information are permanently removed before data enters our research database.</p>
              </div>
              
              <div className="commitment-item">
                <div className="commitment-icon">🛡️</div>
                <h3>Secure Infrastructure</h3>
                <p>We use enterprise-grade security measures including encryption, secure data centers, and regular security audits to protect your uploads.</p>
              </div>
              
              <div className="commitment-item">
                <div className="commitment-icon">🎯</div>
                <h3>Research-Only Use</h3>
                <p>Data is exclusively used for legitimate veterinary research. We never sell data or use it for marketing or commercial purposes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta-bg">
        <div className="container">
          <div className="about-cta-content">
            <h2>Join Our Mission</h2>
            <p>
              Whether you're a dog owner looking to contribute to life-saving research or a researcher seeking access to comprehensive canine health data, we invite you to be part of this important work.
            </p>
            <div className="cta-buttons">
              <Link to="/#upload" className="cta-primary">Upload Your Dog's Records</Link>
              <Link to="/researchers" className="cta-secondary">Access Research Data</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs; 
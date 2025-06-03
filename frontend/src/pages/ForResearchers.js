import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForResearchers() {
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [researchArea, setResearchArea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log('Researcher signup:', { email, institution, researchArea });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page-container">
        <section className="success-section">
          <div className="container">
            <div className="success-content">
              <h1>✅ Thank You!</h1>
              <p>We've received your request for database access. Our team will review your application and contact you within 1-2 business days.</p>
              <p>Questions? Email us at <a href="mailto:dwbelliveau@gmail.com">dwbelliveau@gmail.com</a></p>
              <Link to="/" className="cta-secondary">Return Home</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* HERO SECTION */}
      <section className="researchers-hero-bg">
        <div className="container">
          <div className="researchers-hero">
            <h1>Access the World's Largest Canine Health Dataset</h1>
            <p className="subtitle">
              Join leading veterinary researchers using our comprehensive, anonymized database to advance canine health science.
            </p>
          </div>
        </div>
      </section>

      {/* DATABASE INFO */}
      <section className="database-info-bg">
        <div className="container">
          <div className="database-info">
            <h2>What's in the Database</h2>
            <div className="database-grid">
              <div className="database-item">
                <h3>📋 Medical Records</h3>
                <p>Comprehensive veterinary visit notes, diagnoses, treatment plans, and follow-up care documentation.</p>
              </div>
              
              <div className="database-item">
                <h3>🧪 Lab Results</h3>
                <p>Blood work, urinalysis, pathology reports, and specialized diagnostic test results across thousands of cases.</p>
              </div>
              
              <div className="database-item">
                <h3>💊 Treatment Outcomes</h3>
                <p>Medication responses, surgical outcomes, therapy effectiveness, and long-term health tracking data.</p>
              </div>
{/*               
              <div className="database-item">
                <h3>🏥 Health Histories</h3>
                <p>Breed-specific health patterns, age-related conditions, and multi-year health progression data.</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH APPLICATIONS */}
      <section className="applications-bg">
        <div className="container">
          <div className="applications-content">
            <h2>Research Applications</h2>
            <p>Our database enables groundbreaking research across multiple areas:</p>
            <ul className="applications-list">
              <li><strong>Comparative Oncology</strong> - Study cancer patterns and treatment effectiveness across breeds and ages</li>
              <li><strong>Genetic Health Mapping</strong> - Identify breed-specific predispositions and hereditary conditions</li>
              <li><strong>Drug Development</strong> - Analyze real-world medication effectiveness and side effect profiles</li>
              <li><strong>Preventive Care Optimization</strong> - Develop evidence-based prevention protocols</li>
              <li><strong>Aging Studies</strong> - Research age-related health changes and longevity factors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SIGNUP FORM */}
      <section className="signup-bg">
        <div className="container">
          <div className="signup-content">
            <h2>Request Database Access</h2>
            <p>Sign up to be notified when our research database becomes available.</p>
            
            <form onSubmit={handleSubmit} className="researcher-form">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your.email@university.edu"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="institution">Institution/Organization *</label>
                <input
                  type="text"
                  id="institution"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  required
                  placeholder="University of Veterinary Medicine"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="researchArea">Research Area/Interest *</label>
                <textarea
                  id="researchArea"
                  value={researchArea}
                  onChange={(e) => setResearchArea(e.target.value)}
                  required
                  placeholder="Briefly describe your research focus (e.g., canine oncology, genetic disorders, nutrition studies)"
                  rows="4"
                />
              </div>
              
              <button type="submit" className="submit-button">
                Request Access
              </button>
              
              <p className="form-note">
                * All applications are reviewed manually. Academic and veterinary institutions are prioritized.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForResearchers;
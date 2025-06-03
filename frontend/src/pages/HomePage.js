import React from 'react';
import { Link } from 'react-router-dom';
import dogPhoto2 from '../assets/dog-photo2.jpeg';
import UploadForm from '../UploadForm';

function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-bg">
        <div className="container hero">
          <div className="hero-text">
            {/* <h1>Building the Future of Canine Health Research</h1> */}
            <h1>Turn Your Dog's Medical Records into Life-Saving Research</h1>
            <p className="subtitle">
              Join thousands of dog owners and researchers working together to improve veterinary care through data-driven insights.
            </p>
            <div className="cta-buttons">
              <a href="#upload" className="cta-primary">Upload Records</a>
              <a href="#how-it-works" className="cta-secondary">Learn How</a>
            </div>
          </div>

          <div className="hero-image">
            <img src={dogPhoto2} alt="Dog with family" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works-bg" id="how-it-works">
        <div className="container">
          <div className="how-it-works-content">
            <h2>How It Works</h2>
            <p className="section-subtitle">
              We're creating the world's largest open dataset for canine health research through a simple, secure three-step process.
            </p>
            
            <div className="steps-grid">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Pet Owners Upload</h3>
                <p>Dog owners securely upload their pets' medical records, including vet visits, lab results, treatments, and health histories.</p>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <h3>AI Processes & Anonymizes</h3>
                <p>Our AI scans PDFs, extracts medical data, and completely anonymizes all personal information before adding it to our research database.</p>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <h3>Researchers Access Data</h3>
                <p>Veterinary researchers and scientists gain access to comprehensive, anonymized data to study health outcomes and improve treatments for dogs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="impact-bg">
        <div className="container">
          <div className="impact-content">
            <h2>Why This Matters</h2>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-icon">🔬</div>
                <h3>Better Research</h3>
                <p>Large datasets reveal breakthrough patterns</p>
              </div>
              
              <div className="impact-item">
                <div className="impact-icon">🩺</div>
                <h3>Improved Treatments</h3>
                <p>Data-driven decisions save more lives</p>
              </div>
              
              <div className="impact-item">
                <div className="impact-icon">🐕</div>
                <h3>Longer Lives</h3>
                <p>Earlier detection, better prevention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY PROMISES */}
      <section className="privacy-bg">
        <div className="container">
          <div className="privacy-content">
            <h2>Your Data is Protected</h2>
            <div className="privacy-grid">
              <div className="privacy-card">
                <div className="privacy-icon">🚫</div>
                <h3>Never Sold</h3>
                <p>Zero commercial use</p>
              </div>
              
              <div className="privacy-card">
                <div className="privacy-icon">🔒</div>
                <h3>Fully Anonymous</h3>
                <p>All personal info removed</p>
              </div>
              
              <div className="privacy-card">
                <div className="privacy-icon">🐾</div>
                <h3>Research Only</h3>
                <p>Improving dog care exclusively</p>
              </div>
              
              <div className="privacy-card">
                <div className="privacy-icon">🛡️</div>
                <h3>Secure Storage</h3>
                <p>Enterprise-grade protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPLOAD SECTION */}
      <section className="upload-section" id="upload">
        <div className="container">
          <h2>Upload Your Dog's Records</h2>
          <p>Ready to contribute to life-saving research? Upload your dog's medical records below.</p>
          
          <div className="upload-container">
            <UploadForm />
          </div>
          
          <div className="upload-tips">
            <h3>What Records Help Most</h3>
            <div className="tips-grid">
              <div className="tip-item">
                <strong>🩺 Vet Visits:</strong> Annual checkups, sick visits, emergency care
              </div>
              <div className="tip-item">
                <strong>🧪 Lab Results:</strong> Blood work, urine tests, x-rays, biopsies
              </div>
              <div className="tip-item">
                <strong>💊 Treatments:</strong> Medications, surgeries, specialist reports
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION FOR RESEARCHERS */}
      <section className="final-cta">
        <div className="container">
          <h2>Are You a Researcher?</h2>
          <p>Access our comprehensive canine health database for your studies.</p>
          <div className="cta-buttons">
            <Link to="/researchers" className="cta-primary">Get Database Access</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
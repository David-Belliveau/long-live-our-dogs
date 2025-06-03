import React from 'react';
import UploadForm from '../UploadForm';

function ForPetOwners() {
  return (
    <div className="page-container">
      {/* HERO SECTION */}
      <section className="pet-owners-hero-bg">
        <div className="container">
          <div className="pet-owners-hero">
            <h1>Help Save Dogs' Lives Through Your Records</h1>
            <p className="subtitle">
              Your dog's medical history could be the key to breakthrough research that helps dogs everywhere live longer, healthier lives.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO UPLOAD */}
      <section className="what-to-upload-bg">
        <div className="container">
          <div className="what-to-upload">
            <h2>What Records Help Most</h2>
            <div className="upload-types-grid">
              <div className="upload-type">
                <h3>🩺 Vet Visit Records</h3>
                <p>Annual checkups, sick visits, emergency care notes, and any diagnostic findings from your veterinarian.</p>
              </div>
              
              <div className="upload-type">
                <h3>🧪 Lab Results</h3>
                <p>Blood work, urine tests, biopsies, x-rays, ultrasounds, and any other diagnostic test results.</p>
              </div>
              
              <div class="upload-type">
                <h3>💊 Treatment Records</h3>
                <p>Medication histories, surgical reports, therapy notes, and treatment response documentation.</p>
              </div>
{/*               
              <div className="upload-type">
                <h3>🏥 Specialist Reports</h3>
                <p>Oncology, cardiology, dermatology, or other specialist consultations and treatment plans.</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY ASSURANCE */}
      <section className="privacy-assurance-bg">
        <div className="container">
          <div className="privacy-assurance">
            <h2>Your Privacy is Protected</h2>
            <p>We understand how personal your dog's medical records are. Here's exactly how we protect your privacy:</p>
            
            <div className="privacy-steps">
              <div className="privacy-step">
                <div className="step-icon">🔒</div>
                <div className="step-content">
                  <h3>Secure Upload</h3>
                  <p>Files are encrypted during upload and stored securely on our servers.</p>
                </div>
              </div>
              
              <div className="privacy-step">
                <div className="step-icon">🤖</div>
                <div className="step-content">
                  <h3>AI Anonymization</h3>
                  <p>Our AI removes all names, addresses, phone numbers, and identifying information.</p>
                </div>
              </div>
              
              <div className="privacy-step">
                <div className="step-icon">🔬</div>
                <div className="step-content">
                  <h3>Research Only</h3>
                  <p>Anonymized data is used solely for veterinary research - never sold or marketed.</p>
                </div>
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
            <h3>Tips for Best Results</h3>
            <ul>
              <li><strong>PDF format works best</strong> - Most vet clinics can provide records as PDFs</li>
              <li><strong>Multiple files welcome</strong> - Upload each visit or test separately if needed</li>
              <li><strong>Quality matters</strong> - Clear, readable scans help our AI process data accurately</li>
              {/* <li><strong>Recent records preferred</strong> - Newer records often have more standardized formats</li> */}
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACT MESSAGE */}
      <section className="impact-message-bg">
        <div className="container">
          <div className="impact-message">
            <h2>Every Upload Makes a Difference</h2>
            <p>
              Your contribution joins thousands of other dog owners creating the largest canine health database ever assembled. 
              Together, we're accelerating research that will help dogs live longer, healthier lives.
            </p>
            <p className="thank-you">
              <strong>Thank you for helping advance veterinary science.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForPetOwners;
import './App.css';
import logo from './assets/logo-square.png';
import dogPhoto from './assets/dog-photo.jpg';
import dogPhoto2 from './assets/dog-photo2.jpeg';
import dogPhoto3 from './assets/dog-photo3.jpg';
import dogPhoto4 from './assets/dog-photo4.jpg';
import UploadForm from './UploadForm';

function App() {
  return (
    <div className="App">

      {/* NAVBAR */}
      <header className="navbar"> 
        <div className="logo">
          <img src={logo} alt="Long Live Our Dogs Logo" className="logo-image" />
          <span>Long Live Our Dogs</span>
        </div>
        <nav className="nav-links">
          <a href="#upload">Upload</a>
          {/* <a href="#about">About</a> */}
          <a href="mailto:dwbelliveau@gmail.com">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero-bg">
        <div className="container hero">
          <div className="hero-text">
            <h1>Turn Your Dog's Medical Records into Life-Saving Research</h1>
            <p className="subtitle">
              Join thousands of dog owners helping vets and researchers improve care.
            </p>
            <div className="cta-buttons">
              <a href="#upload" className="cta-primary">Upload Now</a>
              <a href="#explainer" className="cta-secondary">Learn More</a>
            </div>
          </div>

          <div className="hero-image">
            <img src={dogPhoto2} alt="Dog with family" />
          </div>
        </div>
      </section>

      {/* EXPLAINER SECTION */}
      <section className="explainer-bg">
        <div className="container">
          <div className="explainer-text" id="explainer">
            {/* <h2>Why Upload?</h2> */}
            <h2>We’re building the largest open dataset for canine health in the world.</h2>
            <p>
              Your uploads help build an open, anonymized dataset for researchers to improve care for the dogs we love. With a few important promises:
            </p>
            {/* <p>
              The biggest barrier to better treatment for dogs is lack of data. Your dog's records will help researchers save lives:
            </p> */}
              <ul>
                <li>🚫 Never shared for profit or marketing</li>
                <li>🔒 All data anonymized (no names, no personal info)</li>
                <li>🐾 <b>Used only to improve care for dogs</b></li>
              </ul>
            
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta" id="upload">
        <h2>Ready to Make a Difference?</h2>
        <UploadForm />
        <p>By uploading your dog's medical records, you will help create better outcomes for dogs everywhere.</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Long Live Our Dogs. Built with love for dogs and science.</p>
        </div>
      </footer>


    </div>
  );
}

export default App;

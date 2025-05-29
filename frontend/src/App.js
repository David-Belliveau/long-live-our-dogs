import './App.css';
import logo from './assets/logo.png';
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
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main className="hero">
        <h1>Your Dog’s Medical Story Can Help Save Lives</h1>
        <p className="subtitle">
          The biggest barrier to life-saving dog research is lack of data. We're fixing that — together.
        </p>
      </main>
      <section className="cta">
        <h2>Ready to Make a Difference?</h2>
        {/* <button className="upload-button">Choose Files</button> */}
        <UploadForm />
        <p> By uploading your dog's medical records, you will help create better outcomes for dogs everywhere.</p>
      </section>

        </div>
  );
}

export default App;

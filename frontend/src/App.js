// import './App.css';
// import logo from './assets/logo.png';
// import dogPhoto from './assets/dog-photo.jpg';
// import UploadForm from './UploadForm';

// function App() {
//   return (
//     <div className="App">

//       {/* NAVBAR */}
//       <header className="navbar">
//         <div className="logo">
//           <img src={logo} alt="Long Live Our Dogs Logo" className="logo-image" />
//           <span>Long Live Our Dogs</span>
//         </div>
//         <nav className="nav-links">
//           <a href="#upload">Upload</a>
//           <a href="#about">About</a>
//           <a href="#contact">Contact</a>
//         </nav>
//       </header>

//       {/* HERO SECTION */}
//       {/* <section className= */}
//       <section className="hero-bg">
//         {/* <div className="" */}
//         <div className="container hero">
//           <div className="hero-text">
//             {/* <h1>Your Dog’s Medical Story Can Help Save Lives</h1> */}
//             <h1>Turn Medical Records into Life-Saving Research for Dogs</h1>
//             <p className="subtitle">
//               {/* The biggest barrier to life-saving dog research is lack of data. We're fixing that. Together. */}
//               {/* Join thousands of dog owners helping vets and researchers improve care — anonymously, securely, and never for profit. */}
//               Join thousands of dog owners helping vets and researchers improve care.
//             </p>

//             <div className="cta-buttons">
//               <a href="#upload" className="cta-primary">Upload Now</a>
//               <a href="#about" className="cta-secondary">Learn More</a>
//             </div>
//           </div>

//           <div className="hero-image">
//             <img src={dogPhoto} alt="Dog with family" />
//           </div>
//         </div>
//       </section>

//       {/* EXPLAINER SECTION */}
//       {/* <section className="explainer">
//         <h2>Why Medical Records?</h2>
//         <p>
//           Most breakthroughs in human medicine come from large datasets. It's time dogs had the same advantage.
//           Your dog's records help researchers find patterns, improve treatment, and save lives.
//         </p>
//       </section> */}
//       <section className="explainer-bg">
//         <div className="container explainer">
//           <h2>Why Upload?</h2>
          // <p>Your dog's records could help researchers save lives — and we keep it ethical:</p>
          // <ul>
          //   <li>🔒 All data anonymized (no names, no personal info)</li>
          //   <li>🚫 Never shared for profit or marketing</li>
          //   <li>🐾 Used only to improve care for dogs</li>
          // </ul>
//               <p>
//                 Vets and researchers need real records to improve how we treat serious illness in dogs. 
//                 Your dog's story can help — securely, anonymously, and never for profit.
//               </p>
//         </div>
//       </section>



//       {/* CTA SECTION */}
//       <section className="cta">
//         <h2>Ready to Make a Difference?</h2>
//         <UploadForm />
//         <p>By uploading your dog's medical records, you will help create better outcomes for dogs everywhere.</p>
//       </section>

//     </div>
//   );
// }

// export default App;


import './App.css';
import logo from './assets/logo.png';
import dogPhoto from './assets/dog-photo.jpg';
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
      <section className="hero-bg">
        <div className="container hero">
          <div className="hero-text">
            <h1>Turn Medical Records into Life-Saving Research for Dogs</h1>
            <p className="subtitle">
              Join thousands of dog owners helping vets and researchers improve care.
            </p>
            <div className="cta-buttons">
              <a href="#upload" className="cta-primary">Upload Now</a>
              <a href="#about" className="cta-secondary">Learn More</a>
            </div>
          </div>

          <div className="hero-image">
            <img src={dogPhoto} alt="Dog with family" />
          </div>
        </div>
      </section>

      {/* EXPLAINER SECTION */}
      <section className="explainer-bg">
        <div className="container">
          <div className="explainer-text">
            <h2>Why Upload?</h2>
            <p>
              Vets and researchers need real records to improve how we treat serious illness in dogs. <br />
              {/* Your dog’s story can help — securely, anonymously, and never for profit. */}
            </p>
            {/* <p>Your dog's records could help researchers save lives — and we keep it ethical:</p> */}
              <ul>
                <li>🔒 All data anonymized (no names, no personal info)</li>
                <li>🚫 Never shared for profit or marketing</li>
                <li>🐾 Used only to improve care for dogs</li>
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
    </div>
  );
}

export default App;

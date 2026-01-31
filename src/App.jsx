import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>NextGen Learning Academy</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Welcome to NextGen Learning Academy</h2>
          <p>Empowering the next generation of learners with cutting-edge education</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>🎓 Expert Instructors</h3>
            <p>Learn from industry professionals with years of experience</p>
          </div>
          <div className="feature-card">
            <h3>📚 Diverse Courses</h3>
            <p>Wide range of subjects from technology to business</p>
          </div>
          <div className="feature-card">
            <h3>🌟 Flexible Learning</h3>
            <p>Study at your own pace, anytime, anywhere</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 NextGen Learning Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

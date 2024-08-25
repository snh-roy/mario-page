import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  const sentences = [
    'computer science student, software engineer and tech enthusiast',
    'Music junkie and a photographer wannabe'
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    if (letterIndex < sentences[sentenceIndex].length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + sentences[sentenceIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100); // Speed of typing

      return () => clearInterval(typingInterval);
    } else {
      // Pause before switching to the next sentence
      const pauseInterval = setTimeout(() => {
        setDisplayedText('');
        setLetterIndex(0);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, 2000); // Pause for 2 seconds before clearing

      return () => clearTimeout(pauseInterval);
    }
  }, [letterIndex, sentenceIndex]);

  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hello, I am a:</h1>
          <h2 className="typing-text">{displayedText}</h2>
        </div>
      </section>

      <section className="about-section">
        <div className="about-text">
          <h2>Hi there!</h2>
          <p>
          My name is Mario Gegprifti. I am currently pursuing a Bachelor of Science in Computer Science
          with a concentration in Financial Mathematics at Baruch College. I work as a Software Engineer II at Rexera,
          where I focus on building new features and enhancing platform efficiency.
          I am passionate about finance, programming, and leveraging technology to solve complex problems.
          </p>

          <p>Currently, I am:</p>
          <p>
          <ul>
            <li>Taking Algorithms and Maths classes</li>
            <li>Bulding new platform features at Rexera</li>
            <li>Grinding Leet Code</li>
            <li>Looking for new opportunites</li>
          </ul>
          </p>
        </div>
        <div className="about-links">
          <h2>Links</h2>
          <p>
            <a href="https://github.com/mariocodesforfun" target="_blank" rel="noopener noreferrer">GitHub</a> | 
            <a href="https://www.linkedin.com/in/mario-gegprifti-346b97b9" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
            <a href="https://www.instagram.com/mario.g21_/" target="_blank" rel="noopener noreferrer"> Instagram</a>
          </p>
          <p>
            <a href="mailto:gegpriftimario@gmail.com">gegpriftimario@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
import React from 'react';
import './Features.css';
import img0 from '../Assets/Images/img0.png';
import img1 from '../Assets/Images/img1.png';
import img2 from '../Assets/Images/img2.png';
import img3 from '../Assets/Images/img3.png';
import img4 from '../Assets/Images/img4.png';

const features = [
  { title: "Image Occlusion", description: "Hide parts of images for visual learning.", image: img0},
  { title: "Notes", description: "Create structured notes from PDFs, videos, and images.", image: img1},
  { title: "Flashcards", description: "Generate interactive flashcards for quick revisions.", image: img2},
  { title: "Summarization", description: "Extract and summarize key information.",  image: img3 },
  { title: "Q&A Generation", description: "Generate questions and answers from content.", image: img4}
];

const Features = () => (
  <section id="features" className="features">
    <h1>Features.</h1>
    <div className="feature-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
            <img src={feature.image} alt={feature.title} className="feature-image" />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;

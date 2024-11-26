import React from 'react';
import './Testimonials.css';
import img0 from '../Assets/Images/img0.png';


// const testimonials = [
//   "John Doe: EduSage has revolutionized the way I learn!",
//   "Jane Smith: The best platform for personalized education.",
//   "Alex Brown: Flashcards and Q&A features are my favorites."
// ];

const testimonials = [
    { title: "John Doe: EduSage has revolutionized the way I learn!", image: img0},
    { title:"Jane Smith: The best platform for personalized education.", image: img0},
    { title:"Alex Brown: Flashcards and Q&A features are my favorites.", image: img0},
    { title:"John Doe: EduSage has revolutionized the way I learn!",  image: img0 },
    { title:"John Doe: EduSage has revolutionized the way I learn!", image: img0}
  ];

const Testimonial = () => (
  <section id="testimonials" className="testimonials">
    <h2>What Our Users Say</h2>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial">
        <img src={testimonial.image} alt={testimonial} className="feature-image" />
        <p>{testimonial.title}</p>
      </div>
    ))}
  </section>
);

export default Testimonial;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills helped us deliver our project ahead of schedule. The code quality was exceptional and their communication was top-notch throughout the entire process.",
    name: "Sarah Johnson",
    position: "CTO at TechSolutions Inc."
  },
  {
    id: 2,
    quote: "One of the most talented developers I've had the privilege to work with. They took our vague ideas and turned them into a beautiful, functional application that exceeded all our expectations. Their ability to understand user needs and translate them into technical solutions is remarkable.",
    name: "Michael Chen",
    position: "Product Manager at DesignHub"
  },
  {
    id: 3,
    quote: "The speed and quality of work was impressive. They implemented complex features with elegant solutions and were always willing to go the extra mile to ensure everything was perfect. I would recommend them without hesitation for any frontend development work.",
    name: "Emily Rodriguez",
    position: "Lead Developer at DigitalAgency"
  },
  {
    id: 4,
    quote: "Their design sensibility combined with technical expertise created a product that our users love. They were able to bridge the gap between design and development seamlessly, suggesting improvements that made the final product much stronger.",
    name: "David Kim",
    position: "UX Director at CreativeMinds"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullQuote, setShowFullQuote] = useState(null);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const getAdjacentIndex = (offset) => {
    const length = testimonials.length;
    return (currentIndex + offset + length) % length;
  };

  const toggleFullQuote = (id) => {
    setShowFullQuote(showFullQuote === id ? null : id);
  };

  const handlePeekClick = (offset) => {
    const newIndex = getAdjacentIndex(offset);
    setDirection(offset);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">WHAT PEOPLE SAY ABOUT ME</h2>
      
      <div className="testimonials-carousel-wrapper">
        <div className="testimonials-carousel">
          {/* Previous Card (peekable) */}
          <motion.div 
            className="testimonial-card peek-left glass-pane"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 0.6, x: -80, scale: 0.85 }}
            transition={{ duration: 0.5 }}
            onClick={() => handlePeekClick(-1)}
          >
            <div className="glass-overlay"></div>
            <div className="testimonial-content">
              <p className="testimonial-quote">
                {testimonials[getAdjacentIndex(-1)].quote.substring(0, 100)}...
              </p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[getAdjacentIndex(-1)].name}</h4>
              </div>
            </div>
          </motion.div>

          {/* Current Card (main focus) */}
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              className="testimonial-card main-card glass-pane"
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-overlay"></div>
              <div className="testimonial-content">
                <p className="testimonial-quote">
                  {testimonials[currentIndex].quote.length > 150 && showFullQuote !== testimonials[currentIndex].id
                    ? `${testimonials[currentIndex].quote.substring(0, 150)}...`
                    : testimonials[currentIndex].quote}
                </p>
                
                {testimonials[currentIndex].quote.length > 150 && (
                  <button 
                    className="show-more-btn"
                    onClick={() => toggleFullQuote(testimonials[currentIndex].id)}
                  >
                    {showFullQuote === testimonials[currentIndex].id ? 'Show Less' : 'Show More'}
                    <FiPlus className={`plus-icon ${showFullQuote === testimonials[currentIndex].id ? 'expanded' : ''}`} />
                  </button>
                )}
                
                <div className="testimonial-author">
                  <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                  <p className="author-position">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Card (peekable) */}
          <motion.div 
            className="testimonial-card peek-right glass-pane"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 0.6, x: 80, scale: 0.85 }}
            transition={{ duration: 0.5 }}
            onClick={() => handlePeekClick(1)}
          >
            <div className="glass-overlay"></div>
            <div className="testimonial-content">
              <p className="testimonial-quote">
                {testimonials[getAdjacentIndex(1)].quote.substring(0, 100)}...
              </p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[getAdjacentIndex(1)].name}</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="carousel-controls">
        <div className="nav-icon" onClick={prevTestimonial}>
          <div className="icon-circle">
            <FiChevronLeft className="icon" />
            <div className="shine"></div>
          </div>
        </div>
        <div className="nav-icon" onClick={nextTestimonial}>
          <div className="icon-circle">
            <FiChevronRight className="icon" />
            <div className="shine"></div>
          </div>
        </div>
      </div>

      {/* Full Quote Modal */}
      {showFullQuote === testimonials[currentIndex].id && (
        <div className="quote-modal" onClick={() => setShowFullQuote(null)}>
          <div className="modal-content glass-pane" onClick={e => e.stopPropagation()}>
            <div className="glass-overlay"></div>
            <div className="modal-text-content">
              <p className="full-quote">{testimonials[currentIndex].quote}</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                <p className="author-position">{testimonials[currentIndex].position}</p>
              </div>
              <button 
                className="close-modal-btn"
                onClick={() => setShowFullQuote(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;
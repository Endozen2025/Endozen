import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  facility: string;
  rating: number;
  quote: string;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ 
  testimonials, 
  autoPlay = true, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!testimonials.length) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>

      {/* Testimonial Content */}
      <div className="p-8 md:p-12 text-center">
        <Quote className="h-12 w-12 text-blue-200 mx-auto mb-6" />
        
        {/* Rating Stars */}
        <div className="flex justify-center mb-6">
          {[...Array(currentTestimonial.rating)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl font-light text-gray-800 mb-8 leading-relaxed">
          "{currentTestimonial.quote}"
        </blockquote>

        {/* Author Info */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-white">
              {currentTestimonial.image}
            </span>
          </div>
          <div className="text-center md:text-left">
            <div className="font-semibold text-gray-900 text-lg">
              {currentTestimonial.name}
            </div>
            <div className="text-blue-600 font-medium">
              {currentTestimonial.title}
            </div>
            <div className="text-gray-600 text-sm">
              {currentTestimonial.facility}
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 pb-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
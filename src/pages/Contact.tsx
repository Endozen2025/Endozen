import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceNeeded: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-12 rounded-xl shadow-lg text-center max-w-md">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us. We'll get back to you within 2 hours during business hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <img 
            src="/endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy.jpg" 
            alt="Contact EndoZen team for endoscope repair and medical equipment service" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-green-300">
              We're Here to Help - Let's Talk Scopes
            </p>
            <p className="text-lg max-w-4xl mx-auto opacity-90">
              Have a question about repairs, service, or selling your equipment? Need a quote or want to schedule a pickup?
              Our team at EndoZen India Pvt Ltd is ready to assist you. Whether you're a hospital, diagnostic center, clinic,
              or distributor - we're just a message or call away.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start bg-blue-50 p-6 rounded-xl">
                  <div className="flex-shrink-0">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <div>
                      <p className="text-lg font-medium text-blue-600">+91-XXXXXXXXXX</p>
                      <p className="text-gray-600">Call us for immediate assistance</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start bg-green-50 p-6 rounded-xl">
                  <div className="flex-shrink-0">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <div>
                      <p className="text-lg font-medium text-blue-600">info@endozenindia.com</p>
                      <p className="text-gray-600">Send us your equipment details</p>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start bg-blue-50 p-6 rounded-xl">
                  <div className="flex-shrink-0">
                    <Building className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Website</h3>
                    <div>
                      <p className="text-lg font-medium text-blue-600">www.endozenindia.com</p>
                      <p className="text-gray-600">Visit our website for more information</p>
                    </div>
                  </div>
                </div>

                {/* Workshop Location */}
                <div className="flex items-start bg-green-50 p-6 rounded-xl">
                  <div className="flex-shrink-0">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Workshop Location</h3>
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">EndoZen India Pvt Ltd</p>
                      <p className="text-gray-600">[Your Address Here]</p>
                      <p className="text-gray-600">(City, State, Pincode)</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start bg-blue-50 p-6 rounded-xl">
                  <div className="flex-shrink-0">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium text-gray-900">Monday - Friday</p>
                          <p className="text-gray-600">09:00 AM - 05:00 PM</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Weekend</p>
                          <p className="text-gray-600">Saturday: Closed</p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    required
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select service type</option>
                    <option value="repair">Repair</option>
                    <option value="sell">Sell Equipment</option>
                    <option value="general">General Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="pickup">Schedule Pickup</option>
                    <option value="maintenance">Preventive Maintenance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Please provide details about your equipment, service needs, or any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Submit
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Quick Response:</strong> We typically respond to all inquiries within 2 hours during business hours.
                  For urgent repairs, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Serve Healthcare Facilities Across India
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive endoscope repair and equipment buying services nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                type: 'Hospitals',
                description: 'Large hospital networks and medical centers',
                image: '/hospital-building-red-cross-medical-institution-health-treatment-disease-wallpaper-background.jpg'
              },
              {
                type: 'Diagnostic Centers',
                description: 'Specialized diagnostic and imaging facilities',
                image: '/hand-with-protective-gloves-holding-blood-samples-covid-test.jpg'
              },
              {
                type: 'Clinics',
                description: 'Private clinics and outpatient facilities',
                image: '/empty-modern-medical-office-having-disease-documents-table-equipped-with-contemporary-furniture-hospital-workplace-with-nobody-it-ready-sickness-consultation-medicine-support.jpg'
              },
              {
                type: 'Distributors',
                description: 'Medical equipment distributors and dealers',
                image: '/professional-handshake-symbolizing-scientific-collaboration.jpg'
              }
            ].map((facility, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={facility.image} 
                  alt={facility.type} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.type}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-600">Choose the best way to reach us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center shadow-lg">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-blue-600 font-bold text-lg">+91-XXXXXXXXXX</p>
              <p className="text-gray-600 text-sm mt-2">For immediate assistance</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center shadow-lg">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-blue-600 font-bold">info@endozenindia.com</p>
              <p className="text-gray-600 text-sm mt-2">Send equipment details</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center shadow-lg">
              <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Send Message</h3>
              <p className="text-gray-600">Use the form above for</p>
              <p className="text-gray-600">detailed inquiries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you need equipment repair, want to sell your scopes, or have questions about our services,
            we're here to help. Contact us today for expert assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-XXXXXXXXXX"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <a
              href="mailto:info@endozenindia.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
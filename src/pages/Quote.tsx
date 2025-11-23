import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, FileText, Send, CheckCircle, Phone, Mail } from 'lucide-react';
import { emailService } from '../services/emailService';

const Quote = () => {
  const [formData, setFormData] = useState({
    facilityName: '',
    contactName: '',
    email: '',
    phone: '',
    facilityType: '',
    equipmentType: '',
    equipmentBrand: '',
    equipmentModel: '',
    serviceType: '',
    urgency: '',
    symptoms: '',
    preferredDate: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (submitError) setSubmitError('');
  };

  // Updated submit function with EmailJS integration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const result = await emailService.sendQuoteEmail(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          facilityName: '',
          contactName: '',
          email: '',
          phone: '',
          facilityType: '',
          equipmentType: '',
          equipmentBrand: '',
          equipmentModel: '',
          serviceType: '',
          urgency: '',
          symptoms: '',
          preferredDate: '',
          additionalInfo: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(result.error || 'Failed to send quote request. Please try again or contact us directly.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-12 rounded-xl shadow-lg text-center max-w-md">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your service request. Our team will review your information and contact you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Request Endoscope Repair Quote | EndoZen India</title>
        <meta
          name="description"
          content="Request a fast, detailed quote for endoscope repair or preventive maintenance from EndoZen India. Share facility, equipment, and urgency details to get started."
        />
        <link rel="canonical" href="https://endozenindia.com/quote" />
      </Helmet>
      <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="/endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy.jpg" 
            alt="Request endoscope and medical equipment service quote" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-blue-700/60 to-green-600/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request a Service Quote
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Get a fast, accurate quote for your medical equipment servicing needs. 
              Our experts will review your request and provide a detailed estimate within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
            <Phone className="h-6 w-6 mr-3 mb-2 md:mb-0" />
            <span className="font-semibold mr-4">Emergency Service Needed?</span>
            <span>Call us directly: <a href="tel:+918569804777" className="underline font-bold">+91 8569804777</a></span>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Facility Information */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                Facility Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="facilityName" className="block text-sm font-medium text-gray-700 mb-2">
                    Facility Name *
                  </label>
                  <input
                    type="text"
                    id="facilityName"
                    name="facilityName"
                    required
                    value={formData.facilityName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your facility name"
                  />
                </div>
                <div>
                  <label htmlFor="facilityType" className="block text-sm font-medium text-gray-700 mb-2">
                    Facility Type *
                  </label>
                  <select
                    id="facilityType"
                    name="facilityType"
                    required
                    value={formData.facilityType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select facility type</option>
                    <option value="hospital">Hospital</option>
                    <option value="clinic">Clinic</option>
                    <option value="surgery-center">Surgery Center</option>
                    <option value="diagnostic-center">Diagnostic Center</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@facility.com"
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
              </div>
            </div>

            {/* Equipment Information */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                Equipment Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="equipmentType" className="block text-sm font-medium text-gray-700 mb-2">
                    Equipment Type *
                  </label>
                  <select
                    id="equipmentType"
                    name="equipmentType"
                    required
                    value={formData.equipmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select equipment type</option>
                    <option value="gastroscope">Gastroscope</option>
                    <option value="colonoscope">Colonoscope</option>
                    <option value="bronchoscope">Bronchoscope</option>
                    <option value="laparoscope">Laparoscope</option>
                    <option value="arthroscope">Arthroscope</option>
                    <option value="hysteroscope">Hysteroscope</option>
                    <option value="camera-system">Camera System</option>
                    <option value="light-source">Light Source</option>
                    <option value="duodenoscope">Duodenoscope</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="equipmentBrand" className="block text-sm font-medium text-gray-700 mb-2">
                    Equipment Brand *
                  </label>
                  <select
                    id="equipmentBrand"
                    name="equipmentBrand"
                    required
                    value={formData.equipmentBrand}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select brand</option>
                    <option value="olympus">Olympus</option>
                    <option value="karl-storz">Karl Storz</option>
                    <option value="pentax">Pentax</option>
                    <option value="fujifilm">Fujifilm</option>
                    <option value="stryker">Stryker</option>
                    <option value="smith-nephew">Smith & Nephew</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="equipmentModel" className="block text-sm font-medium text-gray-700 mb-2">
                    Equipment Model
                  </label>
                  <input
                    type="text"
                    id="equipmentModel"
                    name="equipmentModel"
                    value={formData.equipmentModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Model number or name"
                  />
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select service type</option>
                    <option value="endoscope-repair">Endoscope Repair</option>
                    <option value="maintenance">Preventive Maintenance</option>
                    <option value="priority-support">Priority Support</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select urgency</option>
                    <option value="emergency">Emergency (Same Day)</option>
                    <option value="urgent">Urgent (24-48 Hours)</option>
                    <option value="standard">Standard (3-7 Days)</option>
                    <option value="scheduled">Scheduled Maintenance</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Service Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                  Symptoms or Issues
                </label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  rows={4}
                  value={formData.symptoms}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Describe any symptoms, error messages, or issues you're experiencing..."
                />
              </div>
              <div className="mt-6">
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Any additional information that might be helpful..."
                />
              </div>
            </div>

            {/* Error Message */}
            {submitError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">{submitError}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-12 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-3 h-5 w-5" />
                    Submit Service Request
                  </>
                )}
              </button>
              <p className="mt-4 text-sm text-gray-600">
                We'll review your request and contact you within 24 hours during business hours.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-600">Our service team is ready to help</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Hotline</h3>
              <a
                href="tel:+918569804777"
                className="text-blue-600 font-bold text-lg hover:text-blue-800"
              >
                +91 8569804777
              </a>
              <p className="text-gray-600 text-sm mt-2">Available 24/7</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-blue-600 font-bold">info@endozenindia.com</p>
              <p className="text-gray-600 text-sm mt-2">Response within 24 hours</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule Service</h3>
              <p className="text-gray-600">Use the form above for</p>
              <p className="text-gray-600">non-emergency requests</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Quote;
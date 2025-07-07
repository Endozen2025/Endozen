import React from 'react';
import { FileText, Shield, AlertCircle, Scale, Users, Gavel } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" 
            alt="Terms and conditions for medical equipment service" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Please read these terms and conditions carefully before using our services. 
              By using EndoZen's services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-blue-100 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Scale className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Terms</h3>
              <p className="text-gray-600">Our terms are designed to be fair and transparent for all parties.</p>
            </div>
            <div className="text-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Protection</h3>
              <p className="text-gray-600">Clear guidelines that protect both our services and your interests.</p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mutual Respect</h3>
              <p className="text-gray-600">Built on principles of mutual respect and professional conduct.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="space-y-12">
              
              {/* Acceptance of Terms */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    By accessing or using EndoZen's website and services, you agree to be bound by these Terms and Conditions ("Terms"). 
                    If you do not agree to these Terms, please do not use our services.
                  </p>
                  <p className="text-gray-600">
                    These Terms apply to all users of our website, including but not limited to healthcare facilities, 
                    medical professionals, and individual users who access or use our services.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Important:</strong> By using our services, you represent that you are at least 18 years old 
                      and have the authority to enter into these Terms on behalf of yourself or your organization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Description */}
              <div>
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">2. Service Description</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    EndoZen provides professional medical equipment servicing, including but not limited to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Core Services</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                        <li>Endoscope repair and maintenance</li>
                        <li>Medical equipment calibration</li>
                        <li>Preventive maintenance programs</li>
                        <li>Emergency repair services</li>
                        <li>Technical consultation</li>
                        <li>Training and support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Service Standards</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                        <li>Factory-trained technicians</li>
                        <li>Genuine parts and components</li>
                        <li>Comprehensive testing procedures</li>
                        <li>Detailed service documentation</li>
                        <li>Quality assurance protocols</li>
                        <li>Warranty coverage</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 text-sm">
                      All services are performed by certified technicians in accordance with manufacturer specifications 
                      and industry standards. We reserve the right to modify our services and service areas at any time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> legal@endozen.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Mail:</strong> EndoZen Legal Department, 1234 Medical Center Drive, Healthcare City, HC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
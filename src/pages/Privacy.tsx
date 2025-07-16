import React from 'react';
import { Shield, Eye, Lock, FileText, Globe, UserCheck, Settings, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="/endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy.jpg" 
            alt="Privacy and security for medical equipment service data" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-blue-700/60 to-green-600/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl max-w-4xl mx-auto opacity-90">
              At EndoZen India Pvt. Ltd. ("EndoZen", "we", "our", or "us"), your privacy is our priority. 
              This Privacy Policy explains how we collect, use, and protect your personal information when you engage with our website and services.
            </p>
            <p className="text-sm text-blue-100 mt-4">
              Effective Date: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">EndoZen India Pvt. Ltd.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your personal information and maintaining transparency 
              in how we handle your data across all our medical equipment services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-gray-600">Industry-standard security measures to protect your personal information.</p>
            </div>
            <div className="text-center">
              <Eye className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">Clear information about what data we collect and how we use it.</p>
            </div>
            <div className="text-center">
              <UserCheck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Rights</h3>
              <p className="text-gray-600">You have control over your personal information and privacy choices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="space-y-12">
              
              {/* Information We Collect */}
              <div>
                <div className="flex items-center mb-6">
                  <Database className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">1. Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">A. Personal Information</h3>
                    <p className="text-gray-600 mb-4">We collect personal data you voluntarily provide when you:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Request a quote or schedule a service</li>
                      <li>Create an account on our website</li>
                      <li>Contact us for support or inquiries</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Participate in surveys or feedback forms</li>
                    </ul>
                    <p className="text-gray-600 mt-4 mb-3">This may include:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Name, email, phone number, address</li>
                      <li>Facility or institution details</li>
                      <li>Equipment and service history</li>
                      <li>Billing or payment information</li>
                      <li>Your communication preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">B. Automatically Collected Information</h3>
                    <p className="text-gray-600 mb-4">When you browse our website, we may automatically collect:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>IP address and geolocation</li>
                      <li>Device and browser details</li>
                      <li>Operating system</li>
                      <li>Pages viewed and duration</li>
                      <li>Referring site</li>
                      <li>Cookies and tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <div className="flex items-center mb-6">
                  <Settings className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">2. How We Use Your Information</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600 mb-6">We use collected data to:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">A. Provide and Manage Services</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Process quotes and service requests</li>
                        <li>Schedule and track equipment maintenance</li>
                        <li>Provide technical support and service history</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">B. Communicate With You</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Respond to inquiries and requests</li>
                        <li>Send service updates and reminders</li>
                        <li>Share important notices</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">C. Operate and Improve Our Business</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Process payments and maintain accounts</li>
                        <li>Monitor usage to improve functionality</li>
                        <li>Analyze trends to enhance customer experience</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">D. Ensure Legal Compliance</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Meet applicable regulatory requirements</li>
                        <li>Prevent fraud and ensure data security</li>
                        <li>Enforce our terms and conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">3. Information Sharing</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600 mb-6">We do not sell or rent your personal information. We may share your data under the following circumstances:</p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">A. With Trusted Service Providers</h4>
                    <p className="text-gray-600">Only with third-party vendors who help us operate our business (e.g., IT services, payment processors) under strict confidentiality agreements.</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">B. For Legal or Safety Reasons</h4>
                    <p className="text-gray-600">If required by law or in response to legal processes, or to protect our legal rights, safety, or the safety of others.</p>
                  </div>
                  
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">C. Business Transfers</h4>
                    <p className="text-gray-600">In the case of a merger, acquisition, or sale of business assets, your information may be transferred accordingly.</p>
                  </div>
                </div>
              </div>

              {/* Your Rights and Choices */}
              <div>
                <div className="flex items-center mb-6">
                  <UserCheck className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">4. Your Rights and Choices</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">You have the right to:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                        <li>Access, update, or correct your personal data</li>
                        <li>Request deletion or restriction of your data</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                        <li>Withdraw consent where applicable</li>
                        <li>Opt out of promotional communications</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">
                      <strong>To exercise your rights,</strong> contact us via the details below.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <div className="flex items-center mb-6">
                  <Lock className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">5. Data Security</h2>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-green-800">
                    We implement industry-standard security measures to protect your personal information from unauthorized access, 
                    disclosure, or misuse.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">6. Contact Us</h2>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    For questions, concerns, or to exercise your privacy rights, please contact:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> info@endozenindia.com</p>
                    <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
                    <p><strong>Mailing Address:</strong> [Address only]</p>
                  </div>
                </div>
              </div>

              {/* Copyright Notice */}
              <div className="border-t pt-8 text-center">
                <p className="text-gray-500 text-sm mb-2">
                  © 2025 EndoZen India Pvt. Ltd. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs">
                  Privacy Policy | Terms & Conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
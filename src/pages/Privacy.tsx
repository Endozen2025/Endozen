import React from 'react';
import { Shield, Eye, Lock, FileText, Users, Globe } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" 
            alt="Privacy and security for medical equipment service data" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Your privacy is important to us. This policy explains how EndoZen collects, 
              uses, and protects your personal information.
            </p>
            <p className="text-sm text-blue-100 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-gray-600">We use industry-standard security measures to protect your personal information.</p>
            </div>
            <div className="text-center">
              <Eye className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">We're transparent about what data we collect and how we use it.</p>
            </div>
            <div className="text-center">
              <Lock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Control</h3>
              <p className="text-gray-600">You have control over your personal information and can request changes anytime.</p>
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
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">1. Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-600 mb-4">We collect personal information that you provide directly to us when you:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Request a service quote or schedule equipment maintenance</li>
                      <li>Create an account on our website</li>
                      <li>Contact us for support or inquiries</li>
                      <li>Subscribe to our newsletter or updates</li>
                      <li>Participate in surveys or feedback forms</li>
                    </ul>
                    <p className="text-gray-600 mt-4">This information may include:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Name and contact information (email, phone, address)</li>
                      <li>Facility name and healthcare institution details</li>
                      <li>Equipment information and service history</li>
                      <li>Payment and billing information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-600 mb-4">When you visit our website, we automatically collect certain information, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>IP address and location information</li>
                      <li>Browser type and version</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website or source</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">2. How We Use Your Information</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">We use the information we collect for the following purposes:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Service Delivery</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Process service requests and quotes</li>
                        <li>Schedule equipment maintenance</li>
                        <li>Provide technical support</li>
                        <li>Maintain service records</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Respond to inquiries</li>
                        <li>Send service updates</li>
                        <li>Provide maintenance reminders</li>
                        <li>Share important announcements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Business Operations</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Process payments</li>
                        <li>Maintain customer accounts</li>
                        <li>Improve our services</li>
                        <li>Analyze usage patterns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Meet regulatory requirements</li>
                        <li>Protect against fraud</li>
                        <li>Enforce our terms of service</li>
                        <li>Resolve disputes</li>
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
                  <p className="text-gray-600">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Service Providers</h4>
                    <p className="text-gray-600">We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, provided they agree to keep this information confidential.</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Legal Requirements</h4>
                    <p className="text-gray-600">We may disclose your information when required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect our rights, property, or safety.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Business Transfers</h4>
                    <p className="text-gray-600">In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred as part of that transaction.</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacy@endozen.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Mail:</strong> EndoZen Privacy Officer, 1234 Medical Center Drive, Healthcare City, HC 12345</p>
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

export default Privacy;
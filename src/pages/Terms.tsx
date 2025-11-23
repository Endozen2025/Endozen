import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, AlertCircle, Scale, Users, Gavel, CreditCard, RefreshCw, Eye, MapPin } from 'lucide-react';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions | EndoZen India</title>
        <meta
          name="description"
          content="Review the terms and conditions for EndoZen India's endoscope repair, maintenance, and equipment services including payment, liability, and governance."
        />
        <link rel="canonical" href="https://endozenindia.com/terms" />
      </Helmet>
      <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="/endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy.jpg" 
            alt="Terms and conditions for medical equipment service" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-blue-700/60 to-green-600/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl max-w-4xl mx-auto opacity-90">
              Please read these Terms and Conditions ("Terms") carefully before using EndoZen India's website and services. 
              By using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>
            <p className="text-sm text-blue-100 mt-4">
              Last Updated: January 15, 2025
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
                    By accessing or using EndoZen India's website and services, you agree to comply with these Terms. These 
                    Terms apply to all users, including healthcare facilities, medical professionals, and individual users.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Important:</strong> You confirm that you are at least 18 years old and have the authority to 
                      enter into these Terms on behalf of yourself or your organization.
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
                    EndoZen India Pvt Ltd provides professional endoscope and medical equipment servicing, including but not limited to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Core Services</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                        <li>Endoscope repair and maintenance</li>
                        <li>Preventive maintenance programs</li>
                        <li>Emergency repair services</li>
                        <li>Technical consultation</li>
                        <li>Priority support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Service Standards</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                        <li>Trained Engineers</li>
                        <li>Use of genuine parts and components</li>
                        <li>Comprehensive testing procedures</li>
                        <li>Detailed service documentation</li>
                        <li>Quality assurance protocols</li>
                        <li>Warranty coverage</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 text-sm">
                      All services are conducted by Certified Engineers in accordance with manufacturer specifications 
                      and industry best practices. We reserve the right to modify or discontinue services or service areas at any time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <div className="flex items-center mb-6">
                  <CreditCard className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">3. Payment Terms</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Payment for services rendered is due as per the invoice terms. Accepted methods include bank transfer, 
                    UPI, or other agreed payment modes.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Late Payment Policy:</strong> Late payments beyond 15 days may incur a 2% monthly interest fee 
                      and may result in service suspension.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cancellation & Refund Policy */}
              <div>
                <div className="flex items-center mb-6">
                  <RefreshCw className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">4. Cancellation & Refund Policy</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Service cancellations must be requested in writing at least 24 hours prior to scheduled service.
                  </p>
                  <p className="text-gray-600">
                    Refunds, if applicable, will be processed based on the stage of service completion and any incurred expenses. 
                    Partial or no refunds may apply if service work has already commenced or resources have been allocated.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <div className="flex items-center mb-6">
                  <AlertCircle className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">5. Limitation of Liability</h2>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-800 text-sm">
                    To the fullest extent permitted by law, EndoZen India Pvt Ltd shall not be liable for any indirect, 
                    incidental, special, or consequential damages arising out of or relating to the use or inability to use our services.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">6. Intellectual Property</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    All content on the EndoZen India website, including text, graphics, logos, and service documentation, 
                    is the intellectual property of EndoZen India Pvt Ltd and may not be used or reproduced without prior written consent.
                  </p>
                  <p className="text-gray-600">
                    Any content, feedback, or materials submitted by users, including reviews, technical data, or suggestions, 
                    may be used by EndoZen India for service improvement or promotional purposes, unless explicitly stated otherwise by the user.
                  </p>
                </div>
              </div>

              {/* Privacy */}
              <div>
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">7. Privacy</h2>
                </div>
                <p className="text-gray-600">
                  Your use of our services is also governed by our Privacy Policy, which outlines how we collect, 
                  use, and safeguard your personal information.
                </p>
              </div>

              {/* Governing Law & Jurisdiction */}
              <div>
                <div className="flex items-center mb-6">
                  <Gavel className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">8. Governing Law & Jurisdiction</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    These Terms shall be governed by and construed in accordance with the laws of India.
                  </p>
                  <p className="text-gray-600">
                    Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts 
                    located in Gurgaon, Haryana.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">9. Contact Information</h2>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Company:</strong> EndoZen India Pvt Ltd</p>
                    <div>
                      <p className="font-semibold text-gray-900">Address:</p>
                      <p>M3M Urbana, C-620, Sec 67</p>
                      <p>Golf Course Ext Rd</p>
                      <p>Gurugram, Haryana 122101</p>
                    </div>
                    <p><strong>Email:</strong> info@endozenindia.com</p>
                    <p><strong>Phone:</strong> +91 8569804777</p>
                    <p><strong>Business Hours:</strong> Mon-Fri: 9 AM – 5 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Copyright Notice */}
              <div className="border-t pt-8 text-center">
                <p className="text-gray-500 text-sm">
                  © 2025 EndoZen India Pvt Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Terms;
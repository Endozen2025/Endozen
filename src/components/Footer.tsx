import { Link } from "react-router-dom";
import { Activity, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useContent } from "../hooks/useContent";
import { useState } from "react";

const Footer = () => {
  const { getContent } = useContent();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Company Info */}
          <div className="flex flex-col items-start justify-start h-full gap-0">
            {/* EndoZen Footer Logo with placeholder */}
            {!logoError ? (
              <div className="flex flex-col items-start gap-0" style={{width: '230px'}}>
                <img 
                  src="/Endozen Logo for footer.png" 
                  alt="EndoZen Logo" 
                  className="filter brightness-0 invert rounded"
                  style={{
                    height: '86px',
                    width: '230px',
                    objectFit: 'cover',
                    backgroundColor: 'transparent',
                    margin: 0,
                    padding: 0,
                    display: 'block',
                    lineHeight: 0,
                    textAlign: 'left'
                  }}
                  onError={() => setLogoError(true)}
                />
                <div className="text-gray-300 text-sm font-semibold" style={{margin: 0, padding: 0, lineHeight: 1, textAlign: 'left', width: '230px'}}>
                    Certified Endoscope Repair Services Across India
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-start gap-0">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-green-500 rounded-lg shadow-lg flex items-center justify-center self-start"
                  style={{ 
                    height: '150px', 
                    width: '350px',
                    maxWidth: '350px',
                    margin: 0,
                    padding: '16px',
                    display: 'block',
                    lineHeight: 0
                  }}
                >
                  <div className="flex items-center space-x-5">
                    <Activity className="h-14 w-14 text-white" />
                    <div className="text-center">
                      <div className="text-xl font-bold text-white tracking-wide">EndoZen</div>
                      <div className="text-sm text-gray-100 font-medium">India Pvt. Ltd.</div>
                    </div>
                  </div>
                </div>
                <div className="text-gray-300 text-sm font-semibold self-start" style={{margin: 0, padding: 0, lineHeight: 1}}>
                  Certified Endoscope Repair Services Across India
                </div>
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Endoscope Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Preventive Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Priority Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/equipment"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sell Equipment
                </Link>
              </li>
              <li>
                <button
                  className="text-gray-400 bg-gray-800 px-4 py-2 rounded-lg font-medium cursor-not-allowed opacity-60"
                  disabled
                  title="Get Quote is temporarily disabled until Gurgaon office opens."
                >
                  Get Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    {getContent('footer', 'contact', 'phone') || '+91-XXXXXXXXXX'}
                  </p>
                  <p className="text-gray-400 text-sm">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    {getContent('footer', 'contact', 'email') || 'info@endozenindia.com'}
                  </p>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    {getContent('footer', 'contact', 'address') || 'Coming Soon'}
                  </p>
                  <p className="text-gray-300">
                    {getContent('footer', 'contact', 'business_hours') || 'Mon-Fri: 9AM-5PM'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 EndoZen India Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

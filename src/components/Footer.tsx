import { Link } from "react-router-dom";
import { Activity, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useContent } from "../hooks/useContent";

const Footer = () => {
  const { getContent } = useContent();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-8 w-8 text-blue-400" />
              <div>
                <div className="text-1.5xl font-bold">
                  {getContent('footer', 'brand', 'company_name') || 'EndoZen India Pvt Ltd'}
                </div>
                </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-300 font-semibold mb-2">
                {getContent('footer', 'brand', 'tagline') || 'Precision Care. Peace of Mind.'}
              </p>
              <p className="text-sm text-gray-400">
                {getContent('footer', 'brand', 'description') || 'Certified Endoscope Repair Services Across India'}
              </p>
            </div>
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
                <Link
                  to="/quote"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Get Quote
                </Link>
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
                    {getContent('footer', 'contact', 'address') || '[Your Address Here]'}
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

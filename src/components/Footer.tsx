import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">EndoZen</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional endoscope and medical equipment servicing with certified technicians and guaranteed quality.
            </p>
            <div className="flex space-x-2">
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Endoscope Repair</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Preventive Maintenance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Equipment Calibration</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Emergency Service</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Training & Support</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/equipment" className="text-gray-300 hover:text-white transition-colors">Sell Equipment</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-white transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300">service@endozen.com</p>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300">1234 Medical Center Dr</p>
                  <p className="text-gray-300">Healthcare City, HC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 EndoZen. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
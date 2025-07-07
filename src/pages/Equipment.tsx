import React from 'react';
import { CheckCircle, Star, ArrowRight, DollarSign, Truck, FileText, Phone, Mail, Camera, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Equipment = () => {
  const equipmentWeBuy = [
    {
      category: 'Endoscopy Equipment',
      description: 'All types of endoscopic equipment in any condition',
      items: [
        'Video Gastroscopes',
        'Colonoscopes', 
        'Duodenoscopes',
        'Bronchoscopes',
        'Hysteroscopes',
        'Cystoscopes',
        'Laparoscopes',
        'Arthroscopes'
      ],
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      category: 'Light Sources & Processors',
      description: 'Video processors and illumination systems',
      items: [
        'LED Light Sources',
        'Xenon Light Sources',
        'Video Processors',
        'Camera Systems',
        'Image Processing Units',
        'Recording Systems',
        'Monitor Systems',
        'Control Units'
      ],
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Send Equipment Details',
      description: 'Send us details about the equipment you want to sell (brand, model, condition)',
      icon: FileText,
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      step: '2', 
      title: 'Receive Estimate',
      description: 'Receive an estimate from our team within 1-2 business days',
      icon: DollarSign,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      step: '3',
      title: 'Schedule Pickup',
      description: 'Schedule pickup or drop-off at your convenience',
      icon: Truck,
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      step: '4',
      title: 'Get Paid',
      description: 'Get paid after inspection and confirmation',
      icon: CheckCircle,
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const whySellToUs = [
    {
      title: 'Quick Response',
      description: 'No-obligation quotes provided promptly',
      icon: Clock,
      color: 'blue'
    },
    {
      title: 'Fair Pricing',
      description: 'Transparent and competitive pricing for your equipment',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Simple Process',
      description: 'Easy documentation and pickup coordination',
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Any Condition',
      description: 'Equipment accepted in working or non-working condition',
      icon: Shield,
      color: 'green'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" 
            alt="Sell your endoscopy equipment to EndoZen" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sell Your Endoscopy Equipment
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-6 text-green-300">
              Find Value in Your Older Scopes
            </p>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Turn your unused or surplus endoscopy equipment into value with our simple and transparent process.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Buying Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-900">
                Do you have unused or surplus endoscopy equipment?
              </p>
              <p className="text-xl font-medium text-gray-900">
                Are you upgrading your system and want to recover value from older devices?
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
                <p className="text-xl text-gray-800 font-medium">
                  At EndoZen, we buy used endoscopy equipment and scopes. Whether your equipment is
                  outdated, damaged, or fully functional, we offer a simple and transparent process to help you turn it into
                  value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Buy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Buy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We purchase a wide range of endoscopy equipment and related systems, regardless of condition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {equipmentWeBuy.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={category.image} 
                  alt={category.category} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Equipment Note */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Equipment Listed?</h3>
            <p className="text-lg text-gray-600 mb-6">
              We buy many other types of medical and endoscopy equipment. Contact us with details about your specific equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@endozenindia.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us Details
              </a>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell to EndoZen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Sell to EndoZen?
            </h2>
            <p className="text-xl text-gray-600">
              We make selling your equipment simple, fair, and hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySellToUs.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  benefit.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <benefit.icon className={`h-8 w-8 ${
                    benefit.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">Quick</div>
                <div className="text-gray-600">Response & quotes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">Fair</div>
                <div className="text-gray-600">Transparent pricing</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">Simple</div>
                <div className="text-gray-600">Documentation process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              A simple 4-step process to turn your equipment into value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-40 object-cover rounded-xl mb-6 shadow-lg"
                />
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <step.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <p className="text-lg text-gray-600 mb-8">
                The process is simple and straightforward. We handle all the logistics to make selling your equipment as easy as possible.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Camera className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Take Photos</h4>
                  <p className="text-sm text-gray-600">Send us clear photos of your equipment</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <FileText className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Provide Details</h4>
                  <p className="text-sm text-gray-600">Include brand, model, and condition information</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Send to Us</h4>
                  <p className="text-sm text-gray-600">Email everything to info@endozenindia.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Sell?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Send us photos and equipment info to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email Contact */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Send photos and equipment details for a quick quote
              </p>
              <a
                href="mailto:info@endozenindia.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                info@endozenindia.com
              </a>
            </div>

            {/* Phone Contact */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our equipment specialists
              </p>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +91-XXXXXXXXXX
              </a>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Include in Your Message</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Equipment Details</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Brand and model</li>
                    <li>• Serial number</li>
                    <li>• Year of manufacture</li>
                    <li>• Current condition</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Photos</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Overall equipment view</li>
                    <li>• Control panel/display</li>
                    <li>• Any damage or wear</li>
                    <li>• Accessories included</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Additional Info</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Reason for selling</li>
                    <li>• Service history</li>
                    <li>• Location</li>
                    <li>• Preferred timeline</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Help You Unlock Value from Your Idle Inventory
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Turn your unused or surplus endoscopy equipment into value with our simple, transparent process.
            Get a fair quote and hassle-free pickup service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@endozenindia.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Equipment Details
            </a>
            <a
              href="tel:+91-XXXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call for Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
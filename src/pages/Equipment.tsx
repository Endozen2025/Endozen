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
      title: 'Send Details',
      description: 'Email us your equipment details and photos',
      icon: FileText,
    },
    {
      step: '2', 
      title: 'Get Quote',
      description: 'Receive our quote within 24 hours',
      icon: DollarSign,
    },
    {
      step: '3',
      title: 'Pickup',
      description: 'We arrange convenient pickup',
      icon: Truck,
    },
    {
      step: '4',
      title: 'Get Paid',
      description: 'Payment after final inspection',
      icon: CheckCircle,
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
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <step.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Sell?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email Contact */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send equipment details for quote
              </p>
              <a
                href="mailto:info@endozenindia.com"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                info@endozenindia.com
              </a>
            </div>

            {/* Phone Contact */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak with our specialists
              </p>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +91-XXXXXXXXXX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Turn Your Equipment Into Value
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Simple, transparent process with fair pricing and hassle-free pickup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@endozenindia.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Details
            </a>
            <a
              href="tel:+91-XXXXXXXXXX"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
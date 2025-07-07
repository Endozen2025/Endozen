import React from 'react';
import { Award, Users, Clock, Shield, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <img 
            src="/endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy.jpg" 
            alt="Medical professionals and endoscope equipment in healthcare facility" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About EndoZen
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Founded on the principle of 'Zen'—the art of precision and balance. We bring this philosophy 
              into every aspect of endoscope and medical device servicing.
            </p>
          </div>
        </div>
      </section>

      {/* About EndoZen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About EndoZen
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  EndoZen is founded on the principle of 'Zen'—the art of precision and balance. We bring this philosophy 
                  into every aspect of endoscope and medical device servicing. With a deep understanding of the healthcare 
                  industry's needs, we deliver advanced repair solutions that meet international quality and safety standards.
                </p>
                <p>
                  We serve hospitals, diagnostic centers, clinics, and OEM partners across India—offering comprehensive 
                  solutions for endoscopic instruments and accessories. Every device we repair goes through strict quality 
                  checks and is restored for long-term reliability and clinical performance.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Target className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Precision & Balance</h3>
                  <p className="text-gray-600 text-sm">Zen philosophy applied to every repair and service</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Shield className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">International Standards</h3>
                  <p className="text-gray-600 text-sm">Advanced solutions meeting global quality requirements</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/flexible-endoscope-medical-investigative-surgical-tool-monitoring-gastrointestinal-endoscope-clinic-closeup.jpg" 
                alt="Flexible endoscope medical investigative surgical tool for gastrointestinal monitoring in clinic" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">2010</div>
                    <div className="text-gray-600">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-gray-600">Healthcare Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Certified Technicians</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Vision */}
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become India's leading provider of precision endoscope repair solutions—recognized for our trust, 
                innovation, and commitment to healthcare excellence.
              </p>
            </div>

            {/* Our Mission */}
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver high-quality, reliable endoscope repair services that enhance clinical outcomes, reduce 
                equipment downtime, and maximize the performance and longevity of critical medical devices.
              </p>
            </div>

            {/* Core Values */}
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <div className="text-left space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">Precision</h4>
                  <p className="text-gray-600 text-sm">Every repair is performed with detail-oriented craftsmanship</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Integrity</h4>
                  <p className="text-gray-600 text-sm">Honest evaluations and transparent pricing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Innovation</h4>
                  <p className="text-gray-600 text-sm">We continually improve our tools, training, and processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Healthcare Across India
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive endoscope repair solutions for hospitals, diagnostic centers, clinics, and OEM partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Hospitals',
                description: 'Large hospital networks and medical centers',
                icon: Users,
                image: '/hospital-building-red-cross-medical-institution-health-treatment-disease-wallpaper-background.jpg'
              },
              {
                title: 'Diagnostic Centers',
                description: 'Specialized diagnostic and imaging facilities',
                icon: Target,
                image: '/hand-with-protective-gloves-holding-blood-samples-covid-test.jpg'
              },
              {
                title: 'Clinics',
                description: 'Private clinics and outpatient facilities',
                icon: Heart,
                image: '/empty-modern-medical-office-having-disease-documents-table-equipped-with-contemporary-furniture-hospital-workplace-with-nobody-it-ready-sickness-consultation-medicine-support.jpg'
              },
              {
                title: 'OEM Partners',
                description: 'Original equipment manufacturers and distributors',
                icon: Shield,
                image: '/professional-handshake-symbolizing-scientific-collaboration.jpg'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-32 object-cover"
                />
                <div className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Commitment
            </h2>
            <p className="text-xl text-gray-600">
              Every device we repair goes through strict quality checks and is restored for long-term reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: 'Strict Quality Checks',
                  description: 'Comprehensive testing and validation processes ensure every device meets our high standards before return to service.'
                },
                {
                  title: 'Long-term Reliability',
                  description: 'Our repair processes focus on restoring equipment for extended operational life and consistent clinical performance.'
                },
                {
                  title: 'Clinical Performance',
                  description: 'All repairs are optimized to maintain the highest levels of clinical functionality and diagnostic accuracy.'
                },
                {
                  title: 'International Standards',
                  description: 'Our quality management systems and repair protocols meet international healthcare equipment standards.'
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img 
                src="/flexible-endoscope-medical-investigative-surgical-tool-monitoring-gastrointestinal-endoscope-clinic-closeup.jpg" 
                alt="Flexible endoscope medical investigative surgical tool - quality assurance and testing excellence" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">
                  Our commitment to excellence ensures your endoscopic equipment performs at its best when you need it most.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 text-green-500 mr-3" />
                    <span>Comprehensive testing protocols</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span>International quality standards</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 text-green-500 mr-3" />
                    <span>Long-term reliability focus</span>
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

export default About;
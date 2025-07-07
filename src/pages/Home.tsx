import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  Phone,
  Award,
  Wrench,
  Settings,
  Target,
  Truck,
  Search,
  FileText,
  AlertTriangle,
} from "lucide-react";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Professional endoscope and medical equipment in modern healthcare facility"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Endoscope Care for
              <br />
              <span className="text-green-300">Peace of Mind</span>
            </h1>

            <div className="mb-8">
              <div className="text-xl md:text-2xl font-semibold mb-6 tracking-wider">
                REPAIRS | UPGRADES | PURCHASES| PREVENTIVE MAINTENANCE
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center shadow-lg"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/quote"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
              >
                Request a Repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Precision & Reliability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Precision in Every Repair.</span>{" "}
              <span className="text-green-600">
                Reliability in Every Service.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At EndoZen, we take a precision-centered approach to endoscope
                  repair and lifecycle management. We understand the daily
                  challenges faced by hospitals, clinics, and diagnostic centers
                  - delayed repairs, inconsistent service quality, and rising
                  costs.
                </p>
                <p>
                  That's why we offer accurate, affordable, and dependable
                  repair solutions for flexible endoscopes across India. Every
                  device we service undergoes strict quality control to ensure
                  optimal performance and full compliance with healthcare
                  standards.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Target className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Precision-Centered
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Every repair follows strict protocols for optimal
                    performance
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Shield className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Quality Control
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive testing ensures healthcare compliance
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Truck className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Nationwide Pickup & Delivery Available
                  </h3>
                </div>
                <p className="text-blue-100">
                  Convenient logistics support across India for seamless service
                  experience
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Precision endoscope repair and quality control process"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Commitment
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm">
                      Accurate & affordable solutions
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm">Dependable repair services</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm">
                      Healthcare standards compliance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">14+</div>
              <div className="text-gray-600">
                <div>
                  <p>Years of Global Experience</p>
                  <p>Trusted by Clients Worldwide</p>
                </div>
                <div>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                5000+
              </div>
              <div className="text-gray-600">Equipment Serviced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2 flex justify-center">
                <AlertTriangle className="h-12 w-12" />
              </div>
              <div className="text-gray-600">
                Priority Support for Urgent Repairs
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with EndoZen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with EndoZen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond repair — delivering lifecycle optimization,
              preventive maintenance, cost-effective service contracts, and
              expert nationwide support tailored to your operational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Extend endoscope equipment lifespan"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 left-4">
                  <Shield className="h-12 w-12 text-blue-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Extend Equipment Lifespan
              </h3>
              <p className="text-gray-600 mb-6">
                Our precision repair and maintenance services significantly
                extend the lifespan of your endoscopy equipment, maximizing your
                investment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Advanced repair techniques
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Quality component replacement
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Lifecycle optimization
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Improve device availability and minimize downtime"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 left-4">
                  <Clock className="h-12 w-12 text-green-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Minimize Downtime
              </h3>
              <p className="text-gray-600 mb-6">
                Improve device availability and minimize downtime with our fast
                turnaround times and preventive maintenance programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Rapid response times
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Preventive maintenance schedules
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Expert guidance and technical support"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 left-4">
                  <Users className="h-12 w-12 text-blue-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expert Support
              </h3>
              <p className="text-gray-600 mb-6">
                Access expert guidance and responsive technical support with
                tailored service contracts and nationwide logistics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Technical consultation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Customized service contracts
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Nationwide logistics support
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Reduce operational disruptions"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 left-4">
                  <Settings className="h-12 w-12 text-green-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Reduce Disruptions
              </h3>
              <p className="text-gray-600 mb-6">
                Reduce operational disruptions with our comprehensive
                maintenance programs and proactive equipment monitoring.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Proactive monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Scheduled maintenance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Operational continuity
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Affordable and dependable solutions"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 left-4">
                  <Award className="h-12 w-12 text-blue-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Affordable Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Get accurate, affordable, and dependable repair solutions with
                transparent pricing and comprehensive warranties.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Transparent pricing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Comprehensive warranties
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cost-effective solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive endoscope and medical equipment servicing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Preventive Maintenance",
                description:
                  "Scheduled maintenance programs to prevent costly breakdowns and extend equipment life with comprehensive testing.",
                features: [
                  "Regular inspections",
                  "Performance testing",
                  "Compliance certification",
                ],
                icon: Settings,
                image:
                  "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop",
              },
              {
                title: "Emergency Service",
                description:
                  "24/7 emergency repair service to minimize downtime and keep your facility operational with same-day response.",
                features: [
                  "Same-day response",
                  "On-site service",
                  "Loaner equipment",
                ],
                icon: Clock,
                image:
                  "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Medical professionals working with endoscopes and equipment"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-8 w-8 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-light mb-8 max-w-4xl mx-auto">
              "EndoZen has been our trusted partner for over 5 years. Their
              expertise and reliability have kept our endoscopy department
              running smoothly with minimal downtime."
            </blockquote>
            <div className="text-lg">
              <p className="font-semibold">Dr. Sarah Johnson</p>
              <p className="opacity-90">
                Chief of Gastroenterology, Metropolitan Medical Center
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Service Your Equipment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote today and experience the EndoZen difference. Fast,
            reliable, and professional service guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

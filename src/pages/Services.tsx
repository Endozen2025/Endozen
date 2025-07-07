import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Shield,
  Clock,
  Settings,
  GraduationCap,
  Phone,
  CheckCircle,
  ArrowRight,
  Search,
  FileText,
  Award,
  Truck,
  Stethoscope,
  Microscope,
  Activity,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Scope Repair Services",
      description:
        "Expert repair services for flexible endoscopes used in hospitals, diagnostic centers, and surgical facilities",
      features: [
        "Video Gastroscopes, Colonoscopes, Duodenoscopes, Bronchoscopes",
        "Light guide cables, control bodies, insertion tubes",
        "Bending sections and angulation mechanisms",
        "Equipment for gastroenterology, pulmonology, surgical endoscopy",
        "Insertion tube and bending rubber replacement",
        "Biopsy/suction channel restoration",
      ],
      turnaround: "24-48 hours",
      warranty: "90 days",
      image:
        "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
    },
    {
      icon: Shield,
      title: "Preventive Maintenance",
      description:
        "Scheduled maintenance programs to prevent costly breakdowns",
      features: [
        "Regular inspection schedules",
        "Performance testing and calibration",
        "Wear part replacement",
        "Cleaning and disinfection validation",
        "Documentation and compliance reporting",
        "Customized maintenance plans",
      ],
      turnaround: "Scheduled",
      warranty: "30 days",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
    },
    {
      icon: Settings,
      title: "Equipment Calibration",
      description:
        "Precision calibration services to ensure optimal performance",
      features: [
        "Multi-point calibration testing",
        "Performance verification",
        "Regulatory compliance certification",
        "Calibration certificate generation",
        "Equipment performance optimization",
        "Accuracy validation",
      ],
      turnaround: "2-4 hours",
      warranty: "60 days",
      image:
        "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
    },
    {
      icon: Clock,
      title: "Emergency Service",
      description: "24/7 emergency repair service to minimize downtime",
      features: [
        "Same-day response available",
        "On-site service capability",
        "Emergency hotline support",
        "Loaner equipment programs",
        "Priority processing",
        "Weekend and holiday coverage",
      ],
      turnaround: "Same day",
      warranty: "90 days",
      image:
        "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
    },
    {
      icon: GraduationCap,
      title: "Training & Support",
      description: "Comprehensive training programs for your staff",
      features: [
        "Equipment operation training",
        "Maintenance best practices",
        "Troubleshooting techniques",
        "Safety protocols",
        "Compliance requirements",
        "Ongoing technical support",
      ],
      turnaround: "Flexible",
      warranty: "N/A",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
    },
    {
      icon: Phone,
      title: "Remote Diagnostics",
      description:
        "Advanced remote diagnostic capabilities for quick issue resolution",
      features: [
        "Remote system analysis",
        "Performance monitoring",
        "Predictive maintenance alerts",
        "Technical consultation",
        "Software updates and patches",
        "Real-time troubleshooting",
      ],
      turnaround: "Immediate",
      warranty: "30 days",
      image:
        "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
    },
  ];

  const commonRepairs = [
    "Insertion tube and bending rubber replacement",
    "Biopsy/suction channel restoration",
    "Light guide bundle repair",
    "Distal tip, angulation wire, and control knob adjustments",
    "Connector and cable repair",
    "Full leak testing and quality checks",
  ];

  const repairProcess = [
    {
      step: "01",
      title: "Inspection & Leak Testing",
      description:
        "We start with a thorough inspection and diagnostic testing to identify all issues.",
      icon: Search,
      image:
        "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    },
    {
      step: "02",
      title: "Quotation & Approval",
      description:
        "A detailed estimate is shared for your review and approval before any work begins.",
      icon: FileText,
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    },
    {
      step: "03",
      title: "Expert Repair",
      description:
        "Repairs are completed by trained technicians using precision tools and high-grade components.",
      icon: Wrench,
      image:
        "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    },
    {
      step: "04",
      title: "Final QA",
      description:
        "Each unit undergoes rigorous quality assurance checks before return.",
      icon: Award,
      image:
        "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Medical equipment services and endoscope repair facility"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Scope Repair Services
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-4">
              Precision Repairs. Trusted Results.
            </p>
            <p className="text-lg max-w-4xl mx-auto opacity-90">
              At EndoZen, we provide expert repair services for flexible
              endoscopes used in hospitals, diagnostic centers, and surgical
              facilities. Our focus is on restoring scopes to full functionality
              while maintaining the highest standards of quality, safety, and
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We understand the critical role your scopes play in patient care.
              That's why our repair process is designed to be accurate,
              transparent, and fast—minimizing downtime and extending the life
              of your equipment.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-xl">
            <div className="flex items-center justify-center mb-6">
              <Truck className="h-12 w-12 mr-4" />
              <h3 className="text-2xl font-bold">
                Pickup and Delivery Support Available Across India
              </h3>
            </div>
            <p className="text-center text-blue-100 text-lg">
              Convenient nationwide logistics to ensure seamless service
              experience for your facility
            </p>
          </div>
        </div>
      </section>

      {/* We Repair Section - Improved Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Repair
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive repair services for all types of flexible endoscopes
              and their components
            </p>
          </div>

          {/* Endoscope Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Video Gastroscopes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-32 bg-gradient-to-br from-blue-500 to-blue-600">
                <img
                  src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop"
                  alt="Video Gastroscopes"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Stethoscope className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Video Gastroscopes
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Upper GI tract examination and therapeutic procedures
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    <span>Diagnostic imaging</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    <span>Therapeutic interventions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonoscopes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-32 bg-gradient-to-br from-green-500 to-green-600">
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop"
                  alt="Colonoscopes"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Colonoscopes
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Colon and large intestine examination procedures
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    <span>Cancer screening</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    <span>Polyp removal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Duodenoscopes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-32 bg-gradient-to-br from-purple-500 to-purple-600">
                <img
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop"
                  alt="Duodenoscopes"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Duodenoscopes
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  ERCP procedures and bile duct interventions
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    <span>Bile duct access</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    <span>Stone removal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bronchoscopes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-32 bg-gradient-to-br from-teal-500 to-teal-600">
                <img
                  src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop"
                  alt="Bronchoscopes"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Settings className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Bronchoscopes
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Respiratory tract examination and lung procedures
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    <span>Airway visualization</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    <span>Biopsy procedures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Card */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <Stethoscope className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Endoscope Repair Services
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our expert technicians provide complete repair and restoration
                services for all major endoscope types used in diagnostic and
                therapeutic procedures across multiple medical specialties.
              </p>
            </div>
          </div>

          {/* Common Repairs Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Common Repairs Include
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our expert technicians handle a wide range of repair services to
                restore your endoscopes to optimal performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonRepairs.map((repair, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {repair}
                      </h4>
                      <div className="w-12 h-1 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full">
                <Microscope className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">
                  All repairs include comprehensive testing and quality
                  assurance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Repair Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Repair Process
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined approach designed for accuracy, transparency, and
              speed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairProcess.map((process, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-xl p-6 shadow-lg"
              >
                <img
                  src={process.image}
                  alt={process.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <process.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EndoZen */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EndoZen?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trained Technicians
              </h3>
              <p className="text-gray-600">
                Deep expertise in flexible endoscope repair with continuous
                training and certification updates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                High-Quality Components
              </h3>
              <p className="text-gray-600">
                Use of high-quality OEM-compatible components ensuring
                long-lasting repairs and optimal performance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparent Process
              </h3>
              <p className="text-gray-600">
                Transparent process and fair pricing with detailed estimates and
                clear communication throughout.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Clock className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fast Turnaround
              </h3>
              <p className="text-gray-600">
                Fast turnaround and consistent communication to minimize your
                equipment downtime.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Truck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pickup & Delivery
              </h3>
              <p className="text-gray-600">
                Pickup and delivery support available across India for your
                convenience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Phone className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                Comprehensive after-service support and technical consultation
                for optimal equipment performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Service Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Beyond repairs, we offer comprehensive medical equipment servicing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.slice(1).map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <service.icon className="h-12 w-12 text-blue-600" />
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-sm font-medium text-blue-600 mb-1">
                            Turnaround Time
                          </div>
                          <div className="text-lg font-semibold text-gray-900">
                            {service.turnaround}
                          </div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-sm font-medium text-green-600 mb-1">
                            Warranty
                          </div>
                          <div className="text-lg font-semibold text-gray-900">
                            {service.warranty}
                          </div>
                        </div>
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-3">
                        Service Includes:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Get Your Scope Back in Action
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            If your endoscope is showing image issues, leaks, or mechanical
            failure, EndoZen can help. Contact us today to request a diagnosis,
            repair quote, or pickup schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Request Repair Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Schedule Pickup
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

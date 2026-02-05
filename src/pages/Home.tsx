import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Award,
  Settings,
  Target,
  Truck,
  AlertTriangle,
  Wrench,
  BadgeCheck,
} from "lucide-react";
import { useContent } from "../hooks/useContent";

const Home = () => {
  const { getContent } = useContent();

  return (
    <>
      <Helmet>
        <title>Endoscope Repair in India | Scope Repair Services – EndoZen</title>
        <meta
          name="description"
          content="OEM-grade endoscope and scope repair in India. EndoZen delivers precision service, fast turnaround, and 30–40% cost savings from Gurgaon to nationwide facilities."
        />
        <link rel="canonical" href="https://endozenindia.com/" />
      </Helmet>
      <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-75"></div>
        <div className="absolute inset-0">
          <picture>
            <source
              srcSet="/colonoscopy-endoscopic-examination (1).webp"
              type="image/webp"
            />
            <img
              src="/colonoscopy-endoscopic-examination (1).jpg"
              alt="Professional colonoscopy endoscopic examination and medical equipment"
              className="w-full h-full object-cover opacity-40"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Expert Endoscope Repair for <span style={{ color: '#4ADE80' }}>Peace of Mind</span>
            </h1>
            <div className="mb-8">
              <div className="text-lg md:text-xl font-semibold mb-6 tracking-wider">
                REPAIRS | UPGRADES | PURCHASES | PREVENTIVE MAINTENANCE
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/quote"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:bg-white hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Precision & Reliability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Precision in Every Repair.</span>{" "}
              <span className="text-green-600">Reliability in Every Service.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-gray-600 text-base leading-relaxed">
                <p>
                  {getContent('home', 'precision_reliability', 'description_paragraph_1') || 'At EndoZen, we take a precision-centered approach to endoscope repair and lifecycle management. We understand the daily challenges faced by hospitals, clinics, and diagnostic centers - delayed repairs, inconsistent service quality, and rising costs.'}
                </p>
                <p>
                  {getContent('home', 'precision_reliability', 'description_paragraph_2') || 'That\'s why we offer accurate, affordable, and dependable repair solutions for flexible endoscopes across India. Every device we service undergoes strict quality control to ensure optimal performance and full compliance with healthcare standards.'}
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Target className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {getContent('home', 'precision_reliability', 'precision_centered_title') || 'Precision-Centered'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {getContent('home', 'precision_reliability', 'precision_centered_description') || 'Every repair follows strict protocols for optimal performance'}
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Shield className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {getContent('home', 'precision_reliability', 'quality_control_title') || 'Quality Control'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {getContent('home', 'precision_reliability', 'quality_control_description') || 'Comprehensive testing ensures healthcare compliance'}
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Truck className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold">
                    {getContent('home', 'precision_reliability', 'pickup_delivery_title') || 'Nationwide Pickup & Delivery Available'}
                  </h3>
                </div>
                <p className="text-blue-100">
                  {getContent('home', 'precision_reliability', 'pickup_delivery_description') || 'Convenient logistics support across India for seamless service experience'}
                </p>
              </div>
            </div>

            <div className="relative">
              <picture>
                <source
                  srcSet="/flexible-endoscope-medical-investigative-surgical-tool-monitoring-gastrointestinal-endoscope-clinic-closeup.webp"
                  type="image/webp"
                />
                <img
                  src="/flexible-endoscope-medical-investigative-surgical-tool-monitoring-gastrointestinal-endoscope-clinic-closeup.jpg"
                  srcSet="/flexible-endoscope-medical-investigative-surgical-tool-monitoring-gastrointestinal-endoscope-clinic-closeup.jpg 1200w, /flexible-endoscope-medical-investigative-surgical-tool-monitoring-gastrointestinal-endoscope-clinic-closeup.webp 1600w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="Flexible endoscope medical investigative surgical tool - precision repair and quality control process"
                  className="w-full h-[600px] object-cover rounded-xl shadow-lg"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {getContent('home', 'precision_reliability', 'our_commitment_title') || 'Our Commitment'}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm">
                      {getContent('home', 'precision_reliability', 'commitment_point_1') || 'Accurate & affordable solutions'}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm">{getContent('home', 'precision_reliability', 'commitment_point_2') || 'Dependable repair services'}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm">
                      {getContent('home', 'precision_reliability', 'commitment_point_3') || 'Healthcare standards compliance'}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 text-xs leading-tight min-h-[3rem] flex flex-col justify-center">
                <p className="font-medium">Years of Global Experience</p>
                <p className="text-xs text-gray-500 mt-1">Trusted by Clients Worldwide</p>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">{getContent('home', 'stats', 'equipment_serviced_number') || '5000+'}</div>
              <div className="text-gray-600 text-xs leading-tight min-h-[3rem] flex flex-col justify-center">
                <p className="font-medium">{getContent('home', 'stats', 'equipment_serviced_title') || 'Equipment Serviced'}</p>
                <p className="text-xs text-gray-500 mt-1">{getContent('home', 'stats', 'equipment_serviced_subtitle') || 'Across Healthcare Facilities'}</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2 h-[3rem]">
                <AlertTriangle className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-gray-600 text-xs leading-tight min-h-[3rem] flex flex-col justify-center">
                <p className="font-medium">{getContent('home', 'stats', 'priority_support_title') || 'Priority Support'}</p>
                <p className="text-xs text-gray-500 mt-1">{getContent('home', 'stats', 'priority_support_subtitle') || 'For Urgent Repairs'}</p>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">{getContent('home', 'stats', 'customer_satisfaction_number') || '99%'}</div>
              <div className="text-gray-600 text-xs leading-tight min-h-[3rem] flex flex-col justify-center">
                <p className="font-medium">{getContent('home', 'stats', 'customer_satisfaction_title') || 'Customer Satisfaction'}</p>
                <p className="text-xs text-gray-500 mt-1">{getContent('home', 'stats', 'customer_satisfaction_subtitle') || 'Quality Service Guarantee'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with EndoZen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Partner with EndoZen?
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              We go beyond repair — delivering lifecycle optimization, preventive maintenance, cost-effective service contracts, and expert nationwide support tailored to your operational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <picture>
                  <source srcSet="/endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy-medical-examination (1).webp" type="image/webp" />
                    <img
                      src="/endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy-medical-examination (1).jpg"
                      srcSet="/endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy-medical-examination (1).jpg 900w, /endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy-medical-examination (1).webp 1200w"
                      sizes="(min-width: 1024px) 320px, 100vw"
                      alt="Endoscopy hospital doctor holding endoscope - extend equipment lifespan through professional maintenance"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                </picture>
                <div className="absolute -bottom-4 left-4">
                  <Shield className="h-12 w-12 text-blue-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {getContent('home', 'why_choose', 'extend_lifespan_title') || 'Extend Equipment Lifespan'}
              </h3>
              <p className="text-gray-600 mb-6">
                {getContent('home', 'why_choose', 'extend_lifespan_description') || 'Our precision repair and maintenance services significantly extend the lifespan of your endoscopy equipment, maximizing your investment.'}
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
                <picture>
                  <source srcSet="/close-up-endoscope-hands-medical-worker-stock-photo.webp" type="image/webp" />
                  <img
                    src="/close-up-endoscope-hands-medical-worker-stock-photo.jpg"
                    srcSet="/close-up-endoscope-hands-medical-worker-stock-photo.jpg 900w, /close-up-endoscope-hands-medical-worker-stock-photo.webp 1200w"
                    sizes="(min-width: 1024px) 320px, 100vw"
                    alt="Close-up endoscope hands medical worker - minimize downtime with fast maintenance"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </picture>
                <div className="absolute -bottom-4 left-4">
                  <Clock className="h-12 w-12 text-green-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {getContent('home', 'why_choose', 'minimize_downtime_title') || 'Minimize Downtime'}
              </h3>
              <p className="text-gray-600 mb-6">
                {getContent('home', 'why_choose', 'minimize_downtime_description') || 'Improve device availability and minimize downtime with our fast turnaround times and preventive maintenance programs.'}
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
                <picture>
                  <source srcSet="/doctor-monitoring-patient-s-pulse.webp" type="image/webp" />
                  <img
                    src="/doctor-monitoring-patient-s-pulse.jpg"
                    srcSet="/doctor-monitoring-patient-s-pulse.jpg 900w, /doctor-monitoring-patient-s-pulse.webp 1200w"
                    sizes="(min-width: 1024px) 320px, 100vw"
                    alt="Doctor monitoring patient's pulse - expert medical support and technical guidance"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </picture>
                <div className="absolute -bottom-4 left-4">
                  <Users className="h-12 w-12 text-blue-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {getContent('home', 'why_choose', 'expert_support_title') || 'Expert Support'}
              </h3>
              <p className="text-gray-600 mb-6">
                {getContent('home', 'why_choose', 'expert_support_description') || 'Access expert guidance and responsive technical support with tailored service contracts and nationwide logistics.'}
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
                <picture>
                  <source srcSet="/Gastro.webp" type="image/webp" />
                  <img
                    src="/Gastro.jpg"
                    srcSet="/Gastro.jpg 900w, /Gastro.webp 1200w"
                    sizes="(min-width: 1024px) 320px, 100vw"
                    alt="Gastroscopy equipment - reduce operational disruptions with comprehensive maintenance"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </picture>
                <div className="absolute -bottom-4 left-4">
                  <Settings className="h-12 w-12 text-green-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {getContent('home', 'why_choose', 'reduce_disruptions_title') || 'Reduce Disruptions'}
              </h3>
              <p className="text-gray-600 mb-6">
                {getContent('home', 'why_choose', 'reduce_disruptions_description') || 'Reduce operational disruptions with our comprehensive maintenance programs and proactive equipment monitoring.'}
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

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <picture>
                  <source srcSet="/nurse-wears-protective-suit-mask-covid19-outbreak.webp" type="image/webp" />
                  <img
                    src="/nurse-wears-protective-suit-mask-covid19-outbreak.jpg"
                    srcSet="/nurse-wears-protective-suit-mask-covid19-outbreak.jpg 900w, /nurse-wears-protective-suit-mask-covid19-outbreak.webp 1200w"
                    sizes="(min-width: 1024px) 320px, 100vw"
                    alt="Nurse wearing protective suit and mask - affordable and dependable repair solutions for healthcare facilities"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </picture>
                <div className="absolute -bottom-4 left-4">
                  <Award className="h-12 w-12 text-blue-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {getContent('home', 'why_choose', 'affordable_solutions_title') || 'Affordable Solutions'}
              </h3>
              <p className="text-gray-600 mb-6">
                {getContent('home', 'why_choose', 'affordable_solutions_description') || 'Get accurate, affordable, and dependable repair solutions with transparent pricing and comprehensive warranties.'}
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

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <picture>
                  <source srcSet="/standard-quality-control-concept-m.webp" type="image/webp" />
                  <img
                    src="/standard-quality-control-concept-m.jpg"
                    srcSet="/standard-quality-control-concept-m.jpg 900w, /standard-quality-control-concept-m.webp 1200w"
                    sizes="(min-width: 1024px) 320px, 100vw"
                    alt="Standard quality control concept - trusted quality and value for healthcare facilities"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </picture>
                <div className="absolute -bottom-4 left-4">
                  <BadgeCheck className="h-12 w-12 text-blue-600 bg-white p-2 rounded-full shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {getContent('home', 'why_choose', 'Trusted_Quality_title') || 'Trusted Quality & Value'}
              </h3>
              <p className="text-gray-600 mb-6">
                {getContent('home', 'why_choose', 'Trusted_Qualitys_description') || 'Save 30-40% compared to OEM repair costs - while maintaining high standards of quality, performance and service.'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  OEM-Grade Components
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  30–40% cost savings compared to OEM
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  3–7 day turnaround
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  120-day repair warranty
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Detailed service reports
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {getContent('home', 'services', 'title') || 'Our Services'}
            </h2>
            <p className="text-base text-gray-600">
              {getContent('home', 'services', 'subtitle') || 'Comprehensive endoscope and medical equipment servicing solutions'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Endoscope Repair",
                description:
                  "Expert repair of flexible endoscopes including gastroscopes, colonoscopes, duodenoscope and bronchoscopes with precision tools and high-grade components.",
                features: [
                  "Bending Rubber Replacement",
                  "Biopsy/Suction Channel Replacement",
                  "Angulation Adjustment",
                ],
                icon: Wrench,
                image: "/Endoscope.jpg", // Use the same image as Services page
              },
              {
                title: getContent('home', 'services', 'preventive_maintenance_title') || "Preventive Maintenance",
                description: getContent('home', 'services', 'preventive_maintenance_description') ||
                  "Scheduled maintenance programs to prevent costly breakdowns and extend equipment life with comprehensive testing.",
                features: [
                  "Regular inspections",
                  "Performance testing",
                  "Compliance certification",
                ],
                icon: Settings,
                image: "/endoscope-closeup-blue-surface (1).jpg",
              },
              {
                title: getContent('home', 'services', 'priority_support_title') || "Priority Support",
                description: getContent('home', 'services', 'priority_support_description') ||
                  "Fast-track support to minimize downtime and keep your facility operational. Get immediate assistance, on-site service, and access to loaner equipment when you need it most.",
                features: [
                  "Immediate response",
                  "Fast pickup & delivery",
                  "Loaner equipment available",
                ],
                icon: Clock,
                image: "/businessman-holding-light-bulb.jpg",
              }
            ].map((service: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {service.image.endsWith('.jpg') ? (
                  <picture>
                    <source srcSet={service.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover"
                    />
                  </picture>
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature: string, idx: number) => (
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
              {getContent('home', 'services', 'view_all_services_button') || 'View All Services'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {getContent('home', 'cta', 'title') || 'Ready to Service Your Equipment?'}
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto">
            {getContent('home', 'cta', 'description') || 'Get a free quote today and experience the EndoZen difference. Fast, reliable, and professional service guaranteed.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center hover:bg-blue-50 transition-colors duration-200"
            >
              {getContent('home', 'cta', 'button_1_text') || 'Get Free Quote'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              {getContent('home', 'cta', 'button_2_text') || 'Contact Us Today'}
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;

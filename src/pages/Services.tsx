import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Wrench,
  Shield,
  Clock,
  Phone,
  CheckCircle,
  ArrowRight,
  Search,
  FileText,
  Award,
  Truck,
  Microscope,
  Heart,
  Scan,
  Monitor,
} from "lucide-react";

// All content is now static/mock data
const staticContent = {
  hero: {
    title: "Endoscope Repair ",
    subtitle: "Precision Repairs. Trusted Results.",
    description: "At EndoZen, we provide expert repair services for flexible endoscopes used in hospitals, diagnostic centers, and surgical facilities. Our focus is on restoring scopes to full functionality while maintaining the highest standards of quality, safety, and performance."
  },
  service_promise: {
    description: "We understand the critical role your Endoscopes play in patient care. That's why our repair process is designed to be accurate, transparent, and fast—minimizing downtime and extending the life of your equipment."
  },
  pickup_delivery: {
    title: "Pickup and Delivery Support Available Across India",
    subtitle: "Convenient nationwide logistics to ensure seamless service experience for your facility"
  },
  we_repair: {
    title: "We Repair",
    subtitle: "Comprehensive repair services for all types of flexible endoscopes ",
    gastroscope_title: "Gastroscopes",
    gastroscope_description: "Diagnostic and therapeutic gastroscopes for upper GI procedures.",
    colonoscope_title: "Colonoscopes",
    colonoscope_description: "High-definition colonoscopes for screening and intervention.",
    duodenoscope_title: "Duodenoscopes",
    duodenoscope_description: "ERCP and specialty duodenoscopes, any condition.",
    bronchoscope_title: "Bronchoscopes",
    bronchoscope_description: "Flexible bronchoscopes for pulmonary procedures."
  },
  common_repairs: {
    title: "Common Repairs Include",
    subtitle: "Our expert Engineers handle a wide range of repair services to restore your endoscopes to optimal performance",
    repair_1: {
      title: "Insertion Tube & Bending Section Overhaul",
      description: "Complete rebuild using durable insertion tube, bending rubber, and angulation wires."
    },
    repair_2: {
      title: "Distal End Refurbishment", 
      description: "Restoration or replacement of lenses, prism, and nozzles for clear imaging and fluid delivery."
    },
    repair_3: {
      title: "Channel System Restoration",
      description: "Servicing or replacing suction and biopsy channels for smooth scope function and effective suction."
    },
    repair_4: {
      title: "Light Transmission System Repair",
      description: "Fiber bundle or lens repair to restore bright, even illumination without hotspots."
    },
    repair_5: {
      title: "Control Body & Angulation Mechanism Rebuild",
      description: "Precision repair of control knobs, pulleys, and angulation for accurate tip movement."
    },
    repair_6: {
      title: "Universal Cord & Video Connector Repair",
      description: "Restores function of electrical, air/water, and video connectors with leak-resistant sealing."
    },
    qa_note: "All repairs undergo strict quality assurance and testing."
  },
  repair_process: {
    title: "Our Repair Process",
    subtitle: "A streamlined approach designed for accuracy, transparency, and speed",
    step_1_title: "Inspection & Leak Testing",
    step_1_description: "We start with a thorough inspection and diagnostic testing to identify all issues.",
    step_2_title: "Quotation & Approval",
    step_2_description: "A detailed estimate is shared for your review and approval before any work begins.",
    step_3_title: "Expert Repair",
    step_3_description: "Repairs are completed by trained engineers using precision tools and high-grade components.",
    step_4_title: "Final QA & Return",
    step_4_description: "Each unit undergoes rigorous quality assurance checks before return.",
    turnaround_note: "Typical turnaround: 3-7 business days. Rush service available."
  },
  why_choose: {
    title: "Why Choose EndoZen?",
    technician_title: "Trained Engineers",
    technician_description: "Deep expertise in flexible endoscope repair with continuous training and certification updates.",
    components_title: "High-Quality Components",
    components_description: "Use of high-quality OEM-compatible components ensuring long-lasting repairs and optimal performance.",
    process_title: "Transparent Process",
    process_description: "Transparent process and fair pricing with detailed estimates and clear communication throughout.",
    turnaround_title: "Fast Turnaround",
    turnaround_description: "Fast turnaround and consistent communication to minimize your equipment downtime.",
    pickup_title: "Pickup & Delivery",
    pickup_description: "Pickup and delivery support available across India for your convenience.",
    support_title: "Ongoing Support",
    support_description: "Comprehensive after-service support and technical consultation for optimal equipment performance."
  },
  complete_service: {
    title: "Complete Service Solutions",
    subtitle: "Comprehensive endoscope and medical equipment servicing solutions"
  },
  cta: {
    title: "Ready to Restore Your Equipment?",
    subtitle: "Request a free quote or contact us for more information.",
    quote_button: "Get a Quote",
    contact_button: "Contact Us"
  }
};

const services = [
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
    image: "/endoscope-closeup-blue-surface (1).jpg",
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
    image: "/2149478511.jpg",
  },
];

// Add static service cards for the Complete Service Solutions section
const completeServiceCards = [
  {
    title: "Endoscope Repair",
    description:
      "Expert repair of flexible endoscopes including gastroscopes, colonoscopes,duodenoscope and bronchoscopes with precision tools and high-grade components.",
    features: [
      "Bending Rubber Replacement",
      "Biopsy/Suction Channel Replacement",
      "Angulation Adjustment",
    ],
    icon: Wrench,
    image: "/Endoscope.jpg", // This matches the actual file in public folder
  },
  {
    title: "Preventive Maintenance",
    description:
      "Scheduled maintenance programs to prevent costly breakdowns and extend equipment life with comprehensive testing.",
    features: [
      "Regular inspections",
      "Performance testing",
      "Compliance certification",
    ],
    icon: Shield,
    image: "/endoscope-closeup-blue-surface (1).jpg",
  },
  {
    title: "Priority Support",
    description:
      "Fast-track support to minimize downtime and keep your facility operational. Get immediate assistance, on-site service, and access to loaner equipment when you need it most.",
    features: [
      "Immediate response",
      "Fast pickup & delivery",
      "Loaner equipment available",
    ],
    icon: Clock,
    image: "/businessman-holding-light-bulb.jpg",
  },
];

type ImageWithWebpProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  webpSrc?: string;
  webpSrcSet?: string;
};

const ImageWithWebp: React.FC<ImageWithWebpProps> = ({
  src,
  webpSrc,
  webpSrcSet,
  ...imgProps
}) => {
  const derivedWebp =
    webpSrc ?? (src.match(/\.jpe?g$/i) ? src.replace(/\.jpe?g$/i, ".webp") : undefined);
  const webpSource = webpSrcSet ?? derivedWebp;

  if (!webpSource) {
    return <img src={src} {...imgProps} />;
  }

  return (
    <picture>
      <source srcSet={webpSource} type="image/webp" />
      <img src={src} {...imgProps} />
    </picture>
  );
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Endoscope Repair &amp; Maintenance Services | EndoZen India</title>
        <meta
          name="description"
          content="Explore EndoZen's endoscope repair, preventive maintenance, and priority support services delivering OEM-grade quality with nationwide pickup and delivery."
        />
        <link rel="canonical" href="https://endozenindia.com/services" />
      </Helmet>
      <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden min-h-[400px]">
        <div className="absolute inset-0">
          <ImageWithWebp
            src="/endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy.jpg"
            alt="Medical equipment services and endoscope repair facility"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-blue-700/60 to-green-600/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {staticContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-4">
              {staticContent.hero.subtitle}
            </p>
            <p className="text-lg max-w-4xl mx-auto opacity-90">
              {staticContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {staticContent.service_promise.description}
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-xl">
            <div className="flex items-center justify-center mb-6">
              <Truck className="h-12 w-12 mr-4" />
              <h3 className="text-2xl font-bold">
                {staticContent.pickup_delivery.title}
              </h3>
            </div>
            <p className="text-center text-blue-100 text-lg">
              {staticContent.pickup_delivery.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* We Repair Section - Improved Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {staticContent.we_repair.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {staticContent.we_repair.subtitle}
            </p>
          </div>

          {/* Endoscope Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Video Gastroscopes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-32 bg-gradient-to-br from-blue-500 to-blue-600">
                <ImageWithWebp
                  src="/Gastro.jpg"
                  alt="Video Gastroscopes"
                  className="w-full h-full object-cover opacity-20"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Search className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {staticContent.we_repair.gastroscope_title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {staticContent.we_repair.gastroscope_description}
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
                <ImageWithWebp
                  src="/colonoscopy-endoscopic-examination.jpg"
                  alt="Colonoscopes"
                  className="w-full h-full object-cover opacity-20"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {staticContent.we_repair.colonoscope_title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {staticContent.we_repair.colonoscope_description}
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
                  src="/freepik__retouch__24208.png"
                  alt="Duodenoscopes"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Scan className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {staticContent.we_repair.duodenoscope_title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {staticContent.we_repair.duodenoscope_description}
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
                  src="/bronchoscope.png"
                  alt="Bronchoscopes"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor className="h-12 w-12 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {staticContent.we_repair.bronchoscope_title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {staticContent.we_repair.bronchoscope_description}
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

          {/* Common Repairs Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {staticContent.common_repairs.title}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {staticContent.common_repairs.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                staticContent.common_repairs.repair_1,
                staticContent.common_repairs.repair_2,
                staticContent.common_repairs.repair_3,
                staticContent.common_repairs.repair_4,
                staticContent.common_repairs.repair_5,
                staticContent.common_repairs.repair_6
              ].map((repair, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {repair.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {repair.description}
                      </p>
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
                  {staticContent.common_repairs.qa_note}
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
              {staticContent.repair_process.title}
            </h2>
            <p className="text-xl text-gray-600">
              {staticContent.repair_process.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: staticContent.repair_process.step_1_title,
                description: staticContent.repair_process.step_1_description,
                icon: Search
              },
              {
                step: "02",
                title: staticContent.repair_process.step_2_title,
                description: staticContent.repair_process.step_2_description,
                icon: FileText
              },
              {
                step: "03",
                title: staticContent.repair_process.step_3_title,
                description: staticContent.repair_process.step_3_description,
                icon: Wrench
              },
              {
                step: "04",
                title: staticContent.repair_process.step_4_title,
                description: staticContent.repair_process.step_4_description,
                icon: Award
              }
            ].map((process, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100"
              >
                {/* Step Number Circle */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {process.step}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="mt-8 mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <process.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                
                {/* Connector Line (except for last item) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Process Flow Indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-blue-50 px-8 py-4 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-8 h-0.5 bg-blue-300"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-8 h-0.5 bg-blue-300"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-8 h-0.5 bg-blue-300"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
              <span className="ml-4 text-blue-800 font-medium">
                {staticContent.repair_process.turnaround_note}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EndoZen */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {staticContent.why_choose.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {staticContent.why_choose.technician_title}
              </h3>
              <p className="text-gray-600">
                {staticContent.why_choose.technician_description}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {staticContent.why_choose.components_title}
              </h3>
              <p className="text-gray-600">
                {staticContent.why_choose.components_description}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {staticContent.why_choose.process_title}
              </h3>
              <p className="text-gray-600">
                {staticContent.why_choose.process_description}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Clock className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {staticContent.why_choose.turnaround_title}
              </h3>
              <p className="text-gray-600">
                {staticContent.why_choose.turnaround_description}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Truck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {staticContent.why_choose.pickup_title}
              </h3>
              <p className="text-gray-600">
                {staticContent.why_choose.pickup_description}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Phone className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {staticContent.why_choose.support_title}
              </h3>
              <p className="text-gray-600">
                {staticContent.why_choose.support_description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid (Complete Service Solutions) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {staticContent.complete_service.title}
            </h2>
            <p className="text-xl text-gray-600">
              {staticContent.complete_service.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {completeServiceCards.map((service, index) => (
              <div
                key={index}
                className="bg-white rou nded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <ImageWithWebp
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {staticContent.cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {staticContent.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center hover:bg-blue-50 transition-colors duration-200"
            >
              {staticContent.cta.quote_button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              {staticContent.cta.contact_button}
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;

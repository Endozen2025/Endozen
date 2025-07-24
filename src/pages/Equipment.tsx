import { CheckCircle, DollarSign, Truck, FileText, Phone, Mail, Clock, Shield } from 'lucide-react';

// All content is now static/mock data
const staticContent = {
  hero: {
    title: 'Sell Your Endoscopy Equipment',
    subtitle: 'Find Value in Your Older Scopes',
    description: 'Turn your unused or surplus endoscopy equipment into value with our simple and transparent process.'
  },
  intro: {
    question1: 'Do you have unused or surplus endoscopy equipment?',
    question2: 'Are you upgrading your system and want to recover value from older devices?',
    description: 'At EndoZen, we buy used endoscopy equipment and scopes. Whether your equipment is outdated, damaged, or fully functional, we offer a simple and transparent process to help you turn it into value.'
  },
  we_buy: {
    title: 'We Buy',
    subtitle: 'We purchase endoscopy equipment and related systems, regardless of condition',
    gastroscopes_title: 'Gastroscopes',
    gastroscopes_description: 'Upper GI endoscopes for diagnostic and therapeutic procedures',
    colonoscopes_title: 'Colonoscopes',
    colonoscopes_description: 'Colon examination scopes for screening and therapeutic procedures',
    duodenoscopes_title: 'Duodenoscopes',
    duodenoscopes_description: 'ERCP scopes for bile duct and pancreatic procedures',
    bronchoscopes_title: 'Bronchoscopes',
    bronchoscopes_description: 'Respiratory endoscopes for airway examination and procedures',
    light_sources_title: 'Light Sources & Processors',
    light_sources_description: 'Video processors, light sources, and imaging systems'
  },
  unlisted: {
    title: 'Don’t see your equipment listed?',
    subtitle: 'We buy many other types of medical and endoscopy equipment. Contact us with details about your specific equipment.',
    email_cta: 'Email Us',
    call_cta: 'Call Us'
  },
  why_sell: {
    title: 'Why Sell to EndoZen?',
    subtitle: 'We make selling your equipment simple, fair, and hassle-free',
    quick_response_title: 'Quick Response',
    quick_response_description: 'Get a quote within 24 hours of submitting your equipment details.',
    fair_pricing_title: 'Fair Pricing',
    fair_pricing_description: 'Transparent and competitive pricing for your equipment',
    simple_process_title: 'Simple Process',
    simple_process_description: 'Easy documentation and pickup coordination',
    any_condition_title: 'Any Condition',
    any_condition_description: 'Equipment accepted in working or non-working condition'
  },
  how_it_works: {
    title: 'How It Works',
    subtitle: 'Our 4-step process makes selling easy',
    step1_title: 'Send Details',
    step1_description: 'Email us your equipment details and photos',
    step2_title: 'Get a Quote',
    step2_description: 'Receive our quote within 24 hours',
    step3_title: 'Pickup',
    step3_description: 'We arrange convenient pickup',
    step4_title: 'Get Paid',
    step4_description: 'Payment after final inspection'
  },
  ready_to_sell: {
    title: 'Ready to Sell?',
    subtitle: 'Contact us to get started',
    email_block_title: 'Email Us',
    email_block_description: 'Send equipment details for quote',
    email_cta: 'info@endozenindia.com',
    phone_block_title: 'Call Us',
    phone_block_description: 'Speak with our specialists',
    phone_cta: '+91-9871641857'
  }
};

const Equipment = () => {
  // All content is now static
  const content = staticContent;

  const whySellToUs = [
    {
      title: content.why_sell.quick_response_title,
      description: content.why_sell.quick_response_description,
      icon: Clock,
      color: 'blue',
    },
    {
      title: content.why_sell.fair_pricing_title,
      description: content.why_sell.fair_pricing_description,
      icon: DollarSign,
      color: 'green',
    },
    {
      title: content.why_sell.simple_process_title,
      description: content.why_sell.simple_process_description,
      icon: FileText,
      color: 'blue',
    },
    {
      title: content.why_sell.any_condition_title,
      description: content.why_sell.any_condition_description,
      icon: Shield,
      color: 'green',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: content.how_it_works.step1_title,
      description: content.how_it_works.step1_description,
      icon: FileText,
    },
    {
      step: '2',
      title: content.how_it_works.step2_title,
      description: content.how_it_works.step2_description,
      icon: DollarSign,
    },
    {
      step: '3',
      title: content.how_it_works.step3_title,
      description: content.how_it_works.step3_description,
      icon: Truck,
    },
    {
      step: '4',
      title: content.how_it_works.step4_title,
      description: content.how_it_works.step4_description,
      icon: CheckCircle,
    },
  ];

  return (
    <div className="pt-16">
      {/* Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-green-600 to-blue-700 text-white text-center py-3 px-4 font-semibold text-lg shadow-md">
        <span className="block">
          Opening January 2026 in Gurgaon!<br />
          <span className="font-normal text-base">EndoZen India is proud to bring expert endoscope repair services to healthcare facilities across India. Our Gurgaon office will be fully operational from Jan 2026. Stay tuned!</span>
        </span>
      </div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="/endoscopy-hospital-doctor-holding-endoscope-before-gastroscopy.jpg" 
            alt={content.hero.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-blue-700/60 to-green-600/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-6 text-green-300">
              {content.hero.subtitle}
            </p>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              {content.hero.description}
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
                {content.intro.question1}
              </p>
              <p className="text-xl font-medium text-gray-900">
                {content.intro.question2}
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
                <p className="text-xl text-gray-800 font-medium">
                  {content.intro.description}
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
              {content.we_buy.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.we_buy.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Gastroscopes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600">
                <img 
                  src="/Gastro.jpg" 
                  alt={content.we_buy.gastroscopes_title} 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{content.we_buy.gastroscopes_title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">
                  {content.we_buy.gastroscopes_description}
                </p>
              </div>
            </div>

            {/* Colonoscopes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-green-600">
                <img 
                  src="/colonoscopy-endoscopic-examination.jpg" 
                  alt={content.we_buy.colonoscopes_title} 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{content.we_buy.colonoscopes_title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">
                  {content.we_buy.colonoscopes_description}
                </p>
              </div>
            </div>

            {/* Duodenoscopes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-purple-600">
                <img 
                  src="/freepik__retouch__24208.png" 
                  alt={content.we_buy.duodenoscopes_title} 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{content.we_buy.duodenoscopes_title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">
                  {content.we_buy.duodenoscopes_description}
                </p>
              </div>
            </div>

            {/* Bronchoscopes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-teal-500 to-teal-600">
                <img 
                  src="/bronchoscope.png" 
                  alt={content.we_buy.bronchoscopes_title} 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{content.we_buy.bronchoscopes_title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">
                  {content.we_buy.bronchoscopes_description}
                </p>
              </div>
            </div>

            {/* Light Sources and Processors */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="relative h-48 bg-gradient-to-br from-orange-500 to-orange-600">
                <img 
                  src="/Lightning sources.webp" 
                  alt={content.we_buy.light_sources_title} 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{content.we_buy.light_sources_title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">
                  {content.we_buy.light_sources_description}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Equipment Note */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.unlisted.title}</h3>
            <p className="text-lg text-gray-600 mb-6">
              {content.unlisted.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@endozenindia.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                {content.unlisted.email_cta}
              </a>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                {content.unlisted.call_cta}
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
              {content.why_sell.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.why_sell.subtitle}
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
              {content.how_it_works.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.how_it_works.subtitle}
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
              {content.ready_to_sell.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {content.ready_to_sell.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email Contact */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{content.ready_to_sell.email_block_title}</h3>
              <p className="text-gray-600 mb-4">
                {content.ready_to_sell.email_block_description}
              </p>
              <a
                href={`mailto:${content.ready_to_sell.email_cta}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                {content.ready_to_sell.email_cta}
              </a>
            </div>

            {/* Phone Contact */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{content.ready_to_sell.phone_block_title}</h3>
              <p className="text-gray-600 mb-4">
                {content.ready_to_sell.phone_block_description}
              </p>
              <a
                href={`tel:${content.ready_to_sell.phone_cta}`}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                {content.ready_to_sell.phone_cta}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Equipment;
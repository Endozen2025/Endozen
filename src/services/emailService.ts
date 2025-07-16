import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateIds: {
    contact: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'YOUR_CONTACT_TEMPLATE_ID', // Replace with your contact template ID
    quote: import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID || 'YOUR_QUOTE_TEMPLATE_ID' // Replace with your quote template ID
  },
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
};

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.publicKey);

export const emailService = {
  // Send contact form email
  sendContactEmail: async (formData: {
    name: string;
    email: string;
    phone: string;
    serviceNeeded: string;
    message: string;
  }) => {
    try {
      // Validate EmailJS configuration
      if (!EMAIL_CONFIG.serviceId || EMAIL_CONFIG.serviceId === 'YOUR_SERVICE_ID') {
        throw new Error('EmailJS service not configured. Please set up your EmailJS credentials.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service_needed: formData.serviceNeeded,
        message: formData.message,
        to_email: 'info@endozenindia.com', // Your business email
        reply_to: formData.email,
        date: new Date().toLocaleDateString('en-IN'),
        time: new Date().toLocaleTimeString('en-IN')
      };

      const response = await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateIds.contact,
        templateParams
      );

      console.log('Contact email sent successfully:', response);
      return { success: true, response };
    } catch (error) {
      console.error('Contact email failed:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send email. Please try again.' 
      };
    }
  },

  // Send quote request email
  sendQuoteEmail: async (formData: {
    facilityName: string;
    contactName: string;
    email: string;
    phone: string;
    facilityType: string;
    equipmentType: string;
    equipmentBrand: string;
    equipmentModel: string;
    serviceType: string;
    urgency: string;
    symptoms: string;
    preferredDate: string;
    additionalInfo: string;
  }) => {
    try {
      // Validate EmailJS configuration
      if (!EMAIL_CONFIG.serviceId || EMAIL_CONFIG.serviceId === 'YOUR_SERVICE_ID') {
        throw new Error('EmailJS service not configured. Please set up your EmailJS credentials.');
      }

      const templateParams = {
        facility_name: formData.facilityName,
        contact_name: formData.contactName,
        from_email: formData.email,
        phone: formData.phone,
        facility_type: formData.facilityType,
        equipment_type: formData.equipmentType,
        equipment_brand: formData.equipmentBrand,
        equipment_model: formData.equipmentModel,
        service_type: formData.serviceType,
        urgency: formData.urgency,
        symptoms: formData.symptoms,
        preferred_date: formData.preferredDate,
        additional_info: formData.additionalInfo,
        to_email: 'info@endozenindia.com', // Your business email
        reply_to: formData.email,
        date: new Date().toLocaleDateString('en-IN'),
        time: new Date().toLocaleTimeString('en-IN')
      };

      const response = await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateIds.quote,
        templateParams
      );

      console.log('Quote email sent successfully:', response);
      return { success: true, response };
    } catch (error) {
      console.error('Quote email failed:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send quote request. Please try again.' 
      };
    }
  }
};

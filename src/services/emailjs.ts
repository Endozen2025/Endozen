import emailjs from '@emailjs/browser';

// EmailJS configuration using environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const EMAILJS_TEMPLATE_ID_QUOTE = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS (only if not already initialized)
if (!emailjs.__initialized) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
  emailjs.__initialized = true;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  message: string;
}

export interface QuoteFormData {
  facilityName: string;
  facilityType: string;
  contactName: string;
  email: string;
  phone: string;
  position: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  equipmentType: string;
  equipmentBrand: string;
  equipmentModel: string;
  serialNumber: string;
  issueDescription: string;
  urgency: string;
  preferredServiceDate: string;
  additionalInfo: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const now = new Date();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service_needed: formData.serviceNeeded,
      message: formData.message,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    console.log('Contact email sent successfully:', result);
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw new Error('Failed to send email. Please try again or contact us directly.');
  }
};

export const sendQuoteEmail = async (formData: QuoteFormData): Promise<void> => {
  try {
    const now = new Date();
    const templateParams = {
      facility_name: formData.facilityName,
      facility_type: formData.facilityType,
      contact_name: formData.contactName,
      contact_email: formData.email,
      contact_phone: formData.phone,
      equipment_type: formData.equipmentType,
      equipment_brand: formData.equipmentBrand,
      equipment_model: formData.equipmentModel,
      service_type: formData.serviceType,
      urgency: formData.urgency,
      preferred_date: formData.preferredServiceDate,
      symptoms: formData.issueDescription,
      additional_info: formData.additionalInfo,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_QUOTE,
      templateParams
    );

    console.log('Quote email sent successfully:', result);
  } catch (error) {
    console.error('Failed to send quote email:', error);
    throw new Error('Failed to send quote request. Please try again or contact us directly.');
  }
};

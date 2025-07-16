import emailjs from '@emailjs/browser';

// EmailJS configuration
// You'll need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID_CONTACT = 'YOUR_CONTACT_TEMPLATE_ID'; // Replace with your contact template ID
const EMAILJS_TEMPLATE_ID_QUOTE = 'YOUR_QUOTE_TEMPLATE_ID'; // Replace with your quote template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

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
    const templateParams = {
      to_name: 'EndoZen Team',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service_needed: formData.serviceNeeded,
      message: formData.message,
      reply_to: formData.email,
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
    const templateParams = {
      to_name: 'EndoZen Team',
      facility_name: formData.facilityName,
      facility_type: formData.facilityType,
      contact_name: formData.contactName,
      from_email: formData.email,
      phone: formData.phone,
      position: formData.position,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      equipment_type: formData.equipmentType,
      equipment_brand: formData.equipmentBrand,
      equipment_model: formData.equipmentModel,
      serial_number: formData.serialNumber,
      issue_description: formData.issueDescription,
      urgency: formData.urgency,
      preferred_service_date: formData.preferredServiceDate,
      additional_info: formData.additionalInfo,
      reply_to: formData.email,
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

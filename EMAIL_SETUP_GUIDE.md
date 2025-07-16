# Email Integration Setup Guide for EndoZen

## EmailJS Setup Instructions

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. You get 200 free emails per month

### 2. Setup Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Configure your email credentials
5. Note down your **Service ID**

### 3. Create Email Templates

#### Contact Form Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template for Contact Form:

```
Subject: New Contact Form Submission - {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Needed: {{service_needed}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

#### Quote Request Template
1. Create another template for Quote Requests:

```
Subject: New Quote Request - {{facility_name}}

Facility Details:
- Name: {{facility_name}}
- Contact: {{contact_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Type: {{facility_type}}

Equipment Information:
- Type: {{equipment_type}}
- Brand: {{equipment_brand}}
- Model: {{equipment_model}}
- Service Type: {{service_type}}
- Urgency: {{urgency}}

Problem Description:
{{symptoms}}

Preferred Date: {{preferred_date}}

Additional Information:
{{additional_info}}

---
Reply to: {{reply_to}}
```

### 4. Update Configuration
1. Open `src/services/emailService.ts`
2. Replace these values with your actual EmailJS credentials:
   - `YOUR_SERVICE_ID` - from step 2
   - `YOUR_CONTACT_TEMPLATE_ID` - from Contact template
   - `YOUR_QUOTE_TEMPLATE_ID` - from Quote template
   - `YOUR_PUBLIC_KEY` - from Account settings

### 5. Test the Integration
1. Fill out the contact form on your website
2. Check if emails are received at info@endozenindia.com
3. Verify both contact and quote forms work properly

## Alternative Options

### Option 2: Formspree Integration
If you prefer Formspree (simpler setup):

1. Go to [Formspree.io](https://formspree.io/)
2. Create forms for contact and quotes
3. Replace the EmailJS code with Formspree endpoints

### Option 3: Backend Email Service
For a more robust solution, consider:
- Node.js with Nodemailer
- AWS SES
- SendGrid API

## Environment Variables (Optional)
For production, you might want to use environment variables:

Create `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_QUOTE_TEMPLATE_ID=your_quote_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update the emailService.ts to use these variables.

## Security Notes
- EmailJS public key is safe to expose in frontend code
- Consider rate limiting for production use
- Monitor your EmailJS usage to avoid limits
- Set up proper email validation and spam protection

## Troubleshooting
- Check browser console for errors
- Verify EmailJS service is active
- Test email templates in EmailJS dashboard
- Ensure email service credentials are correct

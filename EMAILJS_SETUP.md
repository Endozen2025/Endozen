# EmailJS Setup Guide for EndoZen Contact & Quote Forms

## Overview
This guide will help you set up EmailJS to handle contact form submissions and quote requests for your EndoZen website.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the setup instructions for your provider
4. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Templates

### Contact Form Template
1. Click "Create New Template"
2. Name it "Contact Form Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{from_name}}

**Content:**
```
Dear EndoZen Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Needed: {{service_needed}}

Message:
{{message}}

Submitted on: {{date}} at {{time}}

Please respond to this inquiry promptly.

Best regards,
EndoZen Website Contact Form
```

4. Save the template and note down the **Template ID**

### Quote Request Template
1. Click "Create New Template"
2. Name it "Quote Request Template"
3. Use this template content:

**Subject:** New Quote Request - {{facility_name}}

**Content:**
```
Dear EndoZen Team,

You have received a new quote request:

FACILITY INFORMATION:
- Facility Name: {{facility_name}}
- Facility Type: {{facility_type}}
- Contact Person: {{contact_name}}
- Email: {{from_email}}
- Phone: {{phone}}

EQUIPMENT DETAILS:
- Equipment Type: {{equipment_type}}
- Brand: {{equipment_brand}}
- Model: {{equipment_model}}
- Service Type: {{service_type}}
- Urgency: {{urgency}}

ISSUE DESCRIPTION:
{{symptoms}}

PREFERRED SERVICE DATE:
{{preferred_date}}

ADDITIONAL INFORMATION:
{{additional_info}}

Submitted on: {{date}} at {{time}}

Please prepare a quote and respond promptly.

Best regards,
EndoZen Website Quote System
```

4. Save the template and note down the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" settings in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Note it down

## Step 5: Configure Environment Variables
1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
VITE_EMAILJS_QUOTE_TEMPLATE_ID=your_quote_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS IDs

## Step 6: Test the Integration
1. Restart your development server: `npm run dev`
2. Go to the Contact page and submit a test form
3. Go to the Quote page and submit a test quote request
4. Check your email inbox for the submissions
5. Check the browser console for any errors

## Step 7: Production Deployment
1. Make sure to add the environment variables to your production hosting platform (Vercel, Netlify, etc.)
2. Test the forms again in production

## Security Notes
- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Your EmailJS Public Key is safe to expose in the frontend
- EmailJS provides rate limiting and spam protection

## Troubleshooting

### Forms not sending emails?
1. Check browser console for errors
2. Verify all environment variables are set correctly
3. Make sure EmailJS service is active
4. Check EmailJS dashboard for failed requests

### Emails going to spam?
1. Add your domain to EmailJS allowed origins
2. Use a proper "from" email address in your service
3. Set up SPF/DKIM records for your domain

### Rate limiting issues?
1. EmailJS free plan has limits (200 emails/month)
2. Consider upgrading to a paid plan for higher limits

## Support
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their dashboard

## Features Included
✅ Contact form submissions
✅ Quote request submissions
✅ Email validation
✅ Loading states
✅ Success/error messages
✅ Form reset after submission
✅ Professional email templates
✅ Indian date/time formatting
✅ Environment variable configuration
✅ Error handling and validation

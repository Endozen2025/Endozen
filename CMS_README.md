# EndoZen CMS (Content Management System)

## Overview
The EndoZen CMS is a comprehensive content management system built for the EndoZen medical equipment service website. It provides administrators with full control over website content, image management, and form submissions handling.

## Features

### 🎯 **Content Management**
- Edit text content across all website pages
- Support for different content types (text, textarea, images, URLs)
- Page-specific content filtering
- Real-time content updates
- Add/Edit/Delete content items

### 📷 **Image Gallery Management**
- Upload new images to the website
- View all uploaded images
- Delete unused images
- Support for multiple image formats
- Automatic file organization

### 📋 **Form Submissions Management**
- View all contact form submissions
- View all quote request submissions
- Mark submissions as read/responded
- Export submission data as JSON
- Real-time submission notifications

### 📊 **Analytics Dashboard**
- Website visitor statistics
- Form submission metrics
- Popular services tracking
- Page view analytics
- Activity monitoring

## Access Information

### URL
The CMS can be accessed at: `http://localhost:5173/cms`

### Login Credentials
- **Username:** `admin`
- **Password:** `endozen2025`

## How to Use

### 1. **Accessing the CMS**
1. Navigate to `/cms` in your browser
2. Enter the admin credentials
3. You'll be redirected to the CMS dashboard

### 2. **Managing Content**
1. Click on the "Content Management" tab
2. Filter by page using the dropdown menu
3. Edit content directly in the table cells
4. Click the save icon to save changes
5. Use the "Add Content" button to create new content items

### 3. **Managing Images**
1. Click on the "Image Gallery" tab
2. Use "Upload Images" to add new images
3. View all existing images in the gallery
4. Delete images using the trash icon

### 4. **Viewing Form Submissions**
1. Click on the "Form Submissions" tab
2. View all contact and quote submissions
3. Click "Mark as Read" to update status
4. Use "Export Data" to download submissions

### 5. **Analytics Dashboard**
1. Click on the "Analytics" tab
2. View visitor statistics and metrics
3. Monitor form submission trends
4. Track popular services

## Technical Implementation

### Frontend Technologies
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React Router** for navigation

### Backend API (Mock Implementation)
The current implementation uses a mock API service (`cmsApi.ts`) that simulates backend functionality:

- Form submissions are stored in localStorage
- Content changes are simulated with delays
- Image uploads are mocked
- Analytics data is generated

### Production Deployment

For production deployment, you'll need to implement a real backend API:

#### Required Backend Endpoints:
```
GET    /api/content              - Fetch all content
PUT    /api/content/:id          - Update content item
POST   /api/content              - Create new content
DELETE /api/content/:id          - Delete content

POST   /api/forms/contact        - Submit contact form
POST   /api/forms/quote          - Submit quote form
GET    /api/forms/submissions    - Get all submissions
PUT    /api/forms/:id/status     - Update submission status

POST   /api/images/upload        - Upload image
GET    /api/images               - List all images
DELETE /api/images/:filename     - Delete image

GET    /api/analytics            - Get analytics data

POST   /api/auth/login           - Admin authentication
GET    /api/auth/validate        - Validate token
```

#### Database Schema:
```sql
-- Content Table
CREATE TABLE content (
  id VARCHAR(255) PRIMARY KEY,
  page VARCHAR(100) NOT NULL,
  section VARCHAR(100) NOT NULL,
  key VARCHAR(100) NOT NULL,
  value TEXT NOT NULL,
  type ENUM('text', 'textarea', 'image', 'url') NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Form Submissions Table
CREATE TABLE form_submissions (
  id VARCHAR(255) PRIMARY KEY,
  type ENUM('contact', 'quote') NOT NULL,
  data JSON NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('new', 'read', 'responded') DEFAULT 'new',
  ip_address VARCHAR(45),
  user_agent TEXT
);

-- Images Table
CREATE TABLE images (
  id VARCHAR(255) PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  original_name VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  file_size INT NOT NULL,
  mime_type VARCHAR(100) NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Security Features

### Authentication
- Secure login system with username/password
- Session management with JWT tokens
- Automatic logout on inactivity

### Data Protection
- Input validation and sanitization
- XSS protection
- CSRF protection (in production)
- File upload restrictions

### Access Control
- Admin-only access to CMS
- Role-based permissions (can be extended)
- Audit logging for content changes

## Email Notifications

The system can be configured to send email notifications for:
- New contact form submissions
- New quote requests
- System alerts and errors

### Email Configuration (Production):
```javascript
// Example using SendGrid
const emailConfig = {
  apiKey: process.env.SENDGRID_API_KEY,
  from: 'noreply@endozenindia.com',
  to: 'admin@endozenindia.com'
};
```

## Backup and Maintenance

### Data Backup
- Regular database backups
- Image file backups
- Configuration backups

### Maintenance Tasks
- Log file rotation
- Database optimization
- Security updates
- Performance monitoring

## Support and Updates

For technical support or feature requests, contact the development team.

### Version History
- **v1.0.0** - Initial CMS implementation
- **v1.1.0** - Added image management
- **v1.2.0** - Enhanced analytics dashboard

## Environment Variables (Production)

```env
# Database
DB_HOST=localhost
DB_PORT=3306
DB_NAME=endozen_cms
DB_USER=your_username
DB_PASSWORD=your_password

# Authentication
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret

# Email
SENDGRID_API_KEY=your_sendgrid_key
ADMIN_EMAIL=admin@endozenindia.com

# File Storage
UPLOAD_PATH=/var/www/uploads
MAX_FILE_SIZE=10485760

# API
API_BASE_URL=https://api.endozenindia.com
```

---

**Note:** This CMS is specifically designed for the EndoZen medical equipment service website. All features are tailored to the healthcare industry requirements and can be further customized based on specific business needs.

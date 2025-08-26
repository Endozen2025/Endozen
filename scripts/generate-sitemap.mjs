import fs from 'fs';
import path from 'path';

// Configuration
const BASE_URL = 'https://endozenindia.com';
const OUTPUT_PATH = './public/sitemap.xml';

// Define your routes with their properties
const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
    title: 'Professional Endoscope & Medical Equipment Servicing - EndoZen'
  },
  {
    path: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    title: 'About Us - EndoZen Medical Equipment Services'
  },
  {
    path: '/services',
    changefreq: 'monthly',
    priority: '0.9',
    title: 'Our Services - Endoscope Repair & Medical Equipment Servicing'
  },
  {
    path: '/equipment',
    changefreq: 'monthly',
    priority: '0.8',
    title: 'Medical Equipment - EndoZen Servicing Solutions'
  },
  {
    path: '/quote',
    changefreq: 'monthly',
    priority: '0.7',
    title: 'Get Quote - Medical Equipment Service Request'
  },
  {
    path: '/contact',
    changefreq: 'monthly',
    priority: '0.7',
    title: 'Contact Us - EndoZen Medical Equipment Services'
  },
  {
    path: '/privacy',
    changefreq: 'yearly',
    priority: '0.3',
    title: 'Privacy Policy - EndoZen'
  },
  {
    path: '/terms',
    changefreq: 'yearly',
    priority: '0.3',
    title: 'Terms of Service - EndoZen'
  }
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

function writeSitemap() {
  const sitemapContent = generateSitemap();
  
  try {
    fs.writeFileSync(OUTPUT_PATH, sitemapContent, 'utf8');
    console.log('✅ Sitemap generated successfully at:', OUTPUT_PATH);
    console.log(`📍 Total URLs: ${routes.length}`);
    console.log('🔍 URLs included:');
    routes.forEach(route => {
      console.log(`   ${BASE_URL}${route.path} (Priority: ${route.priority})`);
    });
    console.log('\n📋 Next steps for better indexing:');
    console.log('1. Submit sitemap to Google Search Console');
    console.log('2. Check for any crawl errors in Google Search Console');
    console.log('3. Ensure all pages have unique meta titles and descriptions');
    console.log('4. Add internal links between pages');
    console.log('5. Check page loading speed with PageSpeed Insights');
  } catch (error) {
    console.error('❌ Error writing sitemap:', error);
    process.exit(1);
  }
}

// Run the script
writeSitemap();
# AYAAT IT SOLUTION Website

A premium, responsive, static website for AYAAT IT SOLUTION. The project is built with HTML5, CSS3 and vanilla JavaScript, and is designed to support local SEO, accessibility, clean code and strong conversion paths for businesses in Sherpur, Bogura and the wider Bogura District.

## Project Overview

This website is designed to present the business as a professional digital agency with three core services:

- Graphic Design
- Web Development
- Digital Marketing

The site includes six pages:

- Home
- Services
- Mission & Vision
- About Us
- Contact Us
- Book Appointment

## File Structure

```text
AYAAT-IT-SOLUTION/
├── index.html
├── services.html
├── mission-vision.html
├── about.html
├── contact.html
├── appointment.html
├── robots.txt
├── sitemap.xml
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    │   └── profile.png
    ├── icons/
    └── logo/
        └── logo.png
```

## How to Run Locally

Open the project folder in VS Code and run a local static server from the project root:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## How to Replace Profile Image

Replace the file at:

```text
assets/images/profile.png
```

Use a high-quality portrait or professional business image. Keep the image crop visually balanced and avoid distortions. The hero section is designed to display it cleanly at a premium aspect ratio.

## How to Replace Logo

Replace the file at:

```text
assets/logo/logo.png
```

Use a clear logo with a transparent or dark-compatible background. The favicon and header brand use this file.

## How to Change Business Information

Update the business information in each HTML file and in `js/script.js` if needed. The main contact details are:

- Business Name: AYAAT IT SOLUTION
- Address: Adjacent to Khandakar Tolar Gate, Sherpur-5840, Bogura, Bangladesh
- Phone: +880 1704 915 034
- WhatsApp: +8801704915034
- Email: AYAATITSOLUTION@GMAIL.COM

## How Contact WhatsApp Works

The contact form validates the fields and then creates a WhatsApp message with the user details. It redirects the visitor to:

```text
https://wa.me/8801704915034
```

The message is encoded using JavaScript `encodeURIComponent()` before opening WhatsApp.

## How Appointment WhatsApp Works

On the appointment page, the form validates the information, builds a message containing all appointment fields and opens WhatsApp with the message prefilled.

## How Gmail Appointment Works

On successful appointment submission, the site offers a clear option to open a Gmail compose window using `mailto:`. This is a frontend-compatible method and does not send email directly through SMTP or private credentials.

## Gmail Frontend Limitation

Frontend JavaScript cannot securely send email through Gmail SMTP. It can only open the user's default mail client or a Gmail compose URL. For full automated email delivery in the future, integrate a backend service or a third-party email service such as EmailJS or Formspree.

## How to Integrate EmailJS Later

When ready, add a backend-friendly email solution and replace the current `mailto:` behavior with the configured EmailJS API or a form endpoint. Keep the frontend validation and business information consistent.

## How to Deploy to Netlify

1. Push the project to GitHub.
2. Log in to Netlify.
3. Select New site from Git.
4. Connect the repository.
5. Set the publish directory to the project root.
6. Deploy.

## How to Deploy to GitHub Pages

1. Push the project to a GitHub repository.
2. Open repository settings.
3. Navigate to Pages.
4. Select the main branch and the root folder.
5. Save and wait for deployment.

## How to Deploy to Cloudflare Pages

1. Push the site to GitHub.
2. Open Cloudflare Pages.
3. Create a new project and connect the repository.
4. Select the project root as the build output directory.
5. Deploy.

## SEO Implementation

The site includes:

- Semantic HTML5
- Mobile-first responsive layouts
- Canonical URLs
- Meta descriptions and titles
- Open Graph tags
- Structured data for LocalBusiness and services
- Clean URLs
- Internal links
- Crawlable content and visible business information
- Robots.txt and sitemap.xml

## Google Search Console Setup

1. Verify domain ownership in Google Search Console.
2. Submit the sitemap.
3. Inspect key URLs.
4. Monitor indexing status.
5. Review search queries and impressions.
6. Check click data and coverage issues.

## Sitemap Submission

The project includes a `sitemap.xml` file. Submit it to Google Search Console after verification.

## Google Business Profile Setup

The business should:

- Claim and verify the Google Business Profile
- Use accurate business information
- Add the correct category
- Add real services
- Add fresh photos
- Add the website URL
- Keep phone, address and hours accurate
- Collect genuine customer reviews and respond professionally

## Local SEO Growth Strategy

Ranking is not guaranteed by code alone. Ongoing local SEO should include:

- Google Business Profile optimization
- Genuine reviews from real clients
- Helpful local content and service pages
- Search Console monitoring
- Regular website updates
- Accurate business listings and NAP consistency
- Relevant local backlinks and community visibility
- Performance and UX improvements

Avoid:

- Fake reviews
- Purchased backlink schemes
- Keyword stuffing
- Hidden text
- Doorway pages

## Future Blog Strategy

Structure the site for future growth by adding a blog or resources section later. Useful topics could include:

- Graphic design for local businesses
- Why businesses in Bogura need a professional website
- Local SEO for Sherpur businesses
- Facebook marketing tips for local businesses
- How to choose a web developer in Bogura
- Why branding matters for growth

## Domain Configuration

The project uses a placeholder domain:

```text
https://www.ayaaitsolution.com/
```

Replace this with the final live domain when available.

## Important Note

This is a static frontend-only website. For real automatic email delivery, a backend integration or a service like EmailJS or Formspree is recommended later.

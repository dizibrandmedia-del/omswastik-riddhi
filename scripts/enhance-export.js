const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const indexPath = path.join(outDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('index.html not found');
  process.exit(1);
}

// 1. Find all CSS files in out directory
function findFiles(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(findFiles(fullPath, ext));
    } else if (file.endsWith(ext)) {
      results.push(fullPath);
    }
  }
  return results;
}

const cssFiles = findFiles(outDir, '.css');
let combinedCss = '';
for (const f of cssFiles) {
  combinedCss += fs.readFileSync(f, 'utf8') + '\n';
}

// Ensure section-fade is visible by default in inlined css
combinedCss += `
.section-fade {
  opacity: 1 !important;
  transform: none !important;
}
html {
  scroll-behavior: smooth;
}
`;

// Write to root styles.css
fs.writeFileSync(path.join(outDir, 'styles.css'), combinedCss, 'utf8');
console.log(`Wrote ${combinedCss.length} bytes to styles.css`);

// 2. Read index.html
let html = fs.readFileSync(indexPath, 'utf8');

// Inline CSS and standalone scripts into <head>
const inlineStyle = `
  <link rel="stylesheet" href="/styles.css" />
  <style id="inlined-theme-css">
${combinedCss}
  </style>
  <script>
    // Universal Standalone Script for LiteSpeed & Mobile Browsers
    document.addEventListener('DOMContentLoaded', function() {
      // 1. Header scroll background
      var header = document.getElementById('main-header') || document.querySelector('header');
      function onScroll() {
        if (window.scrollY > 30) {
          header && header.classList.add('scrolled', 'shadow-md');
        } else {
          header && header.classList.remove('scrolled', 'shadow-md');
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      // 2. Mobile Menu Toggle
      var menuBtn = document.getElementById('mobile-menu-btn');
      var mobileNav = document.getElementById('mobile-nav-panel');
      if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          var isHidden = mobileNav.classList.contains('invisible') || mobileNav.classList.contains('opacity-0');
          if (isHidden) {
            mobileNav.classList.remove('invisible', 'opacity-0', '-translate-y-4', 'pointer-events-none');
            mobileNav.classList.add('visible', 'opacity-100', 'translate-y-0');
          } else {
            mobileNav.classList.remove('visible', 'opacity-100', 'translate-y-0');
            mobileNav.classList.add('invisible', 'opacity-0', '-translate-y-4', 'pointer-events-none');
          }
        });

        // Close on link click
        mobileNav.querySelectorAll('a').forEach(function(link) {
          link.addEventListener('click', function() {
            mobileNav.classList.remove('visible', 'opacity-100', 'translate-y-0');
            mobileNav.classList.add('invisible', 'opacity-0', '-translate-y-4', 'pointer-events-none');
          });
        });
      }

      // 3. Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
          var targetId = this.getAttribute('href');
          if (targetId && targetId !== '#') {
            var targetEl = document.querySelector(targetId);
            if (targetEl) {
              e.preventDefault();
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });

      // 4. Form submission handler
      var form = document.querySelector('form');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          var nameInput = form.querySelector('input[type="text"]');
          var phoneInput = form.querySelector('input[type="tel"]');
          if (nameInput && !nameInput.value.trim()) {
            alert('Please enter your full name');
            nameInput.focus();
            return;
          }
          if (phoneInput && !phoneInput.value.trim()) {
            alert('Please enter your mobile number');
            phoneInput.focus();
            return;
          }
          var submitBtn = form.querySelector('button[type="submit"]');
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
          }
          setTimeout(function() {
            alert('Thank you! Your enquiry for Riddhi has been submitted. Our team will get in touch with you shortly.');
            form.reset();
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = 'Send Enquiry';
            }
          }, 1000);
        });
      }
    });
  </script>
`;

if (html.includes('</head>')) {
  html = html.replace('</head>', `${inlineStyle}\n</head>`);
} else {
  html = inlineStyle + html;
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully injected inlined CSS and interactive script into index.html');

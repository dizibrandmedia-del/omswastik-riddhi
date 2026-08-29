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

// Write to root styles.css
fs.writeFileSync(path.join(outDir, 'styles.css'), combinedCss, 'utf8');
console.log(`Wrote ${combinedCss.length} bytes to styles.css`);

// 2. Read index.html
let html = fs.readFileSync(indexPath, 'utf8');

// Inline CSS into <head>
const inlineStyle = `
  <link rel="stylesheet" href="/styles.css" />
  <style id="inlined-theme-css">
${combinedCss}
  </style>
  <script>
    // Self-contained interactivity for LiteSpeed / static hosting
    document.addEventListener('DOMContentLoaded', function() {
      // 1. Header scroll effect
      var header = document.querySelector('header');
      function updateHeader() {
        if (window.scrollY > 60) {
          header && header.classList.add('scrolled');
        } else {
          header && header.classList.remove('scrolled');
        }
      }
      window.addEventListener('scroll', updateHeader, { passive: true });
      updateHeader();

      // 2. Scroll reveal
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.section-fade').forEach(function(el) {
        observer.observe(el);
      });

      // 3. Count Up
      var countObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var target = parseFloat(el.getAttribute('data-count') || el.innerText);
            if (!isNaN(target) && target > 0) {
              var duration = 2000;
              var start = performance.now();
              function animate(now) {
                var elapsed = now - start;
                var progress = Math.min(elapsed / duration, 1);
                var eased = 1 - Math.pow(1 - progress, 3);
                var current = eased * target;
                el.innerText = target % 1 === 0 ? Math.round(current) : current.toFixed(1);
                if (progress < 1) requestAnimationFrame(animate);
              }
              requestAnimationFrame(animate);
            }
            countObserver.unobserve(el);
          }
        });
      }, { threshold: 0.3 });

      document.querySelectorAll('[data-count]').forEach(function(el) {
        countObserver.observe(el);
      });

      // 4. Smooth scrolling for anchors
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
          var targetId = this.getAttribute('href');
          if (targetId && targetId !== '#') {
            var targetEl = document.querySelector(targetId);
            if (targetEl) {
              e.preventDefault();
              targetEl.scrollIntoView({ behavior: 'smooth' });
              // Close mobile menu if open
              var mobileMenu = document.querySelector('.mobile-menu-container');
              if (mobileMenu) {
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
              }
            }
          }
        });
      });

      // 5. Mobile menu toggle
      var menuBtn = document.querySelector('button[aria-label*="menu"]');
      var mobileMenu = document.querySelector('.mobile-menu-container');
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
          var isOpen = mobileMenu.classList.contains('opacity-100');
          if (isOpen) {
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = '';
          } else {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
          }
        });
      }

      // 6. Enquiry form submission
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

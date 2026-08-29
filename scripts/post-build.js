const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.log('Out directory does not exist, skipping post-build.');
  process.exit(0);
}

// 1. Rename _next to next-assets
const oldNext = path.join(outDir, '_next');
const newNext = path.join(outDir, 'next-assets');

if (fs.existsSync(oldNext)) {
  if (fs.existsSync(newNext)) {
    fs.rmSync(newNext, { recursive: true, force: true });
  }
  fs.renameSync(oldNext, newNext);
  console.log('Renamed _next to next-assets');
}

// 2. Replace /_next/ references
function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceInDir(fullPath);
    } else if (/\.(html|js|css|txt|json)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('/_next/') || content.includes('_next/')) {
        content = content.replace(/\/_next\//g, '/next-assets/').replace(/_next\//g, 'next-assets/');
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

replaceInDir(outDir);
console.log('Updated asset references to next-assets');

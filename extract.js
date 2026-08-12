const fs = require('fs');
const path = require('path');

const files = [
    'projects/cisco.html',
    'projects/geteksi.html',
    'projects/himaprodi.html',
    'projects/infinity.html',
    'projects/vishire.html',
    'projects/weather-app.html'
];

let out = "";
files.forEach(file => {
    const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    const descMatch = content.match(/<p class="project-description">\s*([\s\S]*?)\s*<\/p>/);
    const featMatches = content.matchAll(/<div class="feature-text">\s*([\s\S]*?)\s*<\/div>/g);
    
    out += `\n// ${file}\n`;
    if(descMatch) out += `desc: "${descMatch[1].trim().replace(/"/g, '\\"')}",\n`;
    let i = 1;
    for (const match of featMatches) {
        out += `feat_${i}: "${match[1].trim().replace(/"/g, '\\"')}",\n`;
        i++;
    }
});
fs.writeFileSync('temp_strings.txt', out);

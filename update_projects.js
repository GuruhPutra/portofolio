const fs = require('fs');
const path = require('path');

const files = [
    'cisco', 'geteksi', 'himaprodi', 'infinity', 'vishire', 'weather-app'
];

files.forEach(basename => {
    const filePath = path.join(__dirname, 'projects', `${basename}.html`);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Script tag
    if (!content.includes('translations.js')) {
        content = content.replace(
            '<script src="../script.js"></script>',
            '<script src="../translations.js"></script>\n    <script src="../script.js"></script>'
        );
    }

    // 2. Back Link
    content = content.replace(
        /<a href="\.\.\/index\.html" class="back-link">([\s\S]*?)<\/a>/,
        '<a href="../index.html" class="back-link" data-i18n="back_to_portfolio">$1</a>'
    );

    // 3. Project Description
    const keyPrefix = `proj_${basename.replace('-', '_')}`;
    content = content.replace(
        /<p class="project-description">\s*([\s\S]*?)\s*<\/p>/,
        `<p class="project-description" data-i18n="${keyPrefix}_desc">\n                    $1\n                </p>`
    );

    // 4. Tools Used
    content = content.replace(
        /<div class="tools-label">\s*<i class="fas fa-code"><\/i> Tools Used\s*<\/div>/,
        `<div class="tools-label" data-i18n="tools_used">\n                        <i class="fas fa-code"></i> Tools Used\n                    </div>`
    );

    // 5. View Project overlay
    content = content.replace(
        /<div class="overlay-content">\s*<i class="fas fa-eye overlay-icon"><\/i>\s*<span>View<\/span>\s*<\/div>/g,
        `<div class="overlay-content" data-i18n="view_project">\n                            <i class="fas fa-eye overlay-icon"></i>\n                            <span>View</span>\n                        </div>`
    );

    // 6. Reflection Title
    content = content.replace(
        /<h2 class="features-title">Reflection<\/h2>/,
        `<h2 class="features-title" data-i18n="reflection_title">Reflection</h2>`
    );

    // 7. Feature Texts (Reflection points)
    let featCount = 1;
    content = content.replace(/<div class="feature-text">\s*([\s\S]*?)\s*<\/div>/g, (match, p1) => {
        const replacement = `<div class="feature-text" data-i18n="${keyPrefix}_feat_${featCount}">\n                            ${p1}\n                        </div>`;
        featCount++;
        return replacement;
    });

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Project HTMLs updated successfully.');

// Load content from JSON file
async function loadContent() {
    try {
        const response = await fetch('content.json');
        const data = await response.json();

        // Populate bio section
        populateBio(data.bio);

        // Populate articles section
        populateArticles(data.articles);

        // Populate socials section
        populateSocials(data.socials);

        // Populate projects section
        populateProjects(data.projects);

    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Populate bio section
function populateBio(bio) {
    const bioContent = document.querySelector('.bio-content .intro-text');
    if (bioContent && bio) {
        bioContent.innerHTML = `
            > ${bio.title}<br>
            > ${bio.tagline}<br>
            > ${bio.description}
        `;
    }
}

// Populate articles section
function populateArticles(articles) {
    const articlesContainer = document.getElementById('articles');
    if (!articlesContainer || !articles) return;

    articlesContainer.innerHTML = '';

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'content-item';
        articleElement.innerHTML = `
            <div class="content-item-header">
                <span class="file-icon">[+]</span>
                <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="content-link">${article.title}</a>
            </div>
            <span class="description">- ${article.source}</span>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

// Populate socials section
function populateSocials(socials) {
    const socialsContainer = document.getElementById('socials');
    if (!socialsContainer || !socials) return;

    socialsContainer.innerHTML = '';

    socials.forEach(social => {
        const socialElement = document.createElement('div');
        socialElement.className = 'content-item content-item-inline';
        socialElement.innerHTML = `
            <div class="content-item-header">
                <span class="file-icon">[>]</span>
                <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="content-link">${social.platform}</a>
            </div>
        `;
        socialsContainer.appendChild(socialElement);
    });
}

// Populate projects section
function populateProjects(projects) {
    const projectsContainer = document.getElementById('websites');
    if (!projectsContainer || !projects) return;

    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'content-item';

        const techStack = project.tech ? project.tech.join(', ') : '';

        projectElement.innerHTML = `
            <div class="content-item-header">
                <span class="file-icon">[*]</span>
                <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="content-link">${project.name}</a>
            </div>
            <span class="description">- ${project.description}${techStack ? ' [' + techStack + ']' : ''}</span>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadContent);

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

const hoverElements = document.querySelectorAll('a.link, .skill, .btn-papier, .menu-button, .btn-visiter, .close-fullscreen, .read-more, .project-card');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--hover');
        if (element.classList.contains('button')) {
            cursor.classList.add('cursor--button');
        }
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover', 'cursor--button');
    });
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.6)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = document.querySelectorAll('.side-menu a.link');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    sideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

menuOverlay.addEventListener('click', () => {
    menuButton.classList.remove('active');
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuButton.classList.remove('active');
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
});

function openFullscreen(title, description, imageUrl, element) {
    const fullscreen = document.getElementById('projectFullscreen');
    document.getElementById('fullscreenTitle').textContent = title;
    document.getElementById('fullscreenDescription').textContent = description;
    document.getElementById('fullscreenImage').src = imageUrl;

    const projectUrl = element.getAttribute('data-url');
    const githubUrl = element.getAttribute('data-github');

    document.getElementById('fullscreenLink').href = projectUrl;
    document.getElementById('fullscreenGithub').href = githubUrl;

    fullscreen.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const fullscreen = document.getElementById('projectFullscreen');
    fullscreen.classList.remove('active');
    document.body.style.overflow = '';
}


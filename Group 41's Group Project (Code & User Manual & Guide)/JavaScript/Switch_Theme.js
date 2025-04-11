document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeSwitcher = document.querySelector('.theme_switcher');
    const loginContainer = document.getElementById('loginContainer');
    const homeContent = document.getElementById('homeContent');
    const username = localStorage.getItem('loggedInUser');

    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        themeSwitcher.textContent = savedTheme === 'light' ? 'Dark Mode' : 'Light Mode';
    }

    if (username) {
        loginContainer.style.display = 'none';
        homeContent.style.display = 'block';
    } else {
        loginContainer.style.display = 'block';
        homeContent.style.display = 'none';
    }
});

function switchTheme() {
    const body = document.body;
    const themeSwitcher = document.querySelector('.theme_switcher');
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    themeSwitcher.textContent = newTheme === 'light' ? 'Dark Mode' : 'Light Mode';

    localStorage.setItem('theme', newTheme);
}
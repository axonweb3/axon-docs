(() => {
    const loadLinks = () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const footerLinksPlaceholder = document.getElementById('footer-links-placeholder');
        footerLinksPlaceholder.innerHTML = `
                <a href="https://github.com/axonweb3/axon">
                    <img src="/img/github_${theme}.svg" alt="GitHub"/>
                </a>
                <a href="https://twitter.com/AxonWeb3">
                    <img src="/img/twitter_${theme}.svg" alt="Twitter"/>
                </a>
                `;
        const footerLogo = document.getElementById('footer-logo');
        footerLogo.setAttribute('src', `/img/logo_${theme}.png`);
    };
    window.onload = () => {
        loadLinks();
        const themeButton = document.querySelector('.navbar__items--right>div:first-child>button')
        if (themeButton) {
            themeButton.addEventListener('click', () => setTimeout(loadLinks, 100));
        }
    }
})();

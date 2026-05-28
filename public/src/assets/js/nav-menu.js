export function menu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');

    const SM_BREAKPOINT = 640;

    function closeMobileMenu() {
        mobileMenu.style.maxHeight = '0px';
        mobileMenu.style.opacity = '0';
        mobileMenu.style.display = '';
        hamburger.setAttribute('aria-expanded', 'false');
        bar1.style.transform = '';
        bar2.style.opacity = '1';
        bar2.style.transform = '';
        bar3.style.transform = '';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= SM_BREAKPOINT) closeMobileMenu();
    });

    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';

        if (isOpen) {
            closeMobileMenu();
        } else {
            // Abre
            mobileMenu.style.display = 'flex';
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
            mobileMenu.style.opacity = '1';
            hamburger.setAttribute('aria-expanded', 'true');

            // Anima para X
            bar1.style.transform = 'translateY(6.5px) rotate(45deg)';
            bar2.style.opacity = '0';
            bar2.style.transform = 'scaleX(0)';
            bar3.style.transform = 'translateY(-6.5px) rotate(-45deg)';
        }
    });
}
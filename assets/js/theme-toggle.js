/*!
 * Modified from
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
    'use strict';

    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = theme => localStorage.setItem('theme', theme);

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            return storedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = function (theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        updateIcon(theme);
    };

    const updateIcon = (theme) => {
        const iconLight = document.getElementById('icon-light');
        const iconDark = document.getElementById('icon-dark');
        if (!iconLight || !iconDark) return;

        if (theme === 'dark') {
            iconLight.classList.remove('d-none');
            iconDark.classList.add('d-none');
        } else {
            iconLight.classList.add('d-none');
            iconDark.classList.remove('d-none');
        }
    };

    // Initialize theme
    setTheme(getPreferredTheme());

    // Update theme if browser/OS setting is changed
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme();
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme());
        }
    });

    // Enable theme switching, on DOMContentLoaded
    window.addEventListener('DOMContentLoaded', () => {
        updateIcon(getPreferredTheme());
        const themeToggle = document.getElementById('bd-theme');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-bs-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                setStoredTheme(newTheme);
                setTheme(newTheme);
            });
        }
    });
})();

/**
 * SOMA Yoga Studio - Core Application Script
 * Förberedd för framtida integration av GA4, HubSpot och Mailchimp.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Hantering av Mobilmeny
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-navigation');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // 2. Simulering av Analytics-spårning vid formulärinskick (Utmärkt för laborationer)
    const trackedForms = document.querySelectorAll('form');
    
    trackedForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const formId = form.getAttribute('id') || 'unknown-form';
            console.log(`[Analytics Event] Formulär '${formId}' skickat. Sparar UTM-data...`);
        });
    });
});
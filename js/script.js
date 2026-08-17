const BUSINESS_INFO = {
    name: 'AYAAT IT SOLUTION',
    phone: '+880 1704 915 034',
    phoneHref: 'tel:+8801704915034',
    whatsapp: 'https://wa.me/8801704915034',
    email: 'AYAATITSOLUTION@GMAIL.COM',
    emailHref: 'mailto:AYAATITSOLUTION@GMAIL.COM',
    address: 'Adjacent to Khandakar Tolar Gate, Sherpur-5840, Bogura, Bangladesh',
    location: 'Sherpur, Bogura, Bangladesh'
};

const yearNode = document.querySelector('[data-current-year]');
if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
}

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.site-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!expanded));
        mainNav.classList.toggle('open');
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    }
});

const onScroll = () => {
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 16);
    }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('visible'));
}

const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const isOpen = item.classList.contains('active');
        item.classList.toggle('active', !isOpen);
        button.setAttribute('aria-expanded', String(!isOpen));
    });
});

function setFormFeedback(el, message, type = 'success') {
    if (!el) return;
    el.textContent = message;
    el.classList.remove('success', 'error');
    el.classList.add(type);
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^[+]?[(]?[0-9]{1,4}[)]?[-\s0-9]{7,15}$/.test(phone.trim());
}

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('fullName')?.value.trim();
        const phone = document.getElementById('phoneNumber')?.value.trim();
        const email = document.getElementById('emailAddress')?.value.trim();
        const service = document.getElementById('requiredService')?.value;
        const messageText = document.getElementById('message')?.value.trim();
        const status = document.querySelector('#contactForm .form-status');

        if (!name) {
            setFormFeedback(status, 'Please enter your name.', 'error');
            return;
        }
        if (!phone || !validatePhone(phone)) {
            setFormFeedback(status, 'Please enter a valid phone number.', 'error');
            return;
        }
        if (!email || !validateEmail(email)) {
            setFormFeedback(status, 'Please enter a valid email address.', 'error');
            return;
        }
        if (!service) {
            setFormFeedback(status, 'Please select a service.', 'error');
            return;
        }
        if (!messageText) {
            setFormFeedback(status, 'Please enter your message.', 'error');
            return;
        }

        const whatsappMessage = [
            'Hello AYAAT IT SOLUTION,',
            '',
            'I would like to contact you regarding your services.',
            '',
            'Name: ' + name,
            'Phone: ' + phone,
            'Email: ' + email,
            'Required Service: ' + service,
            'Message: ' + messageText
        ].join('\n');

        setFormFeedback(status, 'Your message is ready. Continue to WhatsApp to send it.', 'success');
        window.open('https://wa.me/8801704915034?text=' + encodeURIComponent(whatsappMessage), '_blank');
        contactForm.reset();
    });
}

const appointmentForm = document.querySelector('#appointmentForm');
if (appointmentForm) {
    const confirmationModal = document.querySelector('#confirmationModal');
    const confirmationContent = document.querySelector('#confirmationContent');
    const closeConfirmationBtn = document.querySelector('#closeConfirmation');

    if (closeConfirmationBtn) {
        closeConfirmationBtn.addEventListener('click', () => {
            confirmationModal.classList.add('hidden');
        });
    }

    if (confirmationModal) {
        confirmationModal.addEventListener('click', (e) => {
            if (e.target === confirmationModal) {
                confirmationModal.classList.add('hidden');
            }
        });
    }

    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('fullName')?.value.trim();
        const phone = document.getElementById('phoneNumber')?.value.trim();
        const email = document.getElementById('emailAddress')?.value.trim();
        const address = document.getElementById('address')?.value.trim();
        const reason = document.getElementById('reasonOfAppointment')?.value;
        const details = document.getElementById('detailsOfAppointment')?.value.trim();
        const status = document.querySelector('#appointmentForm .form-status');

        if (!name) {
            setFormFeedback(status, 'Please enter your full name.', 'error');
            return;
        }
        if (!phone || !validatePhone(phone)) {
            setFormFeedback(status, 'Please enter a valid phone number.', 'error');
            return;
        }
        if (!email || !validateEmail(email)) {
            setFormFeedback(status, 'Please enter a valid email address.', 'error');
            return;
        }
        if (!address) {
            setFormFeedback(status, 'Please enter your address.', 'error');
            return;
        }
        if (!reason) {
            setFormFeedback(status, 'Please select a reason for appointment.', 'error');
            return;
        }
        if (!details) {
            setFormFeedback(status, 'Please describe your appointment details.', 'error');
            return;
        }

        const data = {
            name,
            phone,
            email,
            address,
            reason,
            details
        };

        const whatsappMessage = [
            'Hello AYAAT IT SOLUTION,',
            '',
            'I would like to book an appointment.',
            '',
            'Full Name: ' + data.name,
            'Phone: ' + data.phone,
            'Email: ' + data.email,
            'Address: ' + data.address,
            'Reason of Appointment: ' + data.reason,
            'Details: ' + data.details
        ].join('\n');

        const whatsappUrl = 'https://wa.me/8801704915034?text=' + encodeURIComponent(whatsappMessage);

        setFormFeedback(status, 'Opening WhatsApp...', 'success');
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show confirmation dialog after a short delay
        setTimeout(() => {
            showConfirmationDialog();
        }, 1500);

        appointmentForm.reset();
    });

    function showConfirmationDialog() {
        if (!confirmationModal || !confirmationContent) return;

        const confirmButtonsHtml = `
            <h2>Did you send the appointment message?</h2>
            <p>Please confirm if you have successfully sent the appointment details message via WhatsApp.</p>
            <div class="form-actions" style="display: flex; gap: 12px; justify-content: center;">
                <button id="messageSentBtn" class="btn btn-primary" type="button">Yes, Message Sent ✓</button>
                <button id="messageCancelBtn" class="btn btn-secondary" type="button">No, Cancel</button>
            </div>
        `;

        confirmationContent.innerHTML = confirmButtonsHtml;

        const messageSentBtn = document.querySelector('#messageSentBtn');
        const messageCancelBtn = document.querySelector('#messageCancelBtn');

        if (messageSentBtn) {
            messageSentBtn.addEventListener('click', () => {
                showResult(true);
            });
        }

        if (messageCancelBtn) {
            messageCancelBtn.addEventListener('click', () => {
                showResult(false);
            });
        }

        confirmationModal.classList.remove('hidden');
    }

    function showResult(isSuccess) {
        if (!confirmationModal || !confirmationContent) return;

        const title = isSuccess ? 'Booking Confirmed! ✓' : 'Booking Not Completed';
        const message = isSuccess 
            ? 'Your appointment has been booked successfully! We will contact you soon.' 
            : 'Your appointment booking was not completed. Please send the message via WhatsApp to confirm your booking.';
        const className = isSuccess ? 'success' : 'error';

        confirmationContent.innerHTML = `
            <h2>${title}</h2>
            <p>${message}</p>
        `;

        const modalContentDiv = confirmationModal.querySelector('.modal-content');
        if (modalContentDiv) {
            modalContentDiv.classList.remove('success', 'error');
            modalContentDiv.classList.add(className);
        }

        const closeBtn = document.querySelector('#closeConfirmation');
        if (closeBtn) {
            closeBtn.focus();
        }
    }
}

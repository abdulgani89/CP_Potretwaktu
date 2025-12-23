
// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Page Transition Handler
function handlePageTransition(href) {
    // Skip if it's an anchor link or same page
    if (href.startsWith('#') || href === window.location.pathname) {
        return;
    }
    
    // Create transition overlay if not exists
    let overlay = document.querySelector('.page-transition');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'page-transition';
        document.body.appendChild(overlay);
    }
    
    // Activate transition
    overlay.classList.add('active');
    
    // Navigate after transition
    setTimeout(() => {
        window.location.href = href;
    }, 300);
}

// Add transition listeners to all links
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && !link.href.includes('javascript:') && !link.target) {
        const href = link.getAttribute('href');
        
        // Skip external links, anchor links, and email links
        if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
            e.preventDefault();
            handlePageTransition(href);
        }
    }
});

// Handle page load fade-in
window.addEventListener('load', function() {
    document.body.classList.add('page-enter');
    let overlay = document.querySelector('.page-transition');
    if (overlay) {
        overlay.classList.remove('active');
    }
});

// Change Navbar Background on Scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('navbar-scrolled');
    } else {
        document.querySelector('.navbar').classList.remove('navbar-scrolled');
    }
});

function sendWhatsApp(event) {
    event.preventDefault(); // mencegah reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "6288223004545"; // GANTI dengan nomor WA kamu (tanpa +)

    const text = 
        `Halo PotretWaktu Photography 👋%0A%0A` +
        `Nama: ${name}%0A` +
        `Email: ${email}%0A%0A` +
        `Pesan:%0A${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
}
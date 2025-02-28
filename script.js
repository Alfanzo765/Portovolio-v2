document.addEventListener('DOMContentLoaded', function() {
    const welcomeContainer = document.querySelector('.welcome-container');
    const portfolioContainer = document.getElementById('portfolio');

    // Fungsi untuk membuat bintang (hanya di welcome page)
    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        welcomeContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 3000);
    }

    // Buat bintang setiap 100ms (hanya di welcome page)
    setInterval(createStar, 100);

    const welcomeContent = document.querySelector('.welcome-content h1');
    const text = welcomeContent.textContent;
    welcomeContent.textContent = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            welcomeContent.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Handle navbar active state
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });

    // Fungsi untuk membuat partikel (hanya di portofolio page)
    function createParticle() {
        const portfolioSection = document.getElementById('portfolio');
        if (!portfolioSection) return; // Pastikan partikel hanya dibuat di halaman portofolio

        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Atur posisi partikel secara acak dari atas hingga ke bawah halaman
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        particle.style.left = `${Math.random() * viewportWidth}px`;
        particle.style.top = `${Math.random() * viewportHeight}px`;
        portfolioSection.appendChild(particle);

        // Animasi partikel
        const duration = Math.random() * 5 + 3; // Durasi animasi antara 3-8 detik
        const xDirection = Math.random() > 0.5 ? 1 : -1;
        const yDirection = Math.random() > 0.5 ? 1 : -1;

        particle.animate([
            { transform: 'translate(0, 0)' },
            { transform: `translate(${Math.random() * 200 * xDirection}px, ${Math.random() * 200 * yDirection}px)` }
        ], {
            duration: duration * 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        });

        // Hapus partikel setelah beberapa waktu untuk menghindari penumpukan
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // Buat partikel setiap 500ms (hanya di portofolio page)
    setInterval(createParticle, 500);

    // Handle click event untuk masuk ke portofolio
    document.addEventListener('click', function() {
        welcomeContainer.style.display = 'none'; // Sembunyikan welcome page
        portfolioContainer.style.display = 'block'; // Tampilkan portfolio page
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Anda telah terkirim!');
});


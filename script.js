document.querySelectorAll('.accordion-title').forEach(title => {
            title.addEventListener('click', () => {
                const content = title.nextElementSibling;
                const isActive = content.classList.contains('active');

                document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
                document.querySelectorAll('.accordion-title').forEach(t => t.classList.remove('active'));

                if (!isActive) {
                    content.classList.add('active');
                    title.classList.add('active');
                }
            });
        });
function fadeInElement() {
        const element = document.querySelector('.s1');
        element.animate(
            [
                { opacity: 0, transform: 'translateY(20px)' }, // Start state
                { opacity: 1, transform: 'translateY(0)' }     // End state
            ],
            {
                duration: 1500, // 1.5 seconds
                easing: 'ease-in-out', // Smooth timing
                fill: 'forwards' // Maintain end state
            }
        );
    }

    window.addEventListener('load', () => {
        changeBackgroundColor()
        setTimeout(fadeInElement, 100); // Delay in milliseconds
    });
function changeBackgroundColor() {
        document.body.style.transition = 'background-color 0.3s ease';
        document.body.style.background = '#F5F5DC'; // Change to your desired color
    }
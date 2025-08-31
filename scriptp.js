   document.addEventListener('DOMContentLoaded', () => {
        const slidingSection = document.querySelector('.sliding-section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    slidingSection.classList.add('scrolled');
                } else {
                    slidingSection.classList.remove('scrolled');
                }
            });
        }, {
            threshold: 0.2 //  (0.1 means 10% of the section needs to be visible to trigger the animation)
        });

        observer.observe(slidingSection);
    });

    
    document.addEventListener("DOMContentLoaded", function() {
        const progressBars = [
            { id: "progressBar1", width: "70%" },
            { id: "progressBar2", width: "60%" },
            { id: "progressBar3", width: "90%" }
        ];

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = progressBars.find(bar => bar.id === entry.target.id);
                    if (progressBar) {
                        entry.target.style.width = progressBar.width;
                    }
                }
            });
        }, { threshold: 0.1 });

        progressBars.forEach(bar => {
            const element = document.getElementById(bar.id);
            observer.observe(element);
        });
    });

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".scroll-image");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        //1% threshold due to websites padding
        threshold: 0.01
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    images.forEach(image => observer.observe(image));
});

function toggleText(id) {
    var span = document.getElementById(id);
    if (span.style.display == "none") {
        span.style.display = "inline";
    } else {
        span.style.display = "none";
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 

        if (targetElement) {
            const yOffset = -70; 
            const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

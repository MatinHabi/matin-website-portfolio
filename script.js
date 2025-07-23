function isInView(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.top <= (window.innerHeight -200) && rect.bottom >= 0
    );
}

function handleScroll() {
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
        if (isInView(section) || window.innerHeight >= document.body.scrollHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


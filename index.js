const slides = document.querySelectorAll('.slide');
let i=0;


let timerId = setInterval(() => {
    clearActiveClasses();
    slides[i].classList.add('active');
    if (i == 5) i=0; else i++;
}, 3000);
    
for (const slide of slides) {
    let showClick = true;
    slide.addEventListener('click', () => {
        clearInterval(timerId);
        if (showClick) {
            clearActiveClasses();
            slide.classList.add('active');
            showClick=false;
        } 
        else {
            clearActiveClasses();
            showClick=true;
        }
    });

    slide.addEventListener('click', () => {
        console.log("hello");
    });
}


function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}
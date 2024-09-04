function direct(path) {

    gsap.to("#main-container", { 
        duration: 0.8, 
        y: 50, 
        opacity: 0, 
        ease: "power1.in",
        onComplete: () => {
            window.location.href = path
        }
    });

}


document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#main-container", { 
        duration: 1, 
        y: 0, 
        opacity: 1, 
        ease: "power1.out" 
    });



    const nav_about = document.querySelector('#nav-about')
    const nav_project = document.querySelector('#nav-project')
    const nav_contact = document.querySelector('#nav-contact')

    if (!nav_about.classList.contains('current'))
    {
        nav_about.addEventListener('click',() => {
            direct('/')
        })
    }

    if (!nav_project.classList.contains('current'))
    {
        nav_project.addEventListener('click',() => {
            direct('/project-page/project.html')
        })
    }

    if (!nav_contact.classList.contains('current'))
    {
        nav_contact.addEventListener('click',() => {
            direct('/contact-page/contact.html')
        })
    }
});







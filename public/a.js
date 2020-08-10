const navSlide=()=>{
    // alert('hahaha');   
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',()=>{
        // alert('aaaa');
        // nav.classList.remove('nav-links');
        nav.style.transform = translateX(0%)
    })
}

navSlide();
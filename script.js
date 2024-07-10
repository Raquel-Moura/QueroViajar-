function menuShow() {
    let menuMobile = document.querySelector('.menu-toggle-list');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
    } else {
      menuMobile.classList.add('open');
    }
}

window.addEventListener ('scroll', function(){
    let scroll = this.document.querySelector('.scrooll-link')
    scroll.classList.toggle('active', this.window.scrollY > 450)
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

  
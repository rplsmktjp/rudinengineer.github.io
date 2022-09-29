$('.container').hide()
$(document).ready(function() {
    $('.loading-animation').hide()
    $('.container').show()
    $('.nav-link').on('click', function(e) {
        const href = $(this).attr('href')
        const top = $(href)

        $('html').animate({
            scrollTop: top.offset().top - 200
        }, 1000, 'easeInOutExpo')

        e.preventDefault()
    })

    $('.checkbox').on('click', function() {
        const nav = document.querySelector('.container')
        nav.classList.toggle('click')
    })
})

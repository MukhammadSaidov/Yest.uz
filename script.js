/* Restaurant */
$('#res').hover(
    function () {
        $('.bee_img').attr('style', 'transform:rotate(90deg); transition: 700ms;');
    },
    function () {
    $('.bee_img').attr('style', 'transform:rotate(0); transition: 700ms;');
});

/* Flower */
$('#flow').hover(
    function () {
        $('.bee_img').attr('style', 'transform:rotate(50deg); transition: 700ms;');
    },
    function () {
    $('.bee_img').attr('style', 'transform:rotate(0); transition: 700ms;');
});

/* Shop */
$('#shopping').hover(
    function () {
        $('.bee_img').attr('style', 'transform:rotate(-90deg); transition: 700ms;');
    },
    function () {
    $('.bee_img').attr('style', 'transform:rotate(0); transition: 700ms;');
});

/* Courier */
$('#cour').hover(
    function () {
        $('.bee_img').attr('style', 'transform:rotate(-50deg); transition: 700ms;');
    },
    function () {
    $('.bee_img').attr('style', 'transform:rotate(0); transition: 700ms;');
});

/* Present */
$('#present').hover(
    function () {
        $('.bee_img').attr('style', 'transform:rotate(20deg); transition: 700ms;');
    },
    function () {
    $('.bee_img').attr('style', 'transform:rotate(0); transition: 700ms;');
});

/* Shashlik.uz */
$('#shashlik').hover(
    function () {
        $('.bee_img').attr('style', 'transform:rotate(-20deg); transition: 700ms;');
    },
    function () {
    $('.bee_img').attr('style', 'transform:rotate(0); transition: 700ms;');
});



const Top = document.querySelector('.Top_icon')
const Header = document.querySelector('.header')

//OnScroll Offset
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        Top.classList.add('active')
        Header.classList.add('active')
    } else {
        Top.classList.remove('active')
        Header.classList.remove('active')
    }
})

//Top Click
Top.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})

/* Restaurant */
jQuery('#res').hover(function () {
    jQuery('.img_two').attr('style', 'transform:rotate(70deg); transition: 700ms;');
},
function () {
    jQuery('.img_two').attr('style', 'transform:rotate(0); transition: 700ms;');
});

/* Flower */
jQuery('#flow').hover(function () {
    jQuery('.img_two').attr('style', 'transform:rotate(30deg); transition: 700ms;');
},
function () {
    jQuery('.img_two').attr('style', 'transform:rotate(0); transition: 700ms;');
});

/* Shop */
jQuery('#shopping').hover(function () {
    jQuery('.img_two').attr('style', 'transform:rotate(-70deg); transition: 700ms;');
},
function () {
    jQuery('.img_two').attr('style', 'transform:rotate(0); transition: 700ms;');
});

/* Courier */
jQuery('#cour').hover(function () {
    jQuery('.img_two').attr('style', 'transform:rotate(-30deg); transition: 700ms;');
},
function () {
    jQuery('.img_two').attr('style', 'transform:rotate(0); transition: 700ms;');
});

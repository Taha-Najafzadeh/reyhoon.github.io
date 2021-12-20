$('#Email').focus(function () {
    $('#EmailIcon').addClass('SvGFocusColor');
    }).blur(function () 
    {
    $('#EmailIcon').removeClass('SvGFocusColor');

});

$('#Person').focus(function () {
    $('#PersonIcon').addClass('SvGFocusColor');
    }).blur(function () 
    {
    $('#PersonIcon').removeClass('SvGFocusColor');

});
$('#Password').focus(function () {
    $('#PasswordIcon').addClass('SvGFocusColor');
    }).blur(function () 
    {
    $('#PasswordIcon').removeClass('SvGFocusColor');

});

$('#Password2').focus(function () {
    $('#PasswordIcon2').addClass('SvGFocusColor');
    }).blur(function () 
    {
    $('#PasswordIcon2').removeClass('SvGFocusColor');

});

$("#Scrol_svg").click(function() {
    $('html, body').animate({
        scrollTop: $("#Questions").offset().top
    }, 100);
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 100);
 });

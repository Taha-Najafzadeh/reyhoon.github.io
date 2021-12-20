$('#Email').focus(function () {
    $('#EmailIcon').addClass('SvGFocusColor');
    }).blur(function () 
    {
    $('#EmailIcon').removeClass('SvGFocusColor');

});


$('#Password').focus(function () {
    $('#PasswordIcon').addClass('SvGFocusColor');
    }).blur(function () 
    {
    $('#PasswordIcon').removeClass('SvGFocusColor');

});


$('#Person').focus(function () {
    $('#PersonIcon').addClass('SvGFocusColor');
    }).blur(function () 
    {
    $('#PersonIcon').removeClass('SvGFocusColor');
});

$('#Email_up').focus(function () {
    $('#EmailIcon_up').addClass('SvGFocusColor');
    }).blur(function () 
    {
    $('#EmailIcon_up').removeClass('SvGFocusColor');

});

$('#Password_up').focus(function () {
    $('#PasswordIcon_up').addClass('SvGFocusColor');
    }).blur(function () 
    {
    $('#PasswordIcon_up').removeClass('SvGFocusColor');

});
$('#Password2').focus(function () {
    $('#PasswordIcon2').addClass('SvGFocusColor');
    }).blur(function () 
    {
    $('#PasswordIcon2').removeClass('SvGFocusColor');

});

$( document ).ready( function() {
  $( "#signin" ).click( function() {
    $( "#form2" ).hide( 100 );
    $( "#form1" ).show( 100 );
    $("#signin").addClass("active");
    $("#signup").removeClass("active");
  });
});

$( document ).ready( function() {
  $( "#signup" ).click( function() {
    $( "#form1" ).hide( 100 );
    $( "#form2" ).show( 100 );
    $("#signup").addClass("active");
    $("#signin").removeClass("active");
  });
});

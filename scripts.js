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

$("#Scrol_svg").click(function() {
    $('html, body').animate({
        scrollTop: $("#Questions").offset().top
    }, 100);
});

$(window).scroll(function() {
    if($(window).scrollTop() > $("#Scrol_svg").offset().top+$("#Scrol_svg").height()){
      $("#toTop").show();
    }else{
        $("#toTop").hide();
    }
});

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 100);
 });
$( document ).ready( function() {
  $( "#signin" ).click( function() {
    $( "#form2" ).fadeOut(300);
    $( "#form1" ).fadeIn(300);
    $("#signin").addClass("active");
    $("#signup").removeClass("active");
  });
});

$( document ).ready( function() {
  $( "#signup" ).click( function() {
    $( "#form1" ).fadeOut(300);
    $( "#form2" ).fadeIn(300);
    $("#signup").addClass("active");
    $("#signin").removeClass("active");
  });
});


$( document ).ready( function() {
  $( "#button_type_1" ).click( function() {
    $( "#form_input2" ).hide( 100 );
    $( "#form_input1" ).show( 100 );
    $("#button_type_2").addClass("inactive");
    $("#button_type_1").removeClass("inactive");
  });
});

$( document ).ready( function() {
  $( "#button_type_2" ).click( function() {
    $( "#form_input1" ).hide( 100 );
    $( "#form_input2" ).show( 100 );
    $("#button_type_1").addClass("inactive");
    $("#button_type_2").removeClass("inactive");
  });
});


$(function() {
  $(window).scroll(function() {
      if($(window).scrollTop() < $("#Scrol_svg").offset().top+$("#Scrol_svg").height()){
          $("#Account").show();
      }else{
          $("#Account").hide();
      }
  });
});
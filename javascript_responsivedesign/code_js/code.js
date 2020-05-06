
$(document).ready(function(){
    //CONTACT FORM//
    console.log("page js loaded");
  $('.form').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var message = $('#message').val();
    var topic = $("#seltopic");
    $(".error").remove();
    console.log( name + "- name " + email+" - email\n " + message + "- message\n"+ topic.val() + " - topic");
    // NAME
    if (name.length < 2) {
      $("p#ename").html('<span class="error">This field is required</span>');           
    }
    // MESSAGE
    if (message.length < 30) {
      $('p#emessage').html('<span class="error">Minimun 30 letters required</span>');
    }
    //EMAIL
    if (email.length < 2) {
      $('p#eemail').html('<span class="error">This field is required</span>');
    } else {
      var regEx = (/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
      var validEmail = regEx.test(email);
        if (!validEmail) {
        $('p#eemail').html('<span class="error">Enter a valid email</span>');
        }
      } 
    //RADIO BUTTONS
    if($("input[name=gender]:checked").length<=0){
      $('p#etitle').html('<span class="error">Please,choose an option</span>');
    }
    if(topic.val() === "SELECT A TOPIC"){
      $('p#eseltopic').html('<span class="error">Please,select a topic from the list</span>');
      $("p#eseltopic").focus();
    };         
  });
  // BURGER NAV
  console.log("page js loaded");
  $(".burger_nav").on("click",function(){
    console.log("Burger menu is working");
    $("nav ul").toggleClass("open");
    $(".burger_nav").toggleClass ("active");
  });
// SLIDER
  $('#slippry-demo').slippry({
    adaptiveHeight: true,
    transition: 'kenburns', 
    easing: 'linear', 
    continuous: true,
    auto: true,
    start: 1,  
    autoHover: false,
    responsive: true,
    controls: false,
    hideOnEnd: true,
    speed: 900,
  });
});

$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      1000, 
      'linear'
    );

  });

});

/*######################################
              type script 
 ######################################*/
 var typed = new Typed(".auto-type",{
  strings: ["Coding", "Eating", "Sleeping", "studying"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})


/*#################################
      contact error message
###################################*/

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');






function validateName(){
  const name = document.getElementById('contact-name').value;
  if(name.length == 0){
    nameError.innerHTML = "Name required";
    return false;
  }

   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
     nameError.innerHTML = "full name";
     return false;
   }
   nameError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
   return true;
}

function validatePhone() {
  const phone = document.getElementById('contact-phone').value;
  // console.log(phone);
  if(phone.length == 0){
    phoneError.innerHTML = "valid phone number";
    return false;
    // console.log('give a phone no');
  }

  if(phone.length !== 11){
    phoneError.innerHTML = "phone no should be 11 digit";
    return false;
  }
  if(!phone.match(/^[0-9]{11}$/)){
    phoneError.innerHTML = 'only phone number';
    return false;
  }
  phoneError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;

}

function validateEmail(){
  const email = document.getElementById('contact-email').value;

  if(email.length == 0){
    emailError.innerHTML = 'valid email';
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Invalid email';
    return false;
  }
  emailError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}

function validateMessage(){
  const message = document.getElementById('contact-message').value;
  const required = 30;
  const left = required - message.length;
  // console.log(left);
  if(left>0){
    messageError.innerHTML = left + 'more charectars required';
    return false;
  }
  messageError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}

function validateForm(){
  if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'please fix error to send';
    setTimeout(() => {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}
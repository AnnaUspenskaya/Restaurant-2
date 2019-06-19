function validateItems() {
    var phone = document.forms["contactForm"]["phone"].value;
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;


    if (phone == "" || isNaN(phone)) {
        alert("The phone number must be filled in with a number.");
        document.forms["contactForm"]["phone"]
           .parentElement.className = "form-group has-error";
           return false;
    }
    if (name == "") {
        alert("Please, introduce yourself!");
        document.forms["contactForm"]["name"]
           .parentElement.className = "form-group has-error";
           return false;
    }
    if (email == "") {
        alert("Please, enter your email");
        document.forms["contactForm"]["email"]
           .parentElement.className = "form-group has-error";
           return false;
    }
    else{
  thankYou();
  return false;
    }
  }
  function thankYou(){
  var name=document.getElementById('name').value;
  if (name != "") {
    document.getElementById('modalTitle').innerHTML="<h4 style='color:black'>Your contact form has been submitted!</h4>"
    document.getElementById('done').innerText="Thank you, " + name + ". We will contact you within 24 hours";
    return false;
  }
  else {
    document.getElementById('done').innerText="Thank you! We will contact you within 24 hours";
    return false;
  }
}

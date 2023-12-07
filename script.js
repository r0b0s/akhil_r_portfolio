// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");
console.log(header)
window.onscroll = function() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

document.getElementById("mail_button").addEventListener("click", function() {
    var name = document.getElementById("mail_name").value;
    var email = document.getElementById("mail_id").value;
    var subject = document.getElementById("mail_subject").value;
    var details = document.getElementById("mail_details").value;
    var mailto = "mailto:akhilr2326@gmail.com?subject=" + subject + "&body=Name: " + name + "%0AEmail: " + email + "%0AMail Details: " + details;
    document.getElementById("mail_link").setAttribute("href", mailto);
  });

  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);
  function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
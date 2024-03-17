emailjs.init('bLhkURngZoDS7Dl8H')

const btn = document.getElementById('sendButton');

document.getElementById('contact-form')
   .addEventListener('submit', function (event) {
      event.preventDefault();

      btn.value = 'Sending...';

      const serviceID = 'service_bvpu5pn';
      const templateID = 'template_1bgh4hn';

      emailjs.sendForm(serviceID, templateID, this)
         .then(() => {
            btn.value = 'Send Email';
            emptyFields()
            alert('Email sent succesfuly!');
         }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
         });
   });

function emptyFields() {
   document.getElementById("nameInput").value = "";
   document.getElementById("emailInput").value = "";
   document.getElementById("messageInput").value = "";
}
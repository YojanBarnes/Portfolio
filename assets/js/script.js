function toggle() {
    const items = document.querySelectorAll('.nav-links');
    items.forEach(item => {
        item.style.display = item.style.display === 'none' ? 'flex' : 'none';
        
    });
}


// Open and Close Modal Function
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modalContainer");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

});

// Modem Email Function
document.getElementById("contactForm").addEventListener("submit", sendMail);
function sendMail(){

     event.preventDefault();

    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    
    emailjs.send("service_74j4wq1", "template_13ywpm5", parms)
        .then(function(response) {
            alert("Email sent successfully!");
            document.getElementById("contactForm").reset();
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS error:", error);
        });
}


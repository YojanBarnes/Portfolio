Page Link: https://yojanbarnes.github.io/Portfolio/


 
 Interactive Features
1. Responsive Navigation Toggle
   Lines: 1–5

Functionality: Toggles the visibility of navigation links on smaller screens.

Main Function: toggle()

Variables Used:

items → List of elements with class .nav-links

2. Modal Open/Close
Lines: 8–17

Functionality: Opens the modal when clicking the "open" button and closes it when clicking "close".

Event Listeners:

click

Variables Used:

openBtn → Button with ID openModal

closeBtn → Button with ID closeModal

modal → Container with ID modalContainer

3. Contact Form Input Handling
Lines: 19–26

Functionality: Captures and trims the user’s name, email, and message before sending.

Variables Used:

submitBtn → Button with ID submitBtn

name, email, message → Input values from their respective form fields

4. Form Submission via EmailJS
Lines: 29–46

Functionality: Sends form data using the EmailJS API with feedback alerts for success or failure.

Main Function: sendMail()

Variables Used:

parms → Object with name, email, and message

event → Used to prevent the default form submission

5. Form Reset on Success
Lines: 39–40

Functionality: Resets the form fields after a successful email submission.

Method Used:

document.getElementById("contactForm").reset()

)

Page Link : https://yojanbarnes.github.io/Portfolio/

Interactive Features:

1. Responsive Navigation Toggle
Lines: 1–5
Functionality: Shows or hides navigation links when toggled (e.g., on mobile view).

Main Function: 
					toggle()
Variables Used:
					items → Stores the list of elements with class .nav-links



2. Modal Open/Close
Lines: 8–17
Functionality: Opens a modal when clicking the "open" button and closes it with the "close" button.

Event Listeners: 
					click

Variables Used:
				openBtn → Button element with ID openModal
				closeBtn → Button element with ID closeModal
				modal → Modal container element with ID modalContainer



3. Contact Form Input Handling
Lines: 19–26
Functionality: Captures user input for name, email, and message when submitting.
Variables Used:

				submitBtn → Button element with ID submitBtn
   				name, email, message → Input values extracted and trimmed from their respective input fields



4. Form Submission via EmailJS
Lines: 29–46
Functionality: Sends form data using the EmailJS API, with success/failure alerts.

Main Function: 
				sendMail()

Variables Used:
				parms → Object containing name, email, and message values
				event → Prevents the default form submission



5. Form Reset on Success
Lines: 39–40
Functionality: 	Automatically resets the form inputs upon successful email sending.

Method Used:
				document.getElementById("contactForm").reset()

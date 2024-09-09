
//sign up login form handling
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const authCard = document.getElementById('auth-card');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');
    const closeBtn = document.getElementById('close-btn');

    // Event listeners
    loginBtn.addEventListener('click', () => {
        authCard.classList.remove('hidden');
        authCard.style.transform = 'translate(-50%, -50%)';
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
    });

    signupBtn.addEventListener('click', () => {
        authCard.classList.remove('hidden');
        authCard.style.transform = 'translate(-50%, -50%)';
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
    });

    switchToSignup.addEventListener('click', () => {
        authCard.style.transform = 'translate(-50%, -50%)';
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
    });

    switchToLogin.addEventListener('click', () => {
        authCard.style.transform = 'translate(-50%, -50%)';
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        authCard.classList.add('hidden'); // Hide the card
    });
});


// scroll to Up
// script.js

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Adjust this value to set when the button should appear
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    // Smooth scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

//Form data store Contact US
const scriptURL = 'https://script.google.com/macros/s/AKfycbwbdtadzjDm9yncyZS-BttcVc8iWJlfEmohig_0PtuUIXUH0rpGyfELko8H3ctj6kyczw/exec'; // Replace with your actual web app URL
const form = document.getElementById('contact-form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const loadingIndicator = document.getElementById('loading');
  loadingIndicator.style.display = 'block'; // Show loading indicator

  try {
    const formData = new FormData(form);
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        // Update popup content
        form.innerHTML = `
            <div class="form-box">
                <h2>Thank You!</h2>
                <p>Your enquiry has been sent successfully.</p>
                <button style="color: white;
                     background-color: #2c2cff;
                     height: 40px;
                     width: 90px;
                     border-radius: 30px;" id="continue-btn">Continue</button>
            </div>
        `;

         // Add event listener to continue button
         document.getElementById('continue-btn').addEventListener('click', function() {
            // Reset the form fields and close the popup
            enquireForm.reset();
            enquirePopup.style.display = 'none';
        });
    } else {
        throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error!', error.message);
    alert('There was a problem submitting the form.');
  } finally {
    loadingIndicator.style.display = 'none'; // Hide loading indicator
  }
});




//gallery pop up enquire button handling

document.addEventListener('DOMContentLoaded', function() {
    const enquireBtn = document.getElementById('enquire-btn'); // Ensure you have this button in your HTML
    const enquirePopup = document.getElementById('enquire-popup');
    const closePopup = document.getElementById('close-popup');
    const enquiryForm = document.getElementById('enquiry-form');
    const loadingIndicator = document.getElementById('loading'); // Ensure you have a loading indicator

    // Show the popup form when the "Enquire Now" button is clicked
    enquireBtn.addEventListener('click', function() {
        enquirePopup.style.display = 'flex';
    });

    // Hide the popup form when the close button is clicked
    closePopup.addEventListener('click', function() {
        enquirePopup.style.display = 'none';
    });

    // Hide the popup form when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === enquirePopup) {
            enquirePopup.style.display = 'none';
        }
    });

    // Handle form submission
    enquiryForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        loadingIndicator.style.display = 'block'; // Show loading indicator

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzlO3TVa7YzXbW4eOZX57h4_bnU6xsBTczrEXKHmydRWdl8OuBO1sO5ZCp5wvVq1qlB/exec'; // Replace with your actual web app URL

        try {
            const formData = new FormData(enquiryForm);
            const formObject = Object.fromEntries(formData.entries());
            const urlEncodedData = new URLSearchParams(formObject).toString();

            const response = await fetch(scriptURL, {
                method: 'POST',
                body: urlEncodedData,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            if (response.ok) {
                // Update popup content
                enquirePopup.innerHTML = `
                    <div class="form-box">
                        <h2>Thank You!</h2>
                        <p>Your enquiry has been sent successfully.</p>
                        <button id="continue-btn">Continue</button>
                    </div>
                `;

                // Add event listener to continue button
                document.getElementById('continue-btn').addEventListener('click', function() {
                    // Reset the form fields and close the popup
                    enquiryForm.reset();
                    enquirePopup.style.display = 'none';
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error!', error.message);
            alert('There was a problem submitting the form.');
        } finally {
            loadingIndicator.style.display = 'none'; // Hide loading indicator
        }
    });
});






    document.getElementById('profile-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const newName = document.getElementById('name').value;
        const newEmail = document.getElementById('email').value;

        // Update profile logic here
        localStorage.setItem('userName', newName); // Save updated name

        // Optionally, send data to the server to update profile information
        alert('Profile updated successfully!');
    });


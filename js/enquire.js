//for the home page enquire section

document.addEventListener('DOMContentLoaded', function() {
    const enquireBtn = document.getElementById('enquire-btn');
    const enquirePopup = document.getElementById('enquire-popup');
    const closePopup = document.getElementById('close-popup');
    const enquireForm = document.getElementById('enquire-form');
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

    // Handle form submission main top home
    enquireForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        loadingIndicator.style.display = 'block'; // Show loading indicator

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzKCkeqlLghO1XK_4_sg7WGLxBIJZdZUfBzRFEpsOwgK26RLVOnCD1wjDBuC0owh--v/exec'; // Replace with your actual web app URL

        try {
            const formData = new FormData(enquireForm);
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
});


//gallery view more view less handler
document.addEventListener('DOMContentLoaded', function() {
    const viewMoreButton = document.querySelector('.second-gallery #view-more-btn');
    const hiddenCards = document.querySelectorAll('.second-gallery .gallery-grid-card.hidden');
    const section = document.querySelector('.second-gallery');
    const galleryGrid = document.querySelector('.second-gallery .gallery-grid');

    let expanded = false;
    let initialHeight = section.scrollHeight; // Store the initial height of the section

    viewMoreButton.addEventListener('click', function() {
        if (!expanded) {
            // Show all hidden cards
            hiddenCards.forEach(card => card.classList.remove('hidden'));
            galleryGrid.style.opacity = 1;
            viewMoreButton.textContent = 'View Less';

            // Temporarily set height to 'auto' to calculate the new height
            section.style.height = 'auto';
            let newHeight = section.scrollHeight + 'px';

            // Reset the height to '0px' before animating to the new height
            section.style.height = '0px'; 
            requestAnimationFrame(() => {
                section.style.height = newHeight; // Expand to the new height
            });

            expanded = true;
        } else {
            // Hide all additional cards
            hiddenCards.forEach(card => card.classList.add('hidden'));
            galleryGrid.style.opacity = 1;
            viewMoreButton.textContent = 'View More';

            // Calculate the height of the section with only visible content
            let collapsedHeight = section.scrollHeight + 'px';

            // Set the height to the current full height to ensure a smooth collapse
            section.style.height = collapsedHeight; // Use the current height before collapsing
            requestAnimationFrame(() => {
                section.style.height = initialHeight + 'px'; // Collapse to initial height
            });

            // Once the transition is complete, reset the height to fit the content
            section.addEventListener('transitionend', function onTransitionEnd() {
                section.removeEventListener('transitionend', onTransitionEnd);
                section.style.height = initialHeight + 'px'; // Ensure height is set correctly
            }, { once: true });

            expanded = false;
        }

        // Trigger reflow to apply height changes
        section.offsetHeight;
    });

    // Optional: Adjust section height on initial load if needed
    window.addEventListener('load', function() {
        // Set initial height correctly
        section.style.height = initialHeight + 'px';
    });
});
// scripts.js
// scripts.js


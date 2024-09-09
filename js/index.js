document.addEventListener('DOMContentLoaded', function() {
    // View More / View Less functionality
    const viewMoreButton = document.getElementById('view-more-btn');
    const hiddenCards = document.querySelectorAll('.gallery-grid-card.hidden');
    const section = document.querySelector('.image-gallery');
    const galleryGrid = document.querySelector('.gallery-grid');

    let expanded = false;
    let initialHeight = section.scrollHeight;

    viewMoreButton.addEventListener('click', function() {
        if (!expanded) {
            hiddenCards.forEach(card => card.classList.remove('hidden'));
            galleryGrid.style.opacity = 1;
            viewMoreButton.textContent = 'View Less';
            section.style.height = 'auto';
            expanded = true;
        } else {
            hiddenCards.forEach(card => card.classList.add('hidden'));
            galleryGrid.style.opacity = 1;
            viewMoreButton.textContent = 'View More';
            section.style.height = initialHeight + 'px';
            expanded = false;
        }
        section.offsetHeight; // Force reflow
    });


// //enquire number
//     document.getElementById('enquiry-form').addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevent the default form submission

//         var formData = new FormData(this);
//         var xhr = new XMLHttpRequest();
//         xhr.open('POST', 'https://script.google.com/macros/s/AKfycbwMtw1m7-ybSRDyJ7r_D8K6tB8Klk5rbu2fZOxP3B-DPRJRbx8BrXVC0P5yM1mSDcwp/exec', true);

//         xhr.onload = function() {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 // Show the pop-up on success
//                 document.getElementById('popup').classList.add('active');
//             } else {
//                 alert('An error occurred: ' + xhr.statusText);
//             }
//         };

//         xhr.onerror = function() {
//             alert('An error occurred during the transaction');
//         };

//         xhr.send(formData);
//     });

//     // Function to close the pop-up
//     function closePopup() {
//         document.getElementById('popup').classList.remove('active');
//     }


    
    // Enquire Now button functionality
    const enquireButtons = document.querySelectorAll('.enquire-button');
    const popupCard = document.getElementById('popup-card');
    const closePopup = document.getElementById('close-popup');
    const popupImage = document.getElementById('popup-image');
    const popupDescription = document.getElementById('popup-description');
    const form = document.getElementById('enquiry-form');
    const formContainer = document.querySelector('.form-container'); // Make sure this selector matches your actual form container
    const loadingIndicator = document.getElementById('loading'); // Ensure you have a loading indicator
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw-iEUotX4OQ98FPk08GUxVjtysCTchNTha1YuhQ6bjneyeEUbgtK6gLaIIT0SPQ3oa/exec'; // Replace with your actual web app URL
   
    enquireButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest gallery-grid-card to get the image and description
            const card = this.closest('.gallery-grid-card');
            const imageSrc = card.querySelector('.gallery-item img').src;
            const description = card.querySelector('.gallery-item-p').textContent;

            popupImage.src = imageSrc;
            popupDescription.textContent = description;
            popupCard.classList.remove('hidden');
        });
    });

    // Close the pop-up
    closePopup.addEventListener('click', function() {
        popupCard.classList.add('hidden');
    });

    // Close the pop-up when clicking outside of the content
    popupCard.addEventListener('click', function(e) {
        if (e.target === popupCard) {
            popupCard.classList.add('hidden');
        }
    });
     // Handle form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent the default form submission

        loadingIndicator.style.display = 'block'; // Show loading indicator

        try {
            const formData = new FormData(form);
            const formObject = Object.fromEntries(formData.entries());
            const urlEncodedData = new URLSearchParams(formObject).toString();

            const response = await fetch(scriptURL, {
                method: 'POST',
                body: urlEncodedData,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            if (response.ok) {
                // Update popup content
                popupCard.innerHTML = `
                    <div class="form-box">
                        <h2>Thank You!</h2>
                        <p>Your enquiry has been sent successfully.</p>
                        <button style="
                            color: white;
                            background-color: #2c2cff;
                            height: 40px;
                            width: 90px;
                            border-radius: 30px;
                        " id="continue-btn">Continue</button>
                    </div>
                `;

                // Add event listener to continue button
                document.getElementById('continue-btn').addEventListener('click', function() {
                    // Reset the form fields and close the popup
                    form.reset();
                    popupCard.classList.add('hidden');
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error!', error.message);
            alert('There was a problem submitting the form.');
        } finally {
            loadingIndicator.style.display = 'block'; // Hide loading indicator
        }
    });

});




        
       // JavaScript to handle header scroll effects
       window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var mainHeader = document.getElementById('main-header');
        var secondaryHeader = document.getElementById('secondary-header');
        
        if (scrollTop > 100) {
            mainHeader.classList.add('fixed');
            mainHeader.classList.add('scrolled');
            secondaryHeader.classList.add('scrolled'); // Optional: if you want secondary header to change style as well
        } else {
            mainHeader.classList.remove('fixed');
            mainHeader.classList.remove('scrolled');
            secondaryHeader.classList.remove('scrolled'); // Optional: if you want secondary header to revert style
        }
    });
    
  
        

    // img effect
    // script.js

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-item .image');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('open');
                observer.unobserve(entry.target); // Stop observing after the effect is applied
            }
        });
    }, options);

    images.forEach(image => {
        observer.observe(image);
    });
});




//  Effects section
//testemonial

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const gridCards = document.querySelectorAll('.gallery-grid-card');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        gridCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load as well
});

// JavaScript to handle header scroll effects
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var mainHeader = document.getElementById('main-header');
    var secondaryHeader = document.getElementById('secondary-header');
    
    if (scrollTop > 100) {
        mainHeader.classList.add('scrolled');
        secondaryHeader.classList.add('scrolled');
    } else {
        mainHeader.classList.remove('scrolled');
        secondaryHeader.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('videoFrame');
    const videoSrc = 'https://www.youtube.com/embed/xz8DGp9SDb4?autoplay=1&mute=1&controls=1';
    let hasStarted = false;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasStarted) {
                // Load the video when it comes into view for the first time
                iframe.src = videoSrc;
                hasStarted = true; // Mark video as started
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    observer.observe(iframe);
});



///img gallery effect
const itemsPerPage = 9;
let currentPage = 1;

function showPage(page) {
    const gallery = document.querySelector('.image-container');
    const totalImages = gallery.children.length;
    const totalPages = Math.ceil(totalImages / itemsPerPage);
    
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    
    currentPage = page;
    
    Array.from(gallery.children).forEach((img, index) => {
        img.style.display = 'none';
        if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
            img.style.display = 'block';
        }
    });

    document.querySelector('.prev').disabled = currentPage === 1;
    document.querySelector('.next').disabled = currentPage === totalPages;
}

function changePage(direction) {
    showPage(currentPage + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
});
// scripts.js
let currentImageIndex = 0;
const images = document.querySelectorAll('.image-container img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

function openModal(index) {
    currentImageIndex = index;
    modal.style.display = 'block';
    updateModalImage();
}

function closeModal() {
    modal.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateModalImage();
}

function updateModalImage() {
    modalImage.src = images[currentImageIndex].src;
}

// Close the modal if the user clicks outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}






// script.js


window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.pop-up');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate');
        }, index * 200); // Stagger the animation by 200ms for each element
    });
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Create an intersection observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add animation class
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    // Select all images with the image-fade-in class
    const images = document.querySelectorAll('.image-fade-in');
    images.forEach(image => {
        observer.observe(image); // Start observing each image
    });
});

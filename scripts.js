// Event listener for all Download buttons
document.querySelectorAll('a[href="downloads/OLEDBuddyTrial.dmg"]').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        showDisclaimerDialog();
    });
});

// Event listener for the Buy Now button
document.getElementById('buy-btn').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'https://oled.gumroad.com/l/oledbuddy';
});

// Function to show the disclaimer dialog
function showDisclaimerDialog() {
    // Create the modal container
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Create the modal content
    modal.innerHTML = `
        <div class="modal-content">
            <p>By clicking Agree and Download, I acknowledge that OLED Buddy won't be able to prevent wear from occurring to my display, and I take full responsibility for my display health outcomes.</p>
            <button class="btn agree-btn">Agree and Download</button>
            <button class="btn btn-secondary disagree-btn">I do not agree</button>
        </div>
    `;

    // Append modal to the body
    document.body.appendChild(modal);

    // Event listener for the Agree button within the modal
    modal.querySelector('.agree-btn').addEventListener('click', function() {
        // Start the download
        window.location.href = 'downloads/OLEDBuddyTrial.dmg';
        closeDisclaimerDialog();
    });

    // Event listener for the Disagree button within the modal
    modal.querySelector('.disagree-btn').addEventListener('click', function() {
        closeDisclaimerDialog();
    });

    // Function to close the modal
    function closeDisclaimerDialog() {
        document.body.removeChild(modal);
    }
}

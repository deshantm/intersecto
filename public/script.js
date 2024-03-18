// Basic functionality for the contact form
document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    // Here you would normally handle form submission, like sending data to a server
    // For now, we'll just log to the console
    console.log('Form submitted!');

    // You might want to provide feedback to the user or clear the form
    this.reset();
});


// Function to expand the textarea
function autoExpand(field) {
    // Reset field height
    field.style.height = 'inherit';

    // Get the computed styles for the element
    var computed = window.getComputedStyle(field);

    // Calculate the height
    var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                 + parseInt(computed.getPropertyValue('padding-top'), 10)
                 + field.scrollHeight
                 + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                 + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';
}

// Event listener for input on textarea
document.addEventListener('input', function (event) {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(event.target);
}, false);

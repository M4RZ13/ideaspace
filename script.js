document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var question1 = document.getElementById('question1').value;
    var question2 = document.getElementById('question2').value;

    if (email && name && phone && question1 && question2) {
        // Here you can add code to handle the form submission, like sending data to a server
        alert('Thank you for your submission!');
    } else {
        alert('Please fill in all fields.');
    }
});

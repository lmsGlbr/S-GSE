function validateForm() {
    // Get consent input
    let consent = document.querySelector('input[name="consent"]:checked');
    
    // Check if consent is given
    if (!consent || consent.value === "no") {
        alert("Du måste samtycka för att delta i undersökningen.");
        return false;
    }

    // Additional validation can be added here

    return true; // Allow form submission if valid
}

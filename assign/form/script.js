function submitForm() {
    const form = document.getElementById("survey-form");
    if (form.checkValidity()) {
        // Get the form values
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderElements = document.querySelectorAll("input[name='gender']:checked");
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        // Create the popup content
        let popupContent = `<p><strong>First Name:</strong> ${firstName}</p>`;
        popupContent += `<p><strong>Last Name:</strong> ${lastName}</p>`;
        popupContent += `<p><strong>Date of Birth:</strong> ${dob}</p>`;
        popupContent += `<p><strong>Country:</strong> ${country}</p>`;
        popupContent += "<p><strong>Gender:</strong> ";
        if (genderElements.length > 0) {
            for (const gender of genderElements) {
                popupContent += `${gender.value}, `;
            }
            popupContent = popupContent.slice(0, -2); // Remove the last comma and space
        } else {
            popupContent += "N/A";
        }
        popupContent += "</p>";
        popupContent += `<p><strong>Profession:</strong> ${profession}</p>`;
        popupContent += `<p><strong>Email:</strong> ${email}</p>`;
        popupContent += `<p><strong>Mobile Number:</strong> ${mobile}</p>`;

        // Display the popup with the form submission
        document.getElementById("popup-content").innerHTML = popupContent;
        document.getElementById("popup").style.display = "block";

        // Reset the form
        form.reset();
    } else {
        alert("Please fill in all required fields.");
    }
}

function resetForm() {
    const form = document.getElementById("survey-form");
    form.reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

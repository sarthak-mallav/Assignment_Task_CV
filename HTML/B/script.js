function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const gender = Array.from(genderCheckboxes).map(checkbox => checkbox.value).join(", ");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    const popupContent = `
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Date of Birth:</b> ${dob}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Profession:</b> ${profession}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile Number:</b> ${mobile}</p>
    `;

    document.getElementById("popup-content").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

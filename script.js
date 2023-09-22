document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const passwordLengthInput = document.getElementById("passwordLength");
    const passwordDisplay = document.getElementById("passwordDisplay");

    generateButton.addEventListener("click", function () {
        const passwordLength = parseInt(passwordLengthInput.value);
        const generatedPassword = generatePassword(passwordLength);
        passwordDisplay.textContent = "Generated Password: " + generatedPassword;
    });

    function generatePassword(length = 12) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(randomIndex);
        }
        return password;
    }
});

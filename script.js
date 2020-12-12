var generateBtn = document.querySelector("#generate");



function generatePW() {
    var characters = "";
    var lowerCase = confirm("Would you like to include lowercase letters?");
    if(lowerCase === true) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    var upperCase = confirm("Would you like to include uppercase letters?");
    if(upperCase === true) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    var numbers = confirm("Would you like to include numbers?")
    if(numbers === true) {
        characters += "1234567890";
    }
    var symbols = confirm("Would you like to include symbols?");
    if(symbols === true) {
        characters += "~!@#$%^&*()_+[]{}-=\\|;,.<>/\"";
    }
    var pwLength = prompt("How many characters would you like to make up your password?");
    if(pwLength < 8 || pwLength > 128) {
        alert("Password must be greater than 8 characters and less that 128");
        return "";
    }
    if(isNaN(pwLength)) {
        alert("Password length must be a number");
    }
    var password = "";
    for (var i = 0; i < pwLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

function renderPW() {
    var generatedPW = generatePW();
    var pwText = document.querySelector("#pw");
    pwText.value = generatedPW;
}

generateBtn.addEventListener("click", renderPW);



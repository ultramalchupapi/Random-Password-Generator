const inputBox = document.getElementById('input');
const passwordLength = document.getElementById('password-length');


function generateRandom(){
    let length = 6;
    length  = passwordLength.value;

    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numerics = '1234567890';
    const specialCase = '!@#%&*+_/~';
    const all = upperCase + lowerCase + numerics + specialCase;

    let password = upperCase[Math.floor(Math.random() * (upperCase.length - 1))];
    password += lowerCase[Math.floor(Math.random() * (lowerCase.length - 1))];
    password += numerics[Math.floor(Math.random() * (numerics.length - 1))];
    password += specialCase[Math.floor(Math.random() * (numerics.length - 1))];

    while(password.length < length){
        password += all[Math.floor(Math.random() * (all.length - 1))];
    }
    inputBox.value = password;

}

function copyPassword(){
    navigator.clipboard.writeText(inputBox.value)
}


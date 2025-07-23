const passwordOne = document.getElementById("rectangleOne")
const passwordTwo = document.getElementById("rectangleTwo")
const buttonEl = document.getElementById("generatePasswords")
const copyRandomPasswordOne = document.getElementById("copyRandomPasswordOne")
const copyRandomPasswordTwo = document.getElementById("copyRandomPasswordTwo")

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
buttonEl.addEventListener("click", function() {
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    let passwordLength = 15
    for (let i = 0; i < passwordLength; i++) {
        let randomNumberOne = Math.floor (Math.random() * characters.length)//0-0,999
        let randomNumberTwo = Math.floor (Math.random() * characters.length)//0-0,999
        passwordOne.textContent += characters[randomNumberOne]
        passwordTwo.textContent += characters[randomNumberTwo]
    }
} )

copyRandomPasswordOne.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordOne.textContent);
    // Alert the copied text
    alert("Copied the text: " + passwordOne.textContent);
})

copyRandomPasswordTwo.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordTwo.textContent);
    // Alert the copied text
    alert("Copied the text: " + passwordTwo.textContent);
})




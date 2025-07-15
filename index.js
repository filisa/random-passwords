let passwordOne = document.getElementById("rectangleOne")
let passwordTwo = document.getElementById("rectangleTwo")


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
function generatePasswords() {
    let passwordLength = 15
    for (let i = 0; i < passwordLength; i++) {
        let randomNumberOne = Math.floor (Math.random() * characters.length)//0-0,999
        let randomNumberTwo = Math.floor (Math.random() * characters.length)//0-0,999
        passwordOne.textContent += characters[randomNumberOne]
        passwordTwo.textContent += characters[randomNumberTwo]
    }
}



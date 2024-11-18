function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "a THIRD YEAR",
    "a BSIS STUDENT",
    "FROM TUP MANILA"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

window.addEventListener("load", function() {
    // Show the loading screen for 5 seconds
    setTimeout(function() {
        // Add fade-out class to the loading screen
        document.querySelector('.loading-page').classList.add('fade-out');

        // After fade-out animation (1 second), hide the loading screen and show the portfolio content
        setTimeout(function() {
            document.querySelector('.loading-page').style.display = 'none';
            document.getElementById('').style.display = 'block'; // Show the portfolio content
        }, 1000); // Wait for 1 second for the fade-out effect
    }, 1000); 
});

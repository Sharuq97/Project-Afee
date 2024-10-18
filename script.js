// activating the login.
// username and password is from html
function login() { 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // login check
    if (username === "AfreenFarhana" && password === "Heidi2001") {
        document.getElementById("login-form").style.display = "none";

        //audio part
        const audio = document.getElementById("remo");
        audio.play();
        
        setTimeout(() => {
        document.getElementById("message").classList.remove("hidden");
        displayAge();
        createBalloons();
        createConfetti();

    }, 8000);

    } else {
        alert("Incorrect username or password. Try again!")
    }
}

//age
function displayAge() {
    const birthDate = new Date("2001-11-21");
    const today = new Date("2024-11-21");
    let age = today.getFullYear() - birthDate.getFullYear();

    document.getElementById("age").textContent = `Once again Happy ${age}rd Birthday my dearest! 🎉`
}

//balloons
function createBalloons() {
    const balloonsContainer = document.getElementById("balloons");
    for (let i = 0; i < 1000; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw"; //random position
        balloon.style.animationDuration = Math.random() * 5 + 3 + "s"; //random duration
        balloonsContainer.appendChild(balloon);
    }
}

//confetti
function createConfetti() {
    const confettiContainer = document.getElementById("confetti");
    for (let i = 0; i < 5000; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confettiContainer.appendChild(confetti);
    }
}
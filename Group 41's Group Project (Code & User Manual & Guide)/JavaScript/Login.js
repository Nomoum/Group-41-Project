async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (!username || !password) {
        document.getElementById("message").textContent = "Please fill in both fields.";
        return;
    }
    let hashedPassword = await hashPassword(password);
    localStorage.setItem(username, hashedPassword);
    document.getElementById("message").textContent = "User registered successfully!";
}

async function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (!username || !password) {
        document.getElementById("message").textContent = "Please fill in both fields.";
        return;
    }
    let storedPassword = localStorage.getItem(username);
    let hashedPassword = await hashPassword(password);
    if (storedPassword && storedPassword === hashedPassword) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("homeContent").style.display = "block";
        //document.getElementById("home_navbar").style.display = "block";
        //document.getElementById("home_navbar").style.textAlign = "center";
    } else {
        document.getElementById("message").textContent = "Invalid credentials.";
    }
}

function logout() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("homeContent").style.display = "none";
    //document.getElementById("home_navbar").style.display = "none";
}
window.onload = function() {
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const signupBtn = document.getElementById("signup-btn");

    if (!loginForm) {
        console.error("Elemento con ID 'login-form' non trovato.");
        return;
    }

    if (!emailInput || !passwordInput || !signupBtn) {
        console.error("Uno o più elementi non trovati.");
        return;
    }

    // Gestione del passaggio alla registrazione
    signupBtn.addEventListener("click", function() {
        window.location.href = "signup.html";  // Cambia il percorso se necessario
    });

    // Gestione del login
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Evita il ricaricamento della pagina

        const email = emailInput.value;
        const password = passwordInput.value;

        // Semplice validazione
        if (!email || !password) {
            alert("Per favore inserisci tutti i campi.");
            return;
        }

        // Recupera i dati dell'utente dal localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert("Login avvenuto con successo!");
            window.location.href = "album.html";  // Cambia il percorso se necessario
        } else {
            alert("Credenziali non valide.");
        }
    });
};

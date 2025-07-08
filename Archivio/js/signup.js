window.onload = function() {
    const signupForm = document.getElementById("signup-form");
    const backToLoginBtn = document.getElementById("back-to-login");

    if (!signupForm) {
        console.error("Elemento con ID 'signup-form' non trovato.");
        return;
    }

    if (!backToLoginBtn) {
        console.error("Elemento con ID 'back-to-login' non trovato.");
        return;
    }

    // Gestione del ritorno al login
    backToLoginBtn.addEventListener("click", function() {
        window.location.href = "login.html";  // Cambia il percorso 
    });

    // Gestione della registrazione
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Evita il ricaricamento della pagina

        const username = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        // Semplice validazione
        if (!username || !email || !password) {
            alert("Per favore inserisci tutti i campi.");
            return;
        }

        // Crea un oggetto utente
        const newUser = {
            username: username,
            email: email,
            password: password
        };

        // Salva l'utente nel localStorage
        localStorage.setItem("user", JSON.stringify(newUser));

        alert("Registrazione avvenuta con successo!");
        window.location.href = "login.html";  // Cambia il percorso se necessario
    });
};

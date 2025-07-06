document.addEventListener("DOMContentLoaded", () => {
    const btnApriModale = document.getElementById("btn-acquistopack"); // Bottone per aprire la modale
    const btnConfermaAcquisto = document.getElementById("btn-acquista-figurine"); // Bottone per confermare acquisto
    const loader = document.getElementsByClassName("loader")[0]; 
    const modaleAcquistopack = document.getElementById("modale-acquistopack"); // Div della modale
    const closeSpan = modaleAcquistopack
        ? modaleAcquistopack.querySelector(".close")
        : null; // X per chiudere la modale

    // Controlli di sicurezza per verificare che gli elementi esistano
    if (!btnApriModale)
        console.warn("Bottone 'btn-acquistopack' non trovato in HTML.");
    if (!btnConfermaAcquisto)
        console.warn("Bottone 'btn-acquista-figurine' non trovato in HTML.");
    if (!modaleAcquistopack)
        console.warn("Elemento 'modale-acquistopack' non trovato in HTML.");

    /**
     * Funzione per aprire la modale
     */
    function apriModale() {
        if (modaleAcquistopack) modaleAcquistopack.style.display = "flex";
    }

    /**
     * Funzione per chiudere la modale
     */
    function chiudiModale() {
        if (modaleAcquistopack) modaleAcquistopack.style.display = "none";
        if (modaleAcquistopack.dataset.figurineCaricate === "yes"){
            aggiornaAlbumInHtml([], "nuove-figurine", false);
            modaleAcquistopack.dataset.figurineCaricate = "no";
            btnConfermaAcquisto.style.display = "block";
        }
    }

    // Quando clicco sul pulsante "Acquista Pacchetti", apro la modale
    if (btnApriModale) {
        btnApriModale.addEventListener("click", apriModale);
    }

    // Quando clicco sulla "X", chiudo la modale
    if (closeSpan) {
        closeSpan.addEventListener("click", chiudiModale);
    }

    // Quando clicco fuori dalla modale, chiudo la modale
    window.addEventListener("click", (event) => {
        if (event.target === modaleAcquistopack) {
            chiudiModale();
        }
    });

    // Quando clicco su "Conferma Acquisto" nella modale
    if (btnConfermaAcquisto) {
        btnConfermaAcquisto.addEventListener("click", async () => {
            try {
                // Verifica se la funzione eseguiAcquisto() esiste
                if (typeof eseguiAcquisto === "function") {
                    btnConfermaAcquisto.style.display = "none";
                    loader.style.display = "block";

                    const nuoveFigurine = await eseguiAcquisto();
                    loader.style.display = "none";
                    aggiornaAlbumInHtml(nuoveFigurine, "nuove-figurine");
                    modaleAcquistopack.dataset.figurineCaricate = "yes";
                    
                } else {
                    console.warn(
                        "eseguiAcquisto() non è definita. Assicurati che gestionefigurine.js sia caricato."
                    );
                }
            } catch (error) {
                console.error("Errore durante l'acquisto:", error);
                alert("Errore durante l'acquisto del pacchetto!");
            }
        });
    }
});

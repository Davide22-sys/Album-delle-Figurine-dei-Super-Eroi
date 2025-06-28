/* popolazione dinamica del numero dei crediti presente nella navbar */
function aggiornaCreditiVisualizzati(crediti) {
    const creditiElem = document.querySelector(".ncrediti");
    if (creditiElem) {
        creditiElem.textContent = crediti.toString();
    }
}
window.addEventListener("load", () => { 
    //prendiamo i crediti dell'utente e li scriviamo subito nella pagina
    const crediti = getCurrentUserItem("numberCredits");
    aggiornaCreditiVisualizzati(crediti);

    //codice per rendere icona + interattiva con rimando all'acquisto
    const buyIcon = document.querySelector(".buy-icon");
    if (buyIcon) {
        buyIcon.addEventListener("click", () => {
            window.location.href = "crediti.html";
        })
    }

    const btnMobile = document.querySelector("#btn-mobile-menu");
    const navSection = document.querySelector(".navbar > nav");
    
    btnMobile.addEventListener("click", () => {
        // Mostra la navSection se era nascosta, nascondila se era visibile
        if ( navSection.style.display === "none" ) {
            navSection.style.display = "flex";
            return;
        }
        navSection.style.display = "none";
    });
})

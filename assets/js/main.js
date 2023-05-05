function calc() {
    // Aktivität
    let aktivitat = document.querySelector("#optionen");
    let selectedAkt = aktivitat.value;
    console.log(selectedAkt);

    // Maße
    let grosse = document.querySelector("#groesse").value;
    let alter = document.querySelector("#alter").value;
    let gewicht = document.querySelector("#gewicht").value;

    // Output-Felder
    let grundumsatzOutputKcal = document.querySelector(".output-grund");
    let gesamtumsatzOutputKcal = document.querySelector(".output-gesamt");
    let grundumsatzOutputKj = document.querySelector(".output-kj-grund");
    let gesamtumsatzOutputKj = document.querySelector(".output-kj-gesamt");

    // Geschlecht
    let geschlechtFrau = document.querySelector("#frau").checked;
    let geschlechtMann = document.querySelector("#mann").checked;    console.log(alter, grosse, gewicht);

    if (geschlechtFrau) {
        let grundumsatz = Number((66.47 +(13.7*gewicht) + (5*grosse) - (6.8 * alter))*selectedAkt).toFixed(1);
        console.log(grundumsatz);
        gesamtumsatzOutputKcal.innerHTML = Number((66.47 +(13.7*gewicht) + (5*grosse) - (6.8 * alter))*selectedAkt).toFixed(1);
        grundumsatzOutputKcal.innerHTML = Number((66.47 +(13.7*gewicht) + (5*grosse) - (6.8 * alter))).toFixed(1);
        grundumsatzOutputKj.innerHTML = Number((66.47 +(13.7*gewicht) + (5*grosse) - (6.8 * alter))*4.184).toFixed(1);
        gesamtumsatzOutputKj.innerHTML = Number(((66.47 +(13.7*gewicht) + (5*grosse) - (6.8 * alter))*selectedAkt)*4.184).toFixed(1);

    } else {
        let grundumsatz = Number((655.1 +(9.6*gewicht) + (1.8*grosse) - (4.7 * alter))*selectedAkt).toFixed(1);
        console.log(grundumsatz);
        gesamtumsatzOutputKcal.innerHTML = Number((655.1 +(9.6*gewicht) + (1.8*grosse) - (4.7 * alter))*selectedAkt).toFixed(1);
        grundumsatzOutputKcal.innerHTML = Number((655.1 +(9.6*gewicht) + (1.8*grosse) - (4.7 * alter))).toFixed(1);
        grundumsatzOutputKj.innerHTML = Number((655.1 +(9.6*gewicht) + (1.8*grosse) - (4.7 * alter))*4.184).toFixed(1);
        gesamtumsatzOutputKj.innerHTML = Number(((655.1 +(9.6*gewicht) + (1.8*grosse) - (4.7 * alter))*4.184)*selectedAkt).toFixed(1);
}
}
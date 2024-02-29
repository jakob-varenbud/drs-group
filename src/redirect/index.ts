// Abrufen der Browsersprache des Benutzers
const lang = navigator.language;

// Überprüfen, ob der Cookie für die deutsche Umleitung nicht gesetzt ist UND die Sprache auf Deutsch eingestellt ist
if (!$.cookie('language-de-redirect-cookie') && lang.indexOf('de') !== -1) {
  const date = new Date(); // Erstellen eines neuen Datumsobjekts
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // Setzen des Ablaufdatums des Cookies auf 24 Stunden in der Zukunft
  $.cookie('language-de-redirect-cookie', true, { expires: date }); // Setzen des Cookies, um zu verhindern, dass die Umleitung wiederholt wird
  window.location.href = 'https://drs-staging1.webflow.io/de'; // Umleitung des Benutzers zur deutschen Homepage
} else {
  // Wenn die Browsersprache nicht Deutsch ist oder der Cookie bereits gesetzt wurde, leiten Sie den Benutzer zur englischen Seite um
  if (!$.cookie('language-en-redirect-cookie')) {
    const date = new Date(); // Erstellen eines neuen Datumsobjekts
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // Setzen des Ablaufdatums des Cookies auf 24 Stunden in der Zukunft
    $.cookie('language-en-redirect-cookie', true, { expires: date }); // Setzen des Cookies für die englische Umleitung
  }
  window.location.href = 'https://drs-staging1.webflow.io/en'; // Umleitung des Benutzers zur englischen Homepage
}

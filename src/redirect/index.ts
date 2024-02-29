// Abrufen der Browsersprache des Benutzers
const lang = navigator.language;

// Überprüfen, ob der deutsche Cookie gesetzt wurde
if ($.cookie('language-de-redirect-cookie')) {
  // Wenn der deutsche Cookie gesetzt wurde, dann entsprechend auf /de umleiten
  window.location.href = 'https://drs-staging1.webflow.io/de';
}
// Überprüfen, ob der englische Cookie gesetzt wurde
else if ($.cookie('language-en-redirect-cookie')) {
  // Wenn der englische Cookie gesetzt wurde, dann entsprechend auf /en umleiten
  window.location.href = 'https://drs-staging1.webflow.io/en';
}
// Wenn der Cookie nicht gesetzt wurde, dann anhand der navigator.language (const lang) prüfen und Redirection-Cookie setzen - ansonsten auf /en umleiten
else {
  // Prüfen, ob lang mit 'de' beginnt
  if (lang.startsWith('de')) {
    // Wenn ja, setzen des Cookies
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // Setzen des Ablaufdatums auf 24 Stunden in die Zukunft
    $.cookie('language-de-redirect-cookie', true, { expires: date });
    window.location.href = 'https://drs-staging1.webflow.io/de';
  }
  // Prüfen, ob lang mit 'en' beginnt
  else if (lang.startsWith('en')) {
    // Wenn ja, setzen des Cookies
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // Setzen des Ablaufdatums auf 24 Stunden in die Zukunft
    $.cookie('language-en-redirect-cookie', true, { expires: date });
    window.location.href = 'https://drs-staging1.webflow.io/en';
  }
  // Wenn nichts davon zutrifft, auf /en umleiten
  else {
    window.location.href = 'https://drs-staging1.webflow.io/en';
  }
}

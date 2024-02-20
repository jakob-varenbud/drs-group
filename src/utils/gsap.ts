import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function startSequentielleAnimation() {
  const tl = gsap.timeline();

  // Verwende fromTo für #hero-heading, um von links mit einer Opazität von 0 zu starten und dann ins Bild zu "fahren"
  tl.fromTo(
    '#hero-heading',
    {
      x: '-100%', // Startet von 100% links außerhalb des Bildschirms
      opacity: 0, // Startet mit einer Opazität von 0
    },
    {
      x: '0%', // Endposition (normalerweise ist das die Standardposition)
      opacity: 1, // Endet mit einer Opazität von 1
      duration: 0.75,
    }
  )
    // Verwende fromTo für #sub-hero, um leicht nach oben zu "sliden" und dabei an Opazität zu gewinnen
    .fromTo(
      '#sub-hero',
      {
        y: '20%', // Startet leicht nach oben verschoben
        opacity: 0, // Startet mit einer Opazität von 0
      },
      {
        y: '0%', // Bewegt sich zurück in die normale Position
        opacity: 1, // Endet mit einer Opazität von 1
        duration: 0.75,
        ease: 'power1.out',
      },
      '-=0.25' // Fügt eine Verzögerung nach der vorherigen Animation hinzu
    )
    // Fortsetzung deiner Timeline wie zuvor
    .to('#breadcrumb-component', { duration: 1, opacity: 1 }, '-=0.2')
    .to('#navbar-component', { duration: 1, opacity: 1 }, '<') // Beginnt gleichzeitig mit der vorherigen Animation
    .to('#hero-video', { duration: 3, opacity: 1, ease: 'power2.out' }, '-=0.2');
}

export function siegelStagger() {
  gsap.to('.logo2_logo', {
    scrollTrigger: {
      trigger: '#section_logo2', // Element, das die Animation auslöst
      start: 'top center', // Startet die Animation, wenn der oberen Rand von #section_logo2 den Mittelpunkt des Viewports erreicht
      end: 'bottom center', // Optional: Definiert das Ende der ScrollTrigger-Überwachung
      toggleActions: 'play none none none', // Definiert, was passiert, wenn die ScrollTrigger-Bedingungen erfüllt sind
      // play: startet die Animation
      // none: definiert keine Aktion für das Verlassen des Triggers, Wiederholen oder Rückwärtsbewegung
    },
    duration: 0.5, // Dauer der Animation in Sekunden
    opacity: 1, // Ziel-Opacity
    ease: 'power1.inOut', // Art des Easings
    stagger: 0.1, // Verzögerung zwischen den Animationen jedes Links
  });
}

export function carousel() {
  gsap.fromTo(
    '#modularplattform-component',
    {
      opacity: 0, // Startet mit einer Opazität von 0
      y: 20, // Startet leicht nach unten verschoben (optional, falls gewünscht)
    },
    {
      scrollTrigger: {
        trigger: '#section_modularplattform', // Element, das die Animation auslöst
        start: 'top center', // Startet die Animation, wenn der obere Rand von #section_modularplattform den Mittelpunkt des Viewports erreicht
      },
      y: 0, // Bewegt sich zurück in die normale Position
      opacity: 1, // Endet mit einer Opazität von 1
      duration: 0.75,
      ease: 'power1.out',
    }
  );
}

export function timeline() {
  gsap.to('#timeline-item', {
    scrollTrigger: {
      trigger: '#section_stats52', // Das Element, das den ScrollTrigger auslöst
      start: 'top center', // Beginnt die Animation, wenn der obere Rand von #section_stats52 den Mittelpunkt des Viewports erreicht
      end: 'bottom center', // Optional: Definiert das Ende der ScrollTrigger-Überwachung
      toggleActions: 'play none none none', // Definiert, was passiert, wenn die ScrollTrigger-Bedingungen erfüllt sind
    },
    duration: 0.75,
    opacity: 1,
    ease: 'power1.inOut',
    stagger: 0.2, // Verzögerung zwischen den Animationen jedes Elements
  });
}

export function sustainableSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section_sustainable', // Das Element, das den ScrollTrigger auslöst
      start: 'top center', // Startet die Animation, wenn der obere Rand von #section_sustainable den Mittelpunkt des Viewports erreicht
      end: 'bottom center', // Optional: Definiert das Ende der ScrollTrigger-Überwachung
      toggleActions: 'play none none none', // Definiert, was passiert, wenn die ScrollTrigger-Bedingungen erfüllt sind
    },
  });

  // Füge Animationen zur Timeline hinzu
  tl.from('#sustainable-component_upper-row', {
    opacity: 0,
    y: 20,
    ease: 'power1.inOut',
  })
    .from('#sustainable-component_heading-wrap', {
      opacity: 0,
    })
    .from(
      '#sustainable-component_lower-row',
      {
        opacity: 0,
        y: -20,
        ease: 'power1.inOut',
      },
      '-=0.25'
    ) // Startet gleichzeitig mit der vorherigen Animation, mit einer leichten Überlappung
    .to('#sustainable-component_heading-wrap', {
      opacity: 1,
      ease: 'power1.Out',
      duration: 1,
    })
    .to(
      '#sustainable-component_upper-row',
      {
        duration: 2,
        opacity: 1,
        y: 0,
        ease: 'power1.out', // Tippfehler korrigiert von 'power2.oupt' zu 'power2.out'
      },
      '-=0.25'
    )
    .to(
      '#sustainable-component_lower-row',
      {
        duration: 3,
        opacity: 1,
        y: 0,
        ease: 'power1.Out',
      },
      '-=0.5'
    );
}

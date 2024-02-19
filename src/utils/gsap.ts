import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function startSequentielleAnimation() {
  const tl = gsap.timeline();

  tl.to('#hero-heading', { duration: 0.5, opacity: 1 })
    .to('#sub-hero', { duration: 0.5, opacity: 1 }, '+=0.1')
    .to('#breadcrumb-component', { duration: 1, opacity: 1 }, '+=0.1')
    .to('#navbar-component', { duration: 1, opacity: 1 }, '<')
    .to('#hero-video', { duration: 3, opacity: 1, ease: 'power2.out' }, '+=0.1');
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

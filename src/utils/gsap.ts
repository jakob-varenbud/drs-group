import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Registriere das Plugin
gsap.registerPlugin(ScrollToPlugin);

export function startSequentielleAnimation() {
  const tl = gsap.timeline();

  tl.to('#hero-heading', { duration: 0.5, opacity: 1 })
    .to('#sub-hero', { duration: 0.5, opacity: 1 }, '+=0.1')
    .to('#breadcrumb-component', { duration: 0.5, opacity: 1 }, '+=0.1')
    .to('#navbar-component', { duration: 0.5, opacity: 1 }, '+=0.1')
    .to('#hero-video', { duration: 3, opacity: 1 }, '+=0.1');
}

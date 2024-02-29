import { startSequentielleAnimation } from './utils/gsap';
import { siegelStagger } from './utils/gsap';
import { carousel } from './utils/gsap';
import { timeline } from './utils/gsap';
import { sustainableSection } from './utils/gsap';
import { initializeMapbox } from './utils/Mapbox';

document.addEventListener('DOMContentLoaded', () => {
  startSequentielleAnimation();
  siegelStagger();
  carousel();
  timeline();
  sustainableSection();
  initializeMapbox();
});

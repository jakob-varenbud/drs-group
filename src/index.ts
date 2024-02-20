import { initializeMapbox } from '$utils/Mapbox.ts';

import { startSequentielleAnimation } from './utils/gsap';
import { siegelStagger } from './utils/gsap';
import { carousel } from './utils/gsap';
import { timeline } from './utils/gsap';
import { sustainableSection } from './utils/gsap';

document.addEventListener('DOMContentLoaded', () => {
  startSequentielleAnimation();
  siegelStagger();
  carousel();
  timeline();
  sustainableSection();
  p;
  initializeMapbox();
});

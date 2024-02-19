import { initializeMapbox } from '$utils/Mapbox.ts';

import { startSequentielleAnimation } from './utils/gsap';
import { siegelStagger } from './utils/gsap';
import { carousel } from './utils/gsap';

document.addEventListener('DOMContentLoaded', () => {
  startSequentielleAnimation();
  siegelStagger();
  carousel();
  initializeMapbox();
});

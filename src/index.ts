import { initializeMapbox } from '$utils/Mapbox.ts';

import { startSequentielleAnimation } from './utils/gsap';
import { siegelStagger } from './utils/gsap';

document.addEventListener('DOMContentLoaded', () => {
  startSequentielleAnimation();
  siegelStagger();
  initializeMapbox();
});

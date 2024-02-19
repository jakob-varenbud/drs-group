import { initializeMapbox } from '$utils/Mapbox.ts';

import { startSequentielleAnimation } from './utils/gsap';

document.addEventListener('DOMContentLoaded', () => {
  startSequentielleAnimation();
  initializeMapbox();
});

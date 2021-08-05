import { trigger, transition, state, animate, style, keyframes, useAnimation, query, animateChild, group, stagger } from '@angular/animations';
import { fadeInAnimation } from '../../../shared/animations/animation';

export const lessonAnimation = trigger('lessonAnimation', [
  transition(':enter', [
    useAnimation(fadeInAnimation, {
      params: {
        duration: '1000ms'
      }
    })
  ]),
]);


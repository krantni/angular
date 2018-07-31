import {  trigger,  state,  style,  animate,  transition, group} from '@angular/animations';

export const animateRecipeOpenClose = trigger('close', [
  state('active', style({opacity: 1, transform: 'translateX(0)'})),
  transition('void => *', [
    style({transform: 'translateX(-100%)', opacity: 0}),
    animate('1s ease', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ])
]);


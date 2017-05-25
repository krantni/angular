import {  trigger,  state,  style,  animate,  transition, group} from '@angular/animations';

export const animateJob = trigger('initState', [
  state('active', style({opacity: 1, transform: 'translateX(0)'})),
  transition('void => *', [
    style({transform: 'translateX(-100%)', opacity: 0}),
        group([
          animate('1s ease', style({
            transform: 'translateX(0)',
          })),
          animate('1.5s ease', style({
            opacity: 1
          }))
        ])
      ])
]);

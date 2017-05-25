import {  trigger,  state,  style,  animate,  transition} from '@angular/animations';

export const topBar = trigger('topBar', [
      state('burger', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('x', style({
        transform: 'translate3d(0, 8px, 0) rotate(45deg) scale(1.2)'
      })),
      transition('burger => x', animate('400ms ease-in-out')),
      transition('x => burger', animate('400ms ease-in-out'))
    ]);

export const middleBar = trigger('middleBar', [
      state('burger', style({
        opacity: 1
      })),
      state('x', style({
        opacity: 0,
      })),
      transition('burger => x', animate('400ms ease-in-out')),
      transition('x => burger', animate('400ms ease-in-out'))
    ]);

export const bottomBar = trigger('bottomBar', [
      state('burger', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('x', style({
        transform: 'translate3d(0, -8px, 0) rotate(-45deg) scale(1.2)'
      })),
      transition('burger => x', animate('400ms ease-in-out')),
      transition('x => burger', animate('400ms ease-in-out'))
    ]);
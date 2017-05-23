import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
    animations: [
    trigger('topBar', [
      state('burger', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('x', style({
        transform: 'translate3d(0, 8px, 0) rotate(45deg) scale(1.2)'
      })),
      transition('burger => x', animate('400ms ease-in-out')),
      transition('x => burger', animate('400ms ease-in-out'))
    ]),
    trigger('middleBar', [
      state('burger', style({
        opacity: 1
      })),
      state('x', style({
        opacity: 0,
      })),
      transition('burger => x', animate('400ms ease-in-out')),
      transition('x => burger', animate('400ms ease-in-out'))
    ]),
    trigger('bottomBar', [
      state('burger', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('x', style({
        transform: 'translate3d(0, -8px, 0) rotate(-45deg) scale(1.2)'
      })),
      transition('burger => x', animate('400ms ease-in-out')),
      transition('x => burger', animate('400ms ease-in-out'))
    ])]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isExpanded:boolean = true;
  iconState:string = 'burger';

  ngOnInit() {
  }

  public toggleMenu(){
    this.iconState = this.iconState === 'burger'? 'x': 'burger';
    return this.isExpanded = this.isExpanded === true? false : true;
  }

  public get menuIcon(): string {
    return this.isExpanded ? '☰' : '✖';
  }
  
}

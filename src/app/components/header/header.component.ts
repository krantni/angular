import { Component, OnInit } from '@angular/core';
import { bottomBar, middleBar, topBar } from './header.animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    topBar,
    middleBar,
    bottomBar
  ]
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

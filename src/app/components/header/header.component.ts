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
  developer:string[] = ['D','e','v','e','l','o','p','e','r'];
  developerHeading:string = '';

  ngOnInit() {
    let timeout:number = 300;
    this.developer.forEach(letter => {
      setTimeout(() => {
        this.developerHeading = this.developerHeading + letter;
      }, timeout);
      timeout += 250;
    });
  }

  public toggleMenu(){
    this.iconState = this.iconState === 'burger'? 'x': 'burger';
    return this.isExpanded = this.isExpanded === true? false : true;
  }
}

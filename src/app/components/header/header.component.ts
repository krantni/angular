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
  headers:string[][] = [['D','e','v','e','l','o','p','e','r'],
                          ['A','m','a','t','e','u','r',' ','C','h','e','f'], 
                          ['S','n','o','w','b','o','a','r','d','e','r'],
                          ['C','o','d','e','r'], 
                          ['J','u','s','t',' ','a',' ','G','u','y']];
  heading:string = '';
  
  ngOnInit() {
    this.RandomHeader();
  }

  public RandomHeader(){
    this.heading = '';
    let timeout:number = 300;
    let randomNumber = Math.floor(Math.random() * (6-1) + 0);
    let highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearTimeout(i); 
    }
    this.headers[randomNumber].forEach(letter => {
      setTimeout(() => {
        this.heading = this.heading + letter;
      }, timeout);
      timeout += 250;
    });
  }

  public toggleMenu(){
    this.iconState = this.iconState === 'burger'? 'x': 'burger';
    return this.isExpanded = this.isExpanded === true? false : true;
  }
}

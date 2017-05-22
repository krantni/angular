import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isExpanded = true;

  ngOnInit() {
  }

  public get menuIcon(): string {
    return this.isExpanded ? '☰' : '✖';
  }
  
}
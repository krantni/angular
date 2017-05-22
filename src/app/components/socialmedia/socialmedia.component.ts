import { Component, OnInit } from '@angular/core';
import { SocialMedia } from './socialMedia.metadata';
import { SITES } from './socialMedia.config';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  public sites: SocialMedia[];
  constructor() { }
  

  ngOnInit() {
    this.sites = SITES;
  }

}

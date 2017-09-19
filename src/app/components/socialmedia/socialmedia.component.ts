import { Component, OnInit } from '@angular/core';
import { GetSocialMediaService } from '../../services/get-socialmedia/get-social-media.service'

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  providers: [GetSocialMediaService],
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  public sites: JSON[];
  constructor(private getSocialMedia: GetSocialMediaService) { }
  

  ngOnInit() {
    this.getSocialMedia.getSocialMedia().subscribe(data => this.sites = data);;
  }

}

import { Component, OnInit } from '@angular/core';
import { Job } from './experience.metadata';
import { JOBS } from './experience.config';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {
  public jobs: Job[];

  constructor() { }

  ngOnInit() {
    this.jobs = JOBS;
  }

  public hasDetail(detail){
    return detail === "";
  }

}

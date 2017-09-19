import { Component, OnInit } from '@angular/core';
import { animateJob } from './experience.animations';
import { GetExperienceService } from '../../services/get-experience/get-experience.service'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers:[GetExperienceService],
  animations: [ animateJob ]
})

export class ExperienceComponent implements OnInit {
  public jobs: JSON[];
  jobState:string = 'inactive';

  constructor(private getExperience: GetExperienceService) { }

  ngOnInit() {
    this.getExperience.getExperience().subscribe(data => this.jobs = data);
    this.jobState = 'active';
  }

  public hasDetail(detail){
    return detail === "";
  }

}

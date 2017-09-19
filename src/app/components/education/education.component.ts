import { Component, OnInit} from '@angular/core';
import { animateSchool } from './education.animations';
import { GetEducationService } from '../../services/get-education/get-education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers:[ GetEducationService ],
  animations:[ animateSchool ]
})
export class EducationComponent implements OnInit {
  public schools: JSON[];
  schoolState:string = 'inactive';

  constructor(private getSchools: GetEducationService) { }

  ngOnInit() {
    this.getSchools.getEducation().subscribe(data => this.schools = data);
    this.schoolState = 'active';
  }

  hasMajor(major){
    return major === "";
  }

}

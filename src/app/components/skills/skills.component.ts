import { Component, OnInit } from '@angular/core';
import skills from 'src/app/json/skills.json'; 
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  opened:any = false;
  public data:{name:string, description:string, description1:string, 
    description2:string, description3:string}[] = skills;
  ngOnInit(): void {
  }

}

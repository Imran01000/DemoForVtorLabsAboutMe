import { Component, OnInit } from '@angular/core';
import aboutme from 'src/app/json/aboutme.json';  

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }
  opened:any = false;
  public data:{name:string, description:string, description1:string, description2:string}[] = aboutme;
  ngOnInit(): void {
  }

}

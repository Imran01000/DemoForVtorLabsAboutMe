import { Component, OnInit } from '@angular/core';
import homepage from 'src/app/json/homepage.json'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  opened:any = false;
  public data:{name:string, description:string}[] = homepage;
  ngOnInit(): void {
  }

}

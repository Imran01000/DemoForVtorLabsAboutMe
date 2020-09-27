import { Component, OnInit } from '@angular/core';
import mywork from 'src/app/json/mywork.json'; 

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent implements OnInit {

  constructor() { }
  opened:any = false;
  public data:{name:string, description:string, description1:string, 
    description2:string}[] = mywork;
  ngOnInit(): void {
  }

}

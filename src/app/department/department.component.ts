import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }



  Save(){
    console.log((<HTMLInputElement>document.getElementById("txtcode")).value)
    console.log((<HTMLInputElement>document.getElementById("txtdescription")).value)
}



}

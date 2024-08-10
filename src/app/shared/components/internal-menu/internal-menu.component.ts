import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
interface routerDataModel{
  department_name:string,
  action:string,
  link:string
}
@Component({
  selector: 'app-internal-menu',
  standalone: true,
  imports: [RouterModule,CommonModule,MaterialModule],
  templateUrl: './internal-menu.component.html',
  styleUrl: './internal-menu.component.scss'
})
export class InternalMenuComponent implements OnInit{

@Input() routerLinkObj: any

routeLinks!:routerDataModel[]

ngOnInit(): void {
  
  this.routeLinks=this.routerLinkObj;
}

}



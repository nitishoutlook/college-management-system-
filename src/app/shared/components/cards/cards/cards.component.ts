import { Component } from '@angular/core';
import { log } from '../../../../constant/config';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  department = log.departmentObj

  getDetails(val: string) {
    console.log(val);
  }
}

import { Component, OnInit } from '@angular/core';
import { SheetState } from 'ion-bottom-sheet';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  constructor() {
    console.log('address');
  }

  ngOnInit(): void {}
}
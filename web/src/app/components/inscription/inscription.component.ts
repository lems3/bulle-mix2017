import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  password_confirm: string;
  password_message: string;

  constructor() { }

  ngOnInit() {
  }

}

import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achat-bulle',
  templateUrl: './achat-bulle.component.html',
  styleUrls: ['./achat-bulle.component.css']
})
export class AchatBulleComponent implements OnInit {

  nombre: number;
  carte: string;

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
  }

  submit(){
    this.userService.achat(this.nombre)
    .then((success)=>{
      this.nombre = null;
      this.carte = "";
    })
    .catch((error)=>{
      alert("Erreur lors de la transaction");
    })
    return false;
  }

}

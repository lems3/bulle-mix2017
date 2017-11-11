import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

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

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(){
    if( this.password != this.password_confirm )
      this.password_message = "Notre mot de passe est différent"
    else{
      this.userService.register(this.name,this.email,this.password)
      .then((result) => {
        this.router.navigate(['/']);
      })
      .catch((error)=>{
        alert(error);
      })
    }
  }

}

import { Router } from '@angular/router';
import { User } from './../../models/user';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: User;
  email:string;
  password:string;

  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe((user) => this.user = user);
  }

  login(){
    this.userService.login(this.email,this.password)
    .then((result)=>{
      if(result){
        this.router.navigate(['achat']);
      }
    })
    .catch((error)=>{
      alert("Mauvais courriel ou mot de passe");
    })
  }

  logout(){
    this.userService.logout()
    .then((result)=>{
      this.router.navigate(['/']);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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

  constructor(private http: Http) { }

  ngOnInit() {
  }

  submit(){
    if( this.password != this.password_confirm )
      this.password_message = "Notre mot de passe est différent"
    else{
      this.http.post(
        'https://2q6hctzngk.execute-api.us-east-1.amazonaws.com/prod/inscription',
        {
          name:this.name,
          email:this.email,
          password:this.password
        }
      )
      .toPromise()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pws="";
  username='';
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  tryLogin(){
    if(this.pws=="admin" && this.username=="singithi"){
      console.log("dashboard");
      this.router.navigate(["dashboard"]);
    }else if(this.pws=="parent" && this.username=="singithi"){
      console.log("forum");
      this.router.navigate(["forum"]);
    }else{
     alert("Oops..Wrong username or password");
    } 
}
}


import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  StdNamesAndIDs:Observable<any[]>;
  StfNamesAndIDs:Observable<any[]>;
  Posts:Observable<any[]>;
  Events:Observable<any[]>;

  result1=0;
  result2=0;
  result3=0;
  result4=0;

  constructor(db: AngularFirestore,private router: Router,) {
    this.StdNamesAndIDs= db.collection('/Student').valueChanges();
    this.StdNamesAndIDs.subscribe(result1 => {this.result1=result1.length});

    this.StfNamesAndIDs= db.collection('/Staff').valueChanges();
    this.StfNamesAndIDs.subscribe(result2 => {this.result2=result2.length});

    this.Posts= db.collection('/Post').valueChanges();
    this.Posts.subscribe(result3 => {this.result3=result3.length});

    this.Events= db.collection('/Event').valueChanges();
    this.Events.subscribe(result4 => {this.result4=result4.length});

   }

  ngOnInit() {
  }

  
  attendanceLogin(){
    console.log("attendance Login");
    this.router.navigate(["attendance"]);
  }
  registerLogin(){
    console.log("registration");
    this.router.navigate(["register"]);
  }
  yearPlanLogin(){
    console.log("Year Plan Login");
    this.router.navigate(["year_plan"]);
  }
  adminForumLogin(){
    console.log("admin forum Login");
    this.router.navigate(["admin_forum"]);
  }
salaryLogin(){
  console.log("salary Login");
  this.router.navigate(["salary"]);
}
feesLogin(){
  console.log("fees Login");
  this.router.navigate(["fees"]);
}
leavesLogin(){
  console.log("leaves Login");
  this.router.navigate(["leave"]);
}
settingsLogin(){
  console.log("settings Login");
  this.router.navigate(["settings"]);
}
}

import { Component, OnInit } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }

  s_ID:String;
  stdName:String;
  /*FatherName:String;
  MotherName:String;
  Address1:String;
  OccuFather:String;
  OccuMother:String;
  nation:String;
  religion:String;*/

  t_ID:String;
  t_Name:String;
 /* Email_Id:String;
  phone:String;
  Address:String;
  city:String;*/

  /*onSubmit(){
    console.log("submit works");
    
    this.db.collection('Student').add({
      's_ID': this.s_ID,
      'stdName': this.stdName,
      });
      alert("Successfully submitted");
    }*/

  onSubmit1(){
    console.log("submit works");
    
    this.db.collection('Student').add({
      's_ID': this.s_ID,
      'stdName': this.stdName,
     /* 'FatherName':this.FatherName,
      'MotherName':this.MotherName,
       'Address1':this.Address1,
       'OccuFather':this.OccuFather,
       'OccuMother':this.OccuMother,
       'nation':this.nation,
        'religion':this.religion*/
      });
      alert("Successfully submitted");
    }

  onSubmit2(){
    console.log("submit works");
    
    this.db.collection('Staff').add({
      'staff_ID': this.t_ID,
      'name': this.t_Name,
       /* 'Email_Id':this.Email_Id,
        'phone':this.phone,
        'Address':this.Address,
       'city':this.city*/
      });
      alert("Successfully submitted");
    }
  }

  


import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import {Observable} from 'rxjs';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';



@Component({
  selector: 'app-admin-forum',
  templateUrl: './admin-forum.component.html',
  styleUrls: ['./admin-forum.component.css']
})


export class AdminForumComponent implements OnInit {

  post:Observable<any[]>;
  event:Observable<any[]>;

  title:String;
  onepost:String;

  e_title:String;
  eventDate:String;


  constructor(public db: AngularFirestore, private router: Router) {
    this.post= db.collection('/Post').valueChanges();
    this.event=db.collection('/Event').valueChanges();
  }

  onSubmit(){
    console.log("submit works");
    if(this.title==null|| this.onepost==null){
      alert("Please fill required fields..");
    }else{
    this.db.collection('Post').add({
      'title': this.title,
      'post': this.onepost,
      'date': new Date().toJSON().slice(0,10).replace(/-/g,'/'),     //send current date to database
      });
      alert("Successfully submitted");
    }
    document.forms['post_form'].reset();

  }

  onSubmit2(){
    console.log("submit event works");
    if(this.e_title==null|| this.eventDate==null){
      alert("Please fill required fields..");
    }else{
    this.db.collection('Event').add({
      'event': this.e_title,
      'date': this.eventDate,
      });
      alert("Successfully submitted");
    }
    document.forms['event_form'].reset();
  }

  
  onDelete(){
    console.log("delete works");
    this.db.collection('Post').doc('ZRT35qdGNiJaxQQXAb0c').delete();
  }
  
  ngOnInit() {
  }

}

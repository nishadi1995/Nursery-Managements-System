import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import {Observable} from 'rxjs';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  post:Observable<any[]>;
  event:Observable<any[]>;
  vari='warn is good';

  constructor(db: AngularFirestore, private router: Router) {
    this.post= db.collection('/Post').valueChanges();
    this.event=db.collection('/Event').valueChanges();
  }

  ngOnInit() {
  }
 
  Gohomepage(){
    this.router.navigate(["home"]);
  }
}

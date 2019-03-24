import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  std:Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.std= db.collection('/Student').valueChanges();
  }

  ngOnInit() {
  }

}

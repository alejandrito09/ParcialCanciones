import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/dat/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recording-list',
  templateUrl: './recording-list.page.html',
  styleUrls: ['./recording-list.page.scss'],
})
export class RecordingListPage implements OnInit {
  
  recordingList:any = [];

  constructor(private firestoreService: FirestoreService, private router: Router) { }

  ngOnInit() {
    this.recordingList = this.firestoreService.getRecordingList().valueChanges();
  }

}

import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/dat/firestore.service';

@Component({
  selector: 'app-cantantes',
  templateUrl: './cantantes.page.html',
  styleUrls: ['./cantantes.page.scss'],
})
export class CantantesPage implements OnInit {

   singers: any[]=[]

  constructor(
    private firestoreService: FirestoreService
    ) { }

  ngOnInit() {
    this.firestoreService.getSingers().then( res=> { this.singers = res })
  }

}

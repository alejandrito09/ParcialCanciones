import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/dat/firestore.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {

  images: any []=[]

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getImages().then( res=> { this.images = res; console.log(this.images);
     })
  }

}

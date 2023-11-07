import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/dat/firestore.service';
import { Song } from 'src/app/interfaces/song.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  songId : string
  song : Song
  updateSongForm:FormGroup

  constructor(
    private fb:FormBuilder, 
    private firestoreService : FirestoreService,
    private route:ActivatedRoute,
    private router: Router,
    private loadingController : LoadingController,
    private alertController : AlertController
    ) { 
    this.initForm()
  }

  ngOnInit() {
    this.songId = this.route.snapshot.paramMap.get('id');
    this.firestoreService.getSongDetail(this.songId)
    .get()
    .toPromise()
    .then(res => { 
      this.song = res.data()
      this.updateSongForm.patchValue(this.song)
    })

  }

  initForm(){
    this.updateSongForm = this.fb.group({
      id : ['',Validators.required],
      albumName: ['',Validators.required],
      artistName: ['',Validators.required],
      songDescription: ['',Validators.required],
      songName: ['',Validators.required],

    })
  }

  async updateSong(){
    if(this.updateSongForm.invalid){
      return;
    }

    const loading = await this.loadingController.create()
    const alert = await this.alertController.create({
      message : 'Update!',
      buttons : [{
        role : 'ok',
        text : 'Okay'
      }]
    })

    this.firestoreService.updateSong(this.updateSongForm.value)
    .then( () => {
      alert.present();
      this.router.navigateByUrl('home')
    })
    .finally(async () => loading.dismiss())

    loading.present()
  }
}

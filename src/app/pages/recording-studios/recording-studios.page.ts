import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/dat/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recording-studios',
  templateUrl: './recording-studios.page.html',
  styleUrls: ['./recording-studios.page.scss'],
})
export class RecordingStudiosPage implements OnInit {

  public recordingForm: FormGroup;

  constructor(
    public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    public firestoreService: FirestoreService, formBuilder: FormBuilder,
    public router: Router) { 

    this.recordingForm = formBuilder.group({
      nameRecording: ['',Validators.required],
      type_of_melody: ['',Validators.required],
      number_of_cabins: ['',Validators.required],
      Owner: ['',Validators.required],

    })
  }

  ngOnInit() {
  
  }
  async createRecording() {
    const loading = await this.loadingCtrl.create();
    const nameRecording = this.recordingForm.value.nameRecording;
    const type_of_melody = this.recordingForm.value.type_of_melody;
    const number_of_cabins = this.recordingForm.value.number_of_cabins;
    const Owner = this.recordingForm.value.Owner;
    this.firestoreService.createRecording(nameRecording, type_of_melody, number_of_cabins, Owner).then(
      () => {
        loading.dismiss().then(() =>{
        this.router.navigateByUrl('');
        });
    },
    error => {
      console.error(error);
    });
    return await loading.present();
  }

}

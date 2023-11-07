import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/dat/firestore.service';
import { Recording } from 'src/app/interfaces/recording.interface';

@Component({
  selector: 'app-update-recording',
  templateUrl: './update-recording.page.html',
  styleUrls: ['./update-recording.page.scss'],
})
export class UpdateRecordingPage implements OnInit {

  recordingId : string
  recording : Recording
  updateRecordingForm: FormGroup

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
    this.recordingId = this.route.snapshot.paramMap.get('id');
    this.firestoreService.getRecordingDetail(this.recordingId)
    .get()
    .toPromise()
    .then(res => { 
      this.recording = res.data()
      this.updateRecordingForm.patchValue(this.recording)
    })

  }

  initForm(){
    this.updateRecordingForm = this.fb.group({
      id : ['',Validators.required],
      nameRecording: ['',Validators.required],
      type_of_melody: ['',Validators.required],
      number_of_cabins: ['',Validators.required],
      Owner : ['',Validators.required],

    })
  }
  async updateRecording(){
    if(this.updateRecordingForm.invalid){
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

    this.firestoreService.updateRecording(this.updateRecordingForm.value)
    .then( () => {
      alert.present()
      this.router.navigateByUrl('recording-list')
    })
    .finally(async () => loading.dismiss())

    loading.present()
  }
}

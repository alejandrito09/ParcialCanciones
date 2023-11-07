import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recording } from 'src/app/interfaces/recording.interface';
import { FirestoreService } from 'src/app/services/dat/firestore.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail-recording',
  templateUrl: './detail-recording.page.html',
  styleUrls: ['./detail-recording.page.scss'],
})
export class DetailRecordingPage implements OnInit {

  recording:any = {}; recordingId:any
  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
    this.recordingId = this.route.snapshot.paramMap.get('id');
    this.recording = this.firestoreService.getRecordingDetail(this.recordingId).valueChanges();
  }
  
  async deleteRecording() {
    const alert = await this.alertController.create({ message: 'Esta seguro de eliminar esta grabación?', buttons: [
      {
        text: 'Cancel', role: 'cancel', handler: blah => {
          console.log('Confirm Cancel: blah');
        },
      },
      {
        text: 'Okay', handler: () => {
          this.firestoreService.deleteRecording(this.recordingId).then(()=> {
            this.router.navigateByUrl('');
          });
        },
      },
    ],});
    await alert.present();
  }
  }



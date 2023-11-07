import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRecordingPageRoutingModule } from './detail-recording-routing.module';

import { DetailRecordingPage } from './detail-recording.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRecordingPageRoutingModule
  ],
  declarations: [DetailRecordingPage]
})
export class DetailRecordingPageModule {}

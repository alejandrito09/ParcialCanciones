import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRecordingPageRoutingModule } from './update-recording-routing.module';

import { UpdateRecordingPage } from './update-recording.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateRecordingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateRecordingPage]
})
export class UpdateRecordingPageModule {}

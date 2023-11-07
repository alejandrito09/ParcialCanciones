import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRecordingPage } from './detail-recording.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRecordingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRecordingPageRoutingModule {}

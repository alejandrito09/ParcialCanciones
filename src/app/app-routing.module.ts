import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'cantantes',
    loadChildren: () => import('./pages/cantantes/cantantes.module').then( m => m.CantantesPageModule)
  },
  {
    path: 'recording-studios',
    loadChildren: () => import('./pages/recording-studios/recording-studios.module').then( m => m.RecordingStudiosPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'recording-list',
    loadChildren: () => import('./pages/recording-list/recording-list.module').then( m => m.RecordingListPageModule)
  },
  {
    path: 'detail-recording/:id',
    loadChildren: () => import('./pages/detail-recording/detail-recording.module').then( m => m.DetailRecordingPageModule)
  },
  {
    path: 'update-recording/:id',
    loadChildren: () => import('./pages/update-recording/update-recording.module').then( m => m.UpdateRecordingPageModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./pages/images/images.module').then( m => m.ImagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

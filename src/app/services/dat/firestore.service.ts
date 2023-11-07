import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import { Recording } from 'src/app/interfaces/recording.interface';
import { Song } from 'src/app/interfaces/song.interface';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createSong( albumName: string, artistName: string, songDescription: string, songName:string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set({ id,albumName, artistName, songDescription, songName,
    });
  }

  getSongList ( ): AngularFirestoreCollection<Song> {
    return this.firestore.collection(`songList`);
  }
  
  getSongDetail ( songId: string ): AngularFirestoreDocument<Song> {
    return this.firestore.collection(`songList`).doc(songId);
  }

  updateSong( song : Song ):Promise<void>{
    return this.firestore.collection(`songList`).doc(song.id).update(song);
  }

  deleteSong ( songId: string ): Promise<void> {
    return this.firestore.doc(`songList/${songId}`).delete();
  }

  getSingers () {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then( data => data.json())
    .then( val => val)
  }

  createRecording( nameRedording: string, type_of_melody: string, number_of_cabins:string, Owner: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`recordingList/${id}`).set({ id,nameRedording, type_of_melody, number_of_cabins, Owner,
    });
  }

  getRecordingList ( ): AngularFirestoreCollection<Recording> {
    return this.firestore.collection(`recordingList`);
  }

  updateRecording( recording : Recording ):Promise<void>{
    console.log(recording);
    
    return this.firestore.collection(`recordingList`).doc(recording.id).update(recording);
  }

  deleteRecording ( recordingId: string ): Promise<void> {
    return this.firestore.doc(`recordingList/${recordingId}`).delete();
  }

  getRecordingDetail ( recordingId: string ): AngularFirestoreDocument<Recording> {
    return this.firestore.collection(`recordingList`).doc(recordingId);
  }

  getImages () {
    return fetch("https://jsonplaceholder.typicode.com/photos?_limit=9")
    .then( data => data.json())
    .then( val => val)
  }
  
  
}

import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(public af: AngularFireStorage) {}


  public uploadImage(file: File, userId: string): void {
    if (!file) {
      return;
    }
    this.af.ref('users/' + userId + '/profile.jpg')
    .put(file).then(
      () => {
        console.log("Success upload");
      }
    ).catch (error => {
      console.log(error);
    })
  }

  // private onSuccess(): void {
  //   this.selectedFile.pending = false;
  //   this.selectedFile.status = 'ok';
  // }

  // private onError(): void {
  //   this.selectedFile.pending = false;
  //   this.selectedFile.status = 'fail';
  //   this.selectedFile.src = '';
  // }
}

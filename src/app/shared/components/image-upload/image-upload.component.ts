import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageService } from './image-upload.service';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.scss']
})
export class ImageUploadComponent {
  userId: string;
  @Output() file = new EventEmitter;
  selectedFile: ImageSnippet;

  constructor(
    private imageService: ImageService,
    public af: AngularFireStorage
  ){}

  processFile(imageInput: any): void {
    const file: File = imageInput.files[0];
    this.file.emit(file);
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      // this.imageService.uploadImage(this.selectedFile.file).subscribe(
      //   (res) => {
      //     this.onSuccess();
      //   },
      //   (err) => {
      //     this.onError();
      //   });
    });

    reader.readAsDataURL(file);
  }
}

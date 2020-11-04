import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Photo } from 'src/app/models/gallery';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit {
  @Input() photo: Photo 

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  saveData(): void {
    let rating=document.getElementById('number').value
    // Use the closemethod to pass data back to the parent component
    this.activeModal.close({
      'photoId': this.photo.id,
      'rating': rating
    })
  }

}

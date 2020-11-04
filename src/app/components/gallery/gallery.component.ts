import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../../services/gallery/gallery.service';
import {Album,Photo} from '../../models/gallery'
import  {GalleryModalComponent} from '../gallery-modal/gallery-modal.component'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [NgbModal]
})
export class GalleryComponent implements OnInit {
  rating = 0
  albums:Album[];
  photos:Photo[];
  
  constructor(private gs:GalleryService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.gs.getPhotos().subscribe(photos => {
      photos.forEach(photo => {
        // initialize the ratings on the photos
        photo.rating = this.rating
      })
      this.photos = photos;
    })
  }

  openModal(photo):void {
    
    console.log(`photo: ${photo}`)
    const modalRef = this.modalService.open(GalleryModalComponent, { size: 'lg' });
    modalRef.componentInstance.photo = photo
    modalRef.result.then(data => {
      this.rating = data.rating
      // get photo object
      let photoToChange = this.photos.find(x => x.id === data.photoId)
      
      // insert rating as prop to object
      photoToChange.rating = data.rating

    })
  }
}

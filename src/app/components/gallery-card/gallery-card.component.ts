import { Component, OnInit, Input } from '@angular/core';
import {Photo} from '../../models/gallery'

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.css']
})
export class GalleryCardComponent implements OnInit {
  @Input() rating:number;
  @Input() photo:Photo
  constructor() { }

  ngOnInit(): void {
    
  }

}

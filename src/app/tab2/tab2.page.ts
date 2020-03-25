import { Component } from '@angular/core';

// addition
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // constructor() {}

  // addition
  constructor(public photoService: PhotoService) { }
  
  // addition
  ngOnInit() {
    this.photoService.loadSaved();
  }


}

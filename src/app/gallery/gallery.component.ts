import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  public hotelData:any;

  constructor(private httpService :HttpService){
    this.httpService.getAllHotels().subscribe(data => {
      this.hotelData = data;
      console.log(this.hotelData)
    })
  }
}

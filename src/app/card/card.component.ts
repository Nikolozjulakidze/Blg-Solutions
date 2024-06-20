import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public title: string | null = null;
  public price: number | null = null;
  public imageUrl: string | null = null;

  constructor(public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.price = params['price'];
      this.imageUrl = params['imageUrl'];
    });
  }
}


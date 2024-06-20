import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] 
})
export class DetailsComponent {  

  public newSpeaker!: string;
  public selectedProduct: any;
  public Products: any[] = [ 
    {
      title:'Im a Product',
      price:"$19.99",
      images:'https://static.wixstatic.com/media/9c608a_1a0f12c2b7d44080a23e2642cae13b74.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c608a_1a0f12c2b7d44080a23e2642cae13b74.jpg',
      active:true,
    },
    {
      title:' Im a Product',
      price:"$19.99",
      images:'https://static.wixstatic.com/media/9c608a_8ac1adb0a50749a5aa72cd0181945cd0.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c608a_8ac1adb0a50749a5aa72cd0181945cd0.jpg',
      active:true,
    },
    {
      title:'Im a Product',
      price:"$19.99",
      images:'https://static.wixstatic.com/media/9c608a_8db6307d7c7b4b70b675a59fd036787e.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c608a_8db6307d7c7b4b70b675a59fd036787e.jpg',
      descr:'T-shirt',
      active:true,
    },
    {
      title:'Im a product',
      price:"$19.99",
      images:'https://static.wixstatic.com/media/9c608a_a220b0ace7c14f89b580dceded35f7b6.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c608a_a220b0ace7c14f89b580dceded35f7b6.jpg',
      descr:'T-shirt',
      active:true,
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.selectedProduct = this.Products.find(product => product.title === slug);
    });
  }

  
}

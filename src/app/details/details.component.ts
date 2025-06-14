import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';  // Correct import

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, TranslateModule],  // Import TranslateModule
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']  // fix typo here
})
export class DetailsComponent {
  title: string = '';
  item: any;

  items = [
    {
      title: 'gasgo-vazisubani',
      images: [
        
      ],
      text: 'DETAILS.gasgoVazisubani.description'
    },
    {
      title: 'tbilisi-marriott',
      images: [
       
      ],
      text: 'DETAILS.tbilisiMariott.description'
    },
    {
      title: 'urban-x',
      images: [
        '../../assets/Projects/Urban x picture 1 .jpg',
        '../../assets/Projects/Urban x picture 2.jpg',
        '../../assets/Projects/Urban x picture 3.jpg',
        '../../assets/Projects/Urban x picture 4.jpg',
        '../../assets/Projects/Urban x picture 5.jpg',
      ],
      // Here use the translation key as string only
      text: 'DETAILS.urbanX.description'  
    },
    {
      title: 'oda-vazisubani',
      images: [
        '../../assets/Projects/oda 1.jpg',
        '../../assets/Projects/oda 2.jpg',
        '../../assets/Projects/oda 3.jpg',
        '../../assets/Projects/oda 4.jpg',
      ],
      text: 'DETAILS.odaVazisubani.description'
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title') || '';
      this.item = this.items.find(i => i.title === this.title);
    });
  }
}

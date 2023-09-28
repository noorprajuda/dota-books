import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {
  names = [
    'ABADDON',
    'ALCHEMIST',
    'ANCIENT APPARITION',
    'ANTI-MAGE',
    'ARC WARDEN'
  ];

  texts = [
    'LORD OF AVERNUS',
    'RAZZIL DARKBREW',
    'KALDR',
    'MAGINA',
    'ZET',
  ];

  images = [
    'assets/img/heroes/1.jpg',
    'assets/img/heroes/2.jpg',
    'assets/img/heroes/3.jpg',
    'assets/img/heroes/4.jpg',
    'assets/img/heroes/5.jpg',
  ];
  

}

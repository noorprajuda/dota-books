import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  // names = [
  //   'ABADDON',
  //   'ALCHEMIST',
  //   'ANCIENT APPARITION',
  //   'ANTI-MAGE',
  //   'ARC WARDEN'
  // ];

  // texts = [
  //   'LORD OF AVERNUS',
  //   'RAZZIL DARKBREW',
  //   'KALDR',
  //   'MAGINA',
  //   'ZET',
  // ];

  // images = [
  //   'assets/img/heroes/1.jpg',
  //   'assets/img/heroes/2.jpg',
  //   'assets/img/heroes/3.jpg',
  //   'assets/img/heroes/4.jpg',
  //   'assets/img/heroes/5.jpg',
  // ];

  names = [];
  texts = [];
  images = [];

  constructor() { }

  addHero(name, text, image) {
    this.names.push(name)
    this.texts.push(text)
    this.images.push(image)
  }
}

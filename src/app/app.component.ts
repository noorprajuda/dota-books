import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dota-books';

  postNames = [
    "ABADDON",
    'ALCHEMIST',
    'ANCIENT APPARITION',
    'ANTI-MAGE',
    'ARC WARDEN'
  ];

  postTexts = [
    'LORD OF AVERNUS\n\nFACTION: THE DIRE \nPRIMARY ATTRIBUTE: UNIVERSAL \nATTACK TYPE: MELEE \nROLE(S): LANE-SUPPORT,DURABLE,SEMI-CARRY,SUPPORT',
    'RAZZIL DARKBREW\n\nFACTION: THE RADIANT \nPRIMARY ATTRIBUTE: STRENGTH \nATTACK TYPE: MELEE \nROLE(S): CARRY,DISABLER',
    'KALDR\n\nFACTION: THE DIRE \nPRIMARY ATTRIBUTE: INTELLIGENCE \nATTACK TYPE: RANGED \nROLE(S): DISABLER,SUPPORT',
    'MAGINA\n\nFACTION: THE RADIANT \nPRIMARY ATTRIBUTE: AGILITY \nATTACK TYPE: MELEE \nROLE(S): CARRY,ESCAPE',
    'ZET\n\nFACTION: THE DIRE \nPRIMARY ATTRIBUTE: AGILITY \nATTACK TYPE: RANGED \nROLE(S): CARRY,PUSHER'
  ];

  postImages = [
    'assets/img/heroes/1.jpg',
    'assets/img/heroes/2.jpg',
    'assets/img/heroes/3.jpg',
    'assets/img/heroes/4.jpg',
    'assets/img/heroes/5.jpg',
  ];
}

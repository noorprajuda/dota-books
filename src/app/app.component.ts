import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dota-books';

  postTexts = [
    "ABADDON \n LORD OF AVERNUS \n FACTION:	THE DIRE \n PRIMARY ATTRIBUTE:	UNIVERSAL \n ATTACK TYPE:	MELEE \n ROLE(S):	LANE-SUPPORT,DURABLE,SEMI-CARRY,SUPPORT",
    'ALCHEMIST \n RAZZIL DARKBREW \n FACTION:	THE RADIANT \n PRIMARY ATTRIBUTE:	STRENGTH \n ATTACK TYPE:	MELEE \n ROLE(S):	CARRY,DISABLER',
    'ANCIENT APPARITION \n KALDR \n FACTION:	THE DIRE \n PRIMARY ATTRIBUTE:	INTELLIGENCE \n ATTACK TYPE:	RANGED \n ROLE(S):	DISABLER,SUPPORT',
    'ANTI-MAGE \n MAGINA \n FACTION:	THE RADIANT \n PRIMARY ATTRIBUTE:	AGILITY \n ATTACK TYPE:	MELEE \n ROLE(S):	CARRY,ESCAPE',
    'ARC WARDEN \n ZET \n FACTION:	THE DIRE \n PRIMARY ATTRIBUTE:	AGILITY \n ATTACK TYPE:	RANGED \n ROLE(S):	CARRY,PUSHER'
  ];

  postImages = [
    'assets/img/heroes/1.jpg',
    'assets/img/heroes/2.jpg',
    'assets/img/heroes/3.jpg',
    'assets/img/heroes/4.jpg',
    'assets/img/heroes/5.jpg',
  ];
}

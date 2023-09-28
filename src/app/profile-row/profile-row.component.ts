import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {
 @Input() name: string = 'ABADDON';
 @Input() description: string = 'LORD OF AVERNUS';
 @Input() img: string = 'assets/img/heroes/1.jpg';
 @Input() canFollow: boolean = true;

 constructor (public hs: HeroService){}

 ngOnInit(): void {
   
 }
 
}

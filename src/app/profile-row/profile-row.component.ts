import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent {
 @Input() name: string = 'ABADDON';
 @Input() description: string = 'LORD OF AVERNUS';
 @Input() img: string = 'assets/img/heroes/1.jpg';
 
}

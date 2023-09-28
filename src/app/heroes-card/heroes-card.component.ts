import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.scss']
})
export class HeroesCardComponent {
  @Input() name:string = '';
  @Input() text:string = '';
  @Input() img:string = '';
}
